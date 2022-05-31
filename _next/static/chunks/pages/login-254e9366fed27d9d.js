(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{4535:function(e,r,t){"use strict";t.d(r,{Z:function(){return o}});var a=t(7294),n=t(5893);function o(e){var r=e.children,t=e.label,o=e.backgroundColor,s=e.dark,d=e.onClick,i=(0,a.useState)(!1),l=i[0],c=i[1];return(0,n.jsx)("span",{className:"_auth-3rd-party-button block",children:(0,n.jsxs)("button",{onClick:d,style:{backgroundColor:l?s:o,borderColor:s},onMouseOver:function(){c(!0)},onMouseOut:function(){c(!1)},className:"flex items-center gap-4 text-white py-2 px-3 rounded-md w-72 cursor-pointer border duration-200",children:[(0,n.jsx)("div",{children:r}),(0,n.jsx)("div",{children:t})]})})}},9787:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var a=t(7294),n=t(2370),o=t(4535),s=t(2809),d=t(3780),i=t(1664),l=t(5893);function c(e){var r=e.selected,t=e.tabs,a=e.layoutId;return(0,l.jsxs)("div",{className:"_tab-switcher flex relative w-fit mt-5 whitespace-nowrap",children:[t.map((function(e,t){return(0,l.jsx)("div",{className:"rounded-t-lg transition-colors ".concat(r===t?"":"hover:bg-day-150 hover:dark:bg-night-150 cursor-pointer"),children:(0,l.jsx)(i.default,{href:e.link,children:(0,l.jsxs)("a",{className:"border-none ".concat(r===t?"text-theme-200":"text-day-400 dark:text-night-400"),children:[(0,l.jsx)("p",{className:"px-4 py-2",children:e.name}),r===t?(0,l.jsx)(d.E.div,{layoutId:a,className:"bg-theme-200 w-full h-1 rounded-t-md mt-1 relative z-10",transition:{type:"spring",duration:.5,bounce:.4}}):(0,l.jsx)(l.Fragment,{})]})})},t)})),(0,l.jsx)("div",{className:"bg-day-250 dark:bg-night-250 w-full absolute h-1 bottom-0 rounded-t-md"})]})}var u=t(8219);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,s.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e){var r=e.newUser,t=(0,a.useState)({value:"",error:""}),o=t[0],s=t[1],d=(0,a.useState)({value:"",error:""}),i=d[0],h=d[1],b=(0,a.useState)({value:"",error:""}),m=b[0],p=b[1],g=(0,a.useState)(!1),f=g[0],v=g[1],y=(0,a.useState)(void 0),w=y[0],j=y[1],k=(0,a.useMemo)((function(){return console.log(f,!!o.error,!!i.error,!!m.error),f||!!o.error||!!i.error||!!m.error}),[f,o.error,i.error,m.error]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(c,{tabs:[{name:"Login",link:"/login"},{name:"Signup",link:"/signup"}],selected:r?1:0,layoutId:"authEmailFormTab"}),w&&(0,l.jsxs)("div",{className:"flex items-center gap-4 border py-2 px-3 rounded-md w-72 mt-4 ".concat("ERROR"===w.type?"bg-red-100 text-red-400 border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-800":"bg-orange-100 text-orange-400 border-orange-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-800"),children:["ERROR"===w.type&&(0,l.jsx)(n.OvZ,{className:"text-xl w-6"}),(0,l.jsx)("div",{className:"w-60 text-md",children:w.text})]}),(0,l.jsxs)("form",{className:"flex flex-col gap-4 mt-4",onSubmit:function(e){e.preventDefault(),r&&i.value!==m.value?p(x(x({},m),{},{error:"Passwords don't match."})):(v(!0),(0,u.Ry)(o.value,i.value,r).catch((function(e){switch(v(!1),e.code){case"auth/app-deleted":case"auth/app-not-authorized":case"auth/invalid-api-key":j({text:"Sorry, Scorecard is not available right now. ".concat(e.code),type:"ERROR"});break;case"auth/unauthorized-domain":case"auth/user-disabled":j({text:"Sorry, you cannot use Scorecard right now. ".concat(e.code),type:"ERROR"});break;case"auth/email-already-exists":s(x(x({},o),{},{error:"This account already exists."}));break;case"auth/invalid-password":h(x(x({},i),{},{error:"Invalid password format."}));break;case"auth/user-not-found":s(x(x({},o),{},{error:"This account doesn't exist."}));break;case"auth/wrong-password":h(x(x({},i),{},{error:"Incorrect password."}));break;case"auth/too-many-requests":j({text:"You're logging in too much. Please wait a few moments.",type:"ERROR"});break;default:j({text:"Sorry, an unknown error occured. ".concat(e.code),type:"ERROR"})}})).then((function(){v(!1)})))},children:[(0,l.jsxs)("label",{children:[(0,l.jsxs)("span",{className:" mb-1 flex text-sm justify-between w-full",children:[(0,l.jsx)("div",{className:"text-day-400 dark:text-night-400",children:"Email"}),o.error&&(0,l.jsx)("div",{className:"text-red-600 dark:text-red-400",children:o.error})]}),(0,l.jsx)("input",{value:o.value,onChange:function(e){s({error:"",value:e.target.value})},placeholder:"Email",type:"email",className:"block bg-day-100 dark:bg-night-100 border border-day-300 dark:border-night-300 py-2 px-3 w-72 rounded-md outline-none text-day-700 dark:text-night-700 focus:border-theme-200"})]}),(0,l.jsxs)("label",{children:[(0,l.jsxs)("span",{className:" mb-1 flex text-sm justify-between w-full",children:[(0,l.jsx)("div",{className:"text-day-400 dark:text-night-400",children:"Password"}),i.error&&(0,l.jsx)("div",{className:"text-red-600 dark:text-red-400",children:i.error})]}),(0,l.jsx)("input",{value:i.value,onChange:function(e){h({error:"",value:e.target.value})},placeholder:"Password",type:"password",className:"block bg-day-100 dark:bg-night-100 border border-day-300 dark:border-night-300 py-2 px-3 w-72 rounded-md outline-none text-day-700 dark:text-night-700 focus:border-theme-200"})]}),r&&(0,l.jsxs)("label",{children:[(0,l.jsxs)("span",{className:" mb-1 flex text-sm justify-between w-72 flex-wrap",children:[(0,l.jsx)("div",{className:"text-day-400 dark:text-night-400",children:"Confirm Password"}),m.error&&(0,l.jsx)("div",{className:"text-red-600 dark:text-red-400",children:m.error})]}),(0,l.jsx)("input",{value:m.value,onChange:function(e){p({error:"",value:e.target.value})},placeholder:"Confirm Password",type:"password",className:"block bg-day-100 dark:bg-night-100 border border-day-300 dark:border-night-300 py-2 px-3 w-72 rounded-md outline-none text-day-700 dark:text-night-700 focus:border-theme-200"})]}),(0,l.jsx)("input",{disabled:k,type:"submit",value:r?"Signup":"Login",className:"bg-theme-100 dark:bg-theme-200 text-theme-200 dark:text-white py-2 rounded-md mt-2 disabled:opacity-50 transition-opacity"})]})]})}function m(e){var r=e.tab;return(0,l.jsx)("div",{className:"w-full h-full flex justify-center items-center absolute top-0 bottom-0",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-2xl font-medium text-day-700 dark:text-night-700",children:"Login to Scorecard"}),(0,l.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,l.jsx)(o.Z,{onClick:function(){var e=window.open("/login/with-google","_blank","location=yes,toolbar=no,statusbar==yes,resizable=yes,width=500,height=600,top=".concat(Math.max((window.screen.availHeight-600)/2,0).toString(),",left=").concat(Math.max((window.screen.availWidth-500)/2,0).toString()));null===e||void 0===e||e.addEventListener("unload",(function r(){null!==e&&void 0!==e&&e.closed&&(null===e||void 0===e||e.removeEventListener("unload",r))}))},label:"Continue with Google",backgroundColor:"#e86f5e",dark:"#e65b43",children:(0,l.jsx)(n.DL1,{})}),(0,l.jsx)(b,{newUser:"SIGNUP"===r})]})]})})}},7467:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});t(7294);var a=t(2962),n=t(9787),o=t(5893);function s(){return(0,o.jsxs)("div",{children:[(0,o.jsx)(a.PB,{title:"Login"}),(0,o.jsx)(n.Z,{tab:"LOGIN"})]})}},7106:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(7467)}])}},function(e){e.O(0,[774,888,179],(function(){return r=7106,e(e.s=r);var r}));var r=e.O();_N_E=r}]);