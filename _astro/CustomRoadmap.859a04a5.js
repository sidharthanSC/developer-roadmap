import{j as e}from"./jsx-runtime.6940b965.js";import{r as l}from"./index.070054a4.js";import{g as F}from"./browser.6245b9a5.js";import{c as P,b as U,a as B,h as A}from"./http.2919396c.js";import{c as w}from"./classname.0c0e8aac.js";import{u as N}from"./index.2d760e66.js";import{c as $,a as b,t as O}from"./roadmap.2126cc25.js";import{S as E,M as _,L as S,a as z}from"./ShareOptionsModal.e2223e9b.js";import{c as R}from"./createLucideIcon.3c9fdece.js";import{p as C}from"./page.2efb91d4.js";import{i as W}from"./jwt.5556697d.js";/* empty css                       */import{u as D}from"./use-toast.dbd347db.js";import{M as H}from"./Modal.6399ddbd.js";import{u as q}from"./use-outside-click.5adb83b9.js";import{S as T}from"./shapes.18fdadc5.js";import{T as G}from"./trash-2.c5096478.js";import{TopicDetail as V}from"./TopicDetail.6affe641.js";import{R as J}from"./readonly-editor.135cd3c5.js";import{r as K,u as Q,a as X,b as Y}from"./resource-progress.d271626c.js";import"./bundle-mjs.58d1fad7.js";import"./index.1c368e68.js";import"./index.4b590221.js";import"./use-copy-text.77785bb1.js";import"./linkedin.3fa0858c.js";import"./copy.2caf0f52.js";import"./users-2.dc7091e7.js";import"./users.9673a18c.js";import"./check-circle.2db17dbd.js";import"./loader-2.7ee93c0d.js";import"./toast.5b8c89b6.js";import"./use-keydown.bb1f91bb.js";import"./popup.a359f713.js";import"./Spinner.799b0955.js";import"./chevron-down.cc515fa2.js";import"./markdown.9aebbb7a.js";import"./x.c33f2cf5.js";import"./index.5f60dc5b.js";const Z=R("CircleSlash",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),ee=R("HelpCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),M=R("ShieldBan",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"m4 5 14 12",key:"1ta6nf"}]]);function se(n){const{isSecondaryBanner:t=!1}=n,[s,r]=l.useState(!1),c=N($),a=N(b);return e.jsxs(e.Fragment,{children:[s&&c&&a&&e.jsx(E,{isDiscoverable:a.isDiscoverable,description:a?.description,visibility:a?.visibility,teamId:a?.teamId,roadmapId:a?._id,sharedFriendIds:a?.sharedFriendIds||[],sharedTeamMemberIds:a?.sharedTeamMemberIds||[],onClose:()=>r(!1),onShareSettingsUpdate:i=>{b.set({...a,...i})}}),e.jsxs("div",{"data-progress-nums-container":"",className:w("striped-loader relative z-50 hidden items-center justify-between bg-white px-2 py-1.5 sm:flex",{"rounded-bl-md rounded-br-md":t,"rounded-md":!t}),children:[e.jsxs("p",{className:"flex text-sm opacity-0 transition-opacity duration-300","data-progress-nums":"",children:[e.jsxs("span",{className:"mr-2.5 rounded-sm bg-yellow-200 px-1 py-0.5 text-xs font-medium uppercase text-yellow-900",children:[e.jsx("span",{"data-progress-percentage":"",children:"0"}),"% Done"]}),e.jsxs("span",{className:"itesm-center hidden md:flex",children:[e.jsxs("span",{children:[e.jsx("span",{"data-progress-done":"",children:"0"})," completed"]}),e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-learning":"",children:"0"})," in progress"]}),e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-skipped":"",children:"0"})," skipped"]}),e.jsx("span",{className:"mx-1.5 text-gray-400",children:"·"}),e.jsxs("span",{children:[e.jsx("span",{"data-progress-total":"",children:"0"})," Total"]})]}),e.jsxs("span",{className:"md:hidden",children:[e.jsx("span",{"data-progress-done":"",children:"0"})," of"," ",e.jsx("span",{"data-progress-total":"",children:"0"})," Done"]})]}),e.jsx("div",{className:"flex items-center gap-3 opacity-0 transition-opacity duration-300","data-progress-nums":"",children:e.jsxs("button",{"data-popup":"progress-help",className:"flex items-center gap-1 text-sm font-medium text-gray-500 opacity-0 transition-opacity hover:text-black","data-progress-nums":"",children:[e.jsx(ee,{className:"h-3.5 w-3.5 stroke-[2.5px]"}),"Track Progress"]})})]}),e.jsx("div",{"data-progress-nums-container":"",className:"striped-loader relative -mb-2 flex items-center justify-between rounded-md border bg-white px-2 py-1.5 text-sm text-gray-700 sm:hidden",children:e.jsxs("span",{"data-progress-nums":"",className:"text-gray-500 opacity-0 transition-opacity duration-300",children:[e.jsx("span",{"data-progress-done":"",children:"0"})," of"," ",e.jsx("span",{"data-progress-total":"",children:"0"})," Done"]})})]})}function te(n){const{roadmapTitle:t,roadmapId:s,hasTNSBanner:r=!1,tnsBannerLink:c=""}=n;return e.jsxs("div",{className:w("mb-0 mt-4 rounded-md border-0 sm:mt-7 sm:border",{"sm:-mb-[82px]":r,"sm:-mb-[65px]":!r}),children:[r&&e.jsx("div",{className:"hidden border-b bg-gray-100 px-2 py-1.5 sm:block",children:e.jsxs("p",{className:"text-sm",children:["Get the latest ",t," news from our sister site"," ",e.jsx("a",{href:c,target:"_blank",className:"font-semibold underline",children:"TheNewStack.io"})]})}),e.jsx(se,{isSecondaryBanner:r,resourceId:s,resourceType:"roadmap"})]})}function re(n){const{onDelete:t,onUpdateSharing:s,onCustomize:r}=n,c=l.useRef(null),[a,i]=l.useState(!1);return q(c,()=>{i(!1)}),e.jsxs("div",{className:"relative",children:[e.jsxs("button",{disabled:!1,onClick:()=>i(!a),className:"inline-flex items-center justify-center rounded-md border border-gray-300 bg-white py-1.5 pl-2 pr-2 text-xs font-medium text-black hover:border-gray-300 hover:bg-gray-300 sm:pl-1.5 sm:pr-3 sm:text-sm",children:[e.jsx(_,{className:"mr-0 h-4 w-4 stroke-[2.5] sm:mr-1.5"}),e.jsx("span",{className:"hidden sm:inline",children:"Actions"})]}),a&&e.jsx("div",{ref:c,className:"align-right absolute right-0 top-full mt-1 w-[140px] rounded-md bg-slate-800 px-2 py-2 text-white shadow-md z-[9999]",children:e.jsxs("ul",{children:[s&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{i(!1),s()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(S,{size:14,className:"mr-2"}),"Sharing"]})}),r&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{i(!1),r()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(T,{size:14,className:"mr-2"}),"Customize"]})}),t&&e.jsx("li",{children:e.jsxs("button",{onClick:()=>{i(!1),t()},className:"flex w-full cursor-pointer items-center rounded p-2 text-sm font-medium text-slate-100 hover:bg-slate-700",children:[e.jsx(G,{size:14,className:"mr-2"}),"Delete"]})})]})})]})}function ae(n){const t=N($),s=N(b),{title:r,description:c,_id:a,creator:i,team:h,visibility:j}=N(b)||{},[y,x]=l.useState(!1),[u,p]=l.useState(!1),d=D();async function o(){C.set("Deleting roadmap");const g=s?.teamId,I="https://api.roadmap.sh";let k,v;if(g?{error:k,response:v}=await P(`${I}/v1-delete-team-resource-config/${g}`,{resourceId:a,resourceType:"roadmap"}):{error:k,response:v}=await U(`${I}/v1-delete-roadmap/${a}`),k||!v){d.error(k?.message||"Something went wrong");return}d.success("Roadmap removed"),g?window.location.href=`/team/roadmaps?t=${g}`:window.location.href="/account/roadmaps"}const m=i?.avatar?`https://dodrc8eu8m09s.cloudfront.net/avatars/${i?.avatar}`:"/images/default-avatar.png",f=u&&e.jsx(H,{onClose:()=>p(!1),wrapperClassName:"max-w-lg",bodyClassName:"p-4 flex flex-col",children:e.jsx(z,{visibility:"public",roadmapId:a,description:c,onClose:()=>p(!1),isSharingWithOthers:!0})});return e.jsx("div",{className:"border-b",children:e.jsxs("div",{className:"container relative py-5 sm:py-12",children:[i?.name&&e.jsxs("div",{className:"-mb-1 flex items-center gap-1.5 text-sm text-gray-500",children:[e.jsx("img",{alt:i.name,src:m,className:"h-5 w-5 rounded-full"}),e.jsxs("span",{children:["Created by ",e.jsx("span",{className:"font-semibold text-gray-900",children:i?.name}),h&&e.jsxs(e.Fragment,{children:[" from ",e.jsx("span",{className:"font-semibold text-gray-900",children:h?.name})]})]})]}),e.jsxs("div",{className:"mb-3 mt-4 sm:mb-4",children:[e.jsx("h1",{className:"text-2xl font-bold sm:mb-2 sm:text-4xl",children:r}),e.jsx("p",{className:"mt-0.5 text-sm text-gray-500 sm:text-lg",children:c})]}),e.jsxs("div",{className:"flex justify-between gap-2 sm:gap-0",children:[e.jsxs("div",{className:"flex gap-1 sm:gap-2",children:[e.jsxs("a",{href:"/roadmaps",className:"rounded-md bg-gray-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-600 sm:text-sm","aria-label":"Back to All Roadmaps",children:["←",e.jsx("span",{className:"hidden sm:inline",children:" All Roadmaps"})]}),e.jsx("button",{"data-guest-required":!0,"data-popup":"login-popup",className:"inline-flex hidden items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm","aria-label":"Subscribe for Updates",children:e.jsx("span",{className:"ml-2",children:"Subscribe"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[t&&e.jsxs(e.Fragment,{children:[y&&s&&e.jsx(E,{isDiscoverable:s.isDiscoverable,description:s?.description,visibility:s?.visibility,teamId:s?.teamId,roadmapId:s?._id,sharedFriendIds:s?.sharedFriendIds||[],sharedTeamMemberIds:s?.sharedTeamMemberIds||[],onClose:()=>x(!1),onShareSettingsUpdate:g=>{b.set({...s,...g})}}),e.jsxs("a",{href:`https://draw.roadmap.sh/${s?._id}`,target:"_blank",className:"inline-flex items-center justify-center rounded-md border border-gray-300 bg-white py-1.5 pl-2 pr-2 text-xs font-medium  text-black hover:border-gray-300 hover:bg-gray-300 sm:px-3 sm:text-sm",children:[e.jsx(T,{className:"mr-1.5 h-4 w-4 stroke-[2.5]"}),e.jsx("span",{className:"hidden sm:inline-block",children:"Edit Roadmap"}),e.jsx("span",{className:"sm:hidden",children:"Edit"})]}),e.jsxs("button",{onClick:()=>x(!0),className:"inline-flex items-center justify-center rounded-md border border-gray-300 bg-white py-1.5 pl-2 pr-2 text-xs font-medium text-black hover:border-gray-300 hover:bg-gray-300 sm:px-3 sm:text-sm",children:[e.jsx(S,{className:"mr-1.5 h-4 w-4 stroke-[2.5]"}),"Sharing"]}),e.jsx(re,{onDelete:()=>{window.confirm("Are you sure you want to delete this roadmap?")&&o().finally(()=>null)}})]}),!t&&j==="public"&&e.jsxs(e.Fragment,{children:[f,e.jsxs("button",{onClick:()=>p(!0),className:"inline-flex items-center justify-center rounded-md border border-gray-300 bg-white py-1.5 pl-2 pr-2 text-xs font-medium  text-black hover:border-gray-300 hover:bg-gray-300 sm:px-3 sm:text-sm",children:[e.jsx(S,{className:"mr-1.5 h-4 w-4 stroke-[2.5]"}),"Share with Others"]})]})]})]}),e.jsx(te,{roadmapTitle:r,hasTNSBanner:!1,roadmapId:a})]})})}function ne(n){const{error:t}=n;return t.status===404?e.jsx(L,{icon:e.jsx(M,{className:"h-16 w-16"}),title:"Roadmap not found",message:"The roadmap you are looking for does not exist or has been deleted."}):e.jsx(L,{icon:e.jsx(M,{className:"h-16 w-16"}),title:"Restricted Access",message:t?.message})}function L(n){const{title:t,message:s,icon:r}=n;return e.jsxs("div",{className:"flex grow flex-col items-center justify-center",children:[r,e.jsx("h2",{className:"mt-4 text-2xl font-semibold",children:t}),e.jsx("p",{children:s||"This roadmap is not available for public access."}),e.jsx("a",{href:"/",className:"mt-4 font-medium underline underline-offset-2 hover:no-underline",children:"← Go back to home"})]})}function ie(n){const{roadmapId:t,canManage:s,className:r}=n,c=`https://draw.roadmap.sh/${t}`;return e.jsx("div",{className:w("flex h-full items-center justify-center",r),children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(Z,{className:"mx-auto h-20 w-20 text-gray-400"}),e.jsx("h3",{className:"mt-2",children:"This roadmap is currently empty."}),s&&e.jsxs("a",{href:c,className:"mt-4 flex items-center rounded-md bg-gray-500 px-4 py-2 font-medium text-white hover:bg-gray-600",children:[e.jsx(T,{className:"mr-2 inline-block h-4 w-4"}),"Edit Roadmap"]})]})})}function oe(n){const{roadmap:t}=n,s=String(t._id),[r,c]=l.useState(!1),a=l.useRef(null),i=D();async function h(d,o){C.set("Updating progress"),Q({resourceId:s,resourceType:"roadmap",topicId:d},o).then(()=>{X(d,o)}).catch(m=>{i.error("Something went wrong, please try again."),console.error(m)}).finally(()=>{C.set(""),Y()})}const j=l.useCallback((d,o)=>{const m=d?.currentTarget;if(!m)return;const f=m?.classList.contains("done");h(o.id,f?"pending":"done")},[]),y=l.useCallback((d,o)=>{const m=d?.currentTarget;if(!m)return;const f=m?.classList.contains("learning");h(o.id,f?"pending":"learning")},[]),x=l.useCallback((d,o)=>{const m=d?.currentTarget;if(!m)return;const f=m?.classList.contains("skipped");h(o.id,f?"pending":"skipped")},[]),u=l.useCallback((d,o)=>{d?.currentTarget&&window.dispatchEvent(new CustomEvent("roadmap.node.click",{detail:{topicId:o.id,resourceId:s,resourceType:"roadmap",isCustomResource:!0}}))},[]),p=l.useCallback((d,o)=>{if(!o)return;o.startsWith("http")?window.open(o,"_blank"):window.location.href=o},[]);return e.jsxs(e.Fragment,{children:[r&&e.jsx(ie,{roadmapId:s,canManage:t.canManage,className:"grow"}),e.jsx(J,{ref:a,roadmap:t,className:w(t?.nodes?.length===0?"grow":"min-h-0 max-md:min-h-[1000px]"),onRendered:()=>{K("roadmap",s).then(()=>{O.set(t?.nodes?.filter(d=>["topic","subtopic"].includes(d.type)).length||0),t?.nodes?.length===0&&(c(!0),a?.current?.classList.add("hidden"))})},onTopicClick:u,onTopicRightClick:j,onTopicShiftClick:y,onTopicAltClick:x,onButtonNodeClick:p,onLinkClick:p,fontFamily:"Balsamiq Sans",fontURL:"/fonts/balsamiq.woff2"})]})}function de(){const n=document.querySelector("[data-roadmap-loader]");n&&n.remove()}function Ve(){const{id:n,secret:t}=F(),[s,r]=l.useState(!0),[c,a]=l.useState(null),[i,h]=l.useState();async function j(){r(!0);const x=new URL(`https://api.roadmap.sh/v1-get-roadmap/${n}`);t&&x.searchParams.set("secret",t);const{response:u,error:p}=await B(x.toString());if(p||!u){h(p),r(!1);return}document.title=`${u.title} - roadmap.sh`,a(u),b.set(u),r(!1)}async function y(){W()&&await A("https://api.roadmap.sh/v1-visit",{resourceId:n,resourceType:"roadmap"})}return l.useEffect(()=>{j().finally(()=>{de()}),y().then()},[]),s?null:i?e.jsx(ne,{error:i}):e.jsxs(e.Fragment,{children:[e.jsx(ae,{}),e.jsx(oe,{roadmap:c}),e.jsx(V,{canSubmitContribution:!1})]})}export{Ve as CustomRoadmap};
