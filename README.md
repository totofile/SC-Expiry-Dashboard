# Implementation in an Azure environment

## 1. [Register an Application](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)

## 2. Once the application has been registered, authorize the following api

![image](https://github.com/user-attachments/assets/8688a65a-87eb-478e-b9fd-5aaab084f548)

## 3. In the app registration / Authenticatio
Enter the link (hostname of the static web app) in redirect URIs example 'https://sc-expiry-dashboard.azurewebsites.net'

![image](https://github.com/user-attachments/assets/dedf2a95-06c8-47af-a7eb-cc735621b3e8)


## 4.  FORK the GitHub Repository -> https://github.com/totofile/SC-Expiry-Dashboard


## 5. Modify the compoennts/auth.tsx file with your application credentials 


## 6. Execute the following PowerShell line, or create your static web app by hand, linking the deployment to your github repository (the one for the app you've forked). : 
```bash az staticwebapp create  -n <webAppName> -g <RgName> -l <WebApp_location> -s <SourceRepository>  -b <GitBranch> -t <Your_developper_GH_Token_for_azure> ```

## 7. To authorize users
Place users in entreprisse apps -> users and groups

![image](https://github.com/user-attachments/assets/f0146dca-3910-4245-bb8e-253b3ddb4461)


## If you want to make changes to the application  

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
