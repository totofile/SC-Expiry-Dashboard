(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6929:function(e,t,r){Promise.resolve().then(r.bind(r,6774))},6774:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7437),o=r(2265),c=r(6463),i=r(1516);function u(){let e=(0,c.useRouter)(),{isAuth:t}=(0,i.a)();return(0,o.useEffect)(()=>{t&&e.push("/dashboard")},[t,e]),(0,n.jsx)("div",{className:"flex items-start justify-center min-h-screen mt-10",children:(0,n.jsx)("h1",{className:"text-2xl",children:"Bienvenue, veuillez vous authentifier pour acc\xe9der aux informations"})})}},1516:function(e,t,r){"use strict";r.d(t,{H:function(){return a},a:function(){return l}});var n=r(7437),o=r(2265),c=r(4766),i=r(6504),u={clientId:"daf4c825-110a-4385-a469-916c272ae5c3",authority:"https://login.microsoftonline.com/f43e2fea-8e52-469a-a796-56e4c4bcb1f5/",redirectUri:"http://localhost:3000/"};let s=(0,o.createContext)(void 0),a=e=>{let{children:t}=e,[r,a]=(0,o.useState)(!1),l=(0,o.useRef)(null);(0,o.useEffect)(()=>{(async()=>{try{l.current=new c.Lx({auth:{clientId:u.clientId,authority:u.authority,redirectUri:u.redirectUri},cache:{cacheLocation:"sessionStorage",storeAuthStateInCookie:!0}}),await l.current.initialize();let e={scopes:["Directory.Read.All"],account:l.current.getAllAccounts()[0]||void 0};try{let t=await l.current.ssoSilent(e);console.log("SSO Silent successful",t),a(!0)}catch(e){e instanceof i.Ut&&"login_required"===e.errorCode?l.current.getAllAccounts().length>0&&a(!0):console.warn("SSO Silent failed, user interaction required",e)}}catch(e){console.error("MSAL initialization failed",e)}})()},[]);let d=async()=>{console.log("Login button clicked");try{var e;await (null===(e=l.current)||void 0===e?void 0:e.loginPopup({scopes:["Directory.Read.All"]})),console.log("Login successful"),a(!0)}catch(e){console.error("Login failed",e)}},f=async()=>{l.current&&(await l.current.logoutPopup().catch(e=>console.error("Logout failed",e)),a(!1),l.current=null,window.location.reload())};return(0,n.jsx)(s.Provider,{value:{isAuth:r,login:d,logout:f,publicClientAppRef:l},children:t})},l=()=>{let e=(0,o.useContext)(s);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})}},function(e){e.O(0,[766,971,23,744],function(){return e(e.s=6929)}),_N_E=e.O()}]);