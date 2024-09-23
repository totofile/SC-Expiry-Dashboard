"use client";
import React, { useEffect, useState } from 'react';
import { useRouter }from 'next/navigation';
import { InteractionType, PublicClientApplication, AuthenticationResult } from '@azure/msal-browser';
import { Client } from '@microsoft/microsoft-graph-client';
import { AuthCodeMSALBrowserAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser';
import { formatDate, calculateDaysToExpiry } from './dateUtils';
import { fetchApplications, fetchSecrets, fetchCertificates } from './applicationService';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useAuth } from './authContext';

const Corps: React.FC = () => {
    const { isAuth, publicClientAppRef } = useAuth();
    const [rowData, setRowData] = useState<any[]>([]);
    const [daysToExpiry, setDaysToExpiry] = useState<number>(30);
    const [loading, setLoading] = useState<boolean>(true);
    const router = useRouter();

    useEffect(() => {
        console.log("isAuth:", isAuth);
        if (isAuth) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, [isAuth,daysToExpiry]);

    const fetchData = async () => {
        if (!publicClientAppRef.current) return;

        const account = publicClientAppRef.current.getAllAccounts()[0];
        if (!account) {
            console.error("No account found");
            setLoading(false);
            return;
        }

        try {
            const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(publicClientAppRef.current, {
                account: account,
                scopes: ["Directory.Read.All"],
                interactionType: InteractionType.Popup,
            });

            const client = Client.initWithMiddleware({ authProvider });

            const applications = await fetchApplications(client);
            console.log("Applications:", applications);

            const [appsWithSecrets, appsWithCertificates] = await Promise.all([
                fetchSecrets(client, applications),
                fetchCertificates(client, applications)
            ]);

            console.log("Applications with Secrets:", appsWithSecrets);
            console.log("Applications with Certificates:", appsWithCertificates);

            const flattenedData = flattenData(applications, appsWithSecrets, appsWithCertificates);
            console.log("Flattened Data:", flattenedData);

            setRowData(flattenedData);
        } catch (error) {
            console.error("Fetching data failed", error);
        } finally {
            setLoading(false);
        }
    };

    const flattenData = (applications: any[], appsWithSecrets: any[], appsWithCertificates: any[]) => {
        const flattened: any[] = [];
        applications.forEach(app => {
            const appWithSecrets = appsWithSecrets.find(a => a.id === app.id) || { secrets: [] };
            const appWithCertificates = appsWithCertificates.find(a => a.id === app.id) || { certificates: [] };
    
            appWithSecrets.secrets.forEach((secret: any) => {
                if (calculateDaysToExpiry(secret.endDateTime) <= daysToExpiry) {
                    flattened.push({
                        applicationName: app.displayName,
                        type: 'secret',
                        displayName: secret.displayName,
                        endDateTime: secret.endDateTime,
                        daysToExpiry: calculateDaysToExpiry(secret.endDateTime)
                    });
                }
            });
    
            appWithCertificates.certificates.forEach((cert: any) => {
                if (calculateDaysToExpiry(cert.endDateTime) <= daysToExpiry) {
                    flattened.push({
                        applicationName: app.displayName,
                        type: 'certificate',
                        displayName: cert.displayName,
                        endDateTime: cert.endDateTime,
                        daysToExpiry: calculateDaysToExpiry(cert.endDateTime)
                    });
                }
            });
        });
        return flattened;
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isAuth) {
        router.push('/');
        return null;
    }
    const getColumnDefs = () => {
        return [
            {
                headerName: "Secret/Certificate Display Name",
                field: "displayName",
                flex: 1,
                resizable: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: "Type",
                field: "type",
                flex: 1,
                resizable: true,
                sortable: true,
                filter: 'agTextColumnFilter'
            },
            {
                headerName: "Application Name",
                field: "applicationName",
                sortable: true,
                filter: 'agTextColumnFilter',
                flex: 1,
                resizable: true
            },

            {
                headerName: "End Date",
                field: "endDateTime",
                sortable: true,
                flex: 1,
                resizable: true,
                valueFormatter: (params: any) => formatDate(params.value)
            },
            {
                headerName: "Days To Expiry",
                field: "daysToExpiry",
                cellDataType: 'number',
                flex: 1,
                resizable: true,
                sortable: true,
                filter: 'agNumberColumnFilter'
            },

        ];
    };

    return (
        <div>
            <div className="text-lg mx-20">
                <div className="flex justify-between items-center bg-cyan-500 text-black text-center rounded p-4 mx-auto mt-10 mb-10">
                    <div className='flex justify-between items-center'>
                        <p className='mr-5'>Days to Expiry</p>
                        <input className='border rounded' type="number" placeholder='Default: 30' onChange={(e) => setDaysToExpiry(Number(e.target.value))} />
                    </div>
                </div>
                <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
                    <AgGridReact
                        rowData={rowData}
                        columnDefs={getColumnDefs()}
                        domLayout='autoHeight'
                        pagination={true}
                        paginationPageSize={10}
                    />
                </div>
            </div>
        </div>
    );
};

export default Corps;