'use client';
import './globals.css';
import { AuthProvider } from '../components/authContext';
import Header from '../components/header';
import Footer from '../components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <body className="flex flex-col min-h-screen">
            <Header />
                <main>{children}</main>
            <Footer />
        </body>
      </html>
    </AuthProvider>
  );
}