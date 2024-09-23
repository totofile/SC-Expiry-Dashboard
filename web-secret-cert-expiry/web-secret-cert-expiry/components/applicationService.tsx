import { Client } from '@microsoft/microsoft-graph-client';


export const fetchApplications = async (client: Client) => {
    try {
        const response = await client.api('/applications').get();
        return response.value;
    } catch (error) {
        console.error("Fetching applications failed", error);
        return [];
    }
};

export const fetchSecrets = async (client: Client, applications: any[]) => {
    try {
        const promises = applications.map(async (app) => {
            const secrets = await client.api(`/applications/${app.id}/passwordCredentials`).get();
            return { ...app, secrets: secrets.value };
        });
        return await Promise.all(promises);
    } catch (error) {
        console.error("Fetching secrets failed", error);
        return [];
    }
};

export const fetchCertificates = async (client: Client, applications: any[]) => {
    try {
        const promises = applications.map(async (app) => {
            const certificates = await client.api(`/applications/${app.id}/keyCredentials`).get();
            return { ...app, certificates: certificates.value };
        });
        return await Promise.all(promises);
    } catch (error) {
        console.error("Fetching certificates failed", error);
        return [];
    }
};