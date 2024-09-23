// app/page.tsx
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/authContext';

export default function Home() {
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.push('/dashboard');
    }
  }, [isAuth, router]);

  return (
    <div className="flex items-start justify-center min-h-screen mt-10">
      <h1 className="text-2xl">Bienvenue, veuillez vous authentifier pour accéder aux informations</h1>
    </div>
  );
}