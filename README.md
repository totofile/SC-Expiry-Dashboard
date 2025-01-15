# Implémentation dans un environnement azure

## 1. Enregistrer une application https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app

## 2. Une fois l'application enregistré autoriser les api suivantes 
![image](https://github.com/user-attachments/assets/8688a65a-87eb-478e-b9fd-5aaab084f548)

## 3. Dans le volet app registration / Authentication 
Renseignez le lien (hostname de la static web app) dans redirect URIs exemple "https://sc-expiry-dashboard.azurewebsites.net"
![image](https://github.com/user-attachments/assets/dedf2a95-06c8-47af-a7eb-cc735621b3e8)


## 4. FORK le répertoire GitHub -> https://github.com/totofile/SC-Expiry-Dashboard

## 5. Modifier le fichier compoennts/auth.tsx avec vos informations d'identification d'application 


## 6. Executer la ligne PowerShell suivante ou bien créer votre static web app à la main en liant le déploiement à votre dépot github celui de l'app que vous avez fork : 
```bash az staticwebapp create  -n <webAppName> -g <RgName> -l <WebApp_location> -s <SourceRepository>  -b <GitBranch> -t <Your_developper_GH_Token_for_azure> ```

## 7. Pour autoriser des utilisateurs
Placez des utilisateurs dans entreprisse apps -> users and groups

![image](https://github.com/user-attachments/assets/f0146dca-3910-4245-bb8e-253b3ddb4461)


## Si vous voulez apporter des modification à l'application 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
