"use strict";(self.webpackChunktake_your_notes_v1=self.webpackChunktake_your_notes_v1||[]).push([[907],{6449:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var a=s(2791),n=s(913),l=s(8534),c=s(6114),i=s(2144),r=s(184);const o=e=>{let{onCreate:t=(()=>{})}=e;return(0,r.jsx)("div",{onClick:t,className:"bg-accent border border-accent hover-text-default hover-border-accent hover-transparent text-custom text-sm p-1 px-2 cursor-pointer rounded-md",children:(0,r.jsxs)("span",{className:"flex",children:["Start Writing",(0,r.jsx)("span",{className:"flex items-center ml-2",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-plus",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,r.jsx)("path",{d:"M8 12h8"}),(0,r.jsx)("path",{d:"M12 8v8"})]})})]})})};var d=s(4232),h=s(4855),x=s(1172),m=s(3934),u=s(7779),j=s(8788),f=s(1821);const v=e=>{const{children:t}=e;return(0,r.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-folder-open",children:(0,r.jsx)("path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"})}),(0,r.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,r.jsx)(n.Z,{size:"lg",type:"h2",children:"Hmm..."}),(0,r.jsx)(n.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"Nothing Here... Yet."}),(0,r.jsx)(n.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"Everyone starts somewhere. You should post something !!"})]}),(0,r.jsx)("div",{className:"flex flex-col items-center my-4 text-center",children:t})]})};s(3719),s(7359);var p=s(3479);const g=e=>{const{navigateToCreate:t,navigateToEdit:s}=(0,h.Z)(),{currentPage:g,isAllDataFetched:y,incrementPagination:w,checkIfAllDataFetched:N,resetPagination:k}=(0,m.Z)({pageSize:30}),{fetchStatus:b,fetchMyPostsData:Z}=(0,x.Z)(),[C,F]=(0,a.useState)({visibility:"public"}),[S,_]=(0,a.useState)([]),{hasFollowButton:z=!0,onEdit:E}=e,[P,A]=(0,a.useState)(i.Qd.public),B=async e=>{const t={...C,...e};F(t),_([]),k();const s={page:1,limit:30,...t};try{const e=await Z(s);N(e),_(e)}catch(a){console.log(a)}},D=async()=>{const e={page:g+1,limit:30,...C};try{const t=await Z(e);return _((e=>[...e,...t])),w(),N(t),t}catch(t){console.log(t)}};(0,a.useEffect)((()=>{D()}),[]);const H=()=>{t()};return(0,r.jsx)(a.Fragment,{children:(0,r.jsxs)("div",{className:"text-default m-5",children:[(0,r.jsx)("div",{className:"flex",children:(0,r.jsxs)("div",{className:"flex justify-between w-full",children:[(0,r.jsxs)("div",{className:"flex flex-col mx-2 my-2",children:[(0,r.jsxs)(n.Z,{size:"lg",type:"h2",className:"flex",children:["Your Posts",(0,r.jsx)(p.Z,{})]}),(0,r.jsx)(n.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"List of all the posts published by you"})]}),(0,r.jsx)("div",{className:"flex flex-col my-2",children:(0,r.jsx)(o,{onCreate:H})})]})}),(0,r.jsx)("div",{className:"flex",children:(0,r.jsxs)("div",{className:"flex justify-between w-full",children:[(0,r.jsxs)("div",{className:"flex my-2",children:[(0,r.jsx)(f.Z,{onChange:B}),(0,r.jsx)("div",{className:"content-center",children:(0,r.jsx)(d.Z,{onChange:(e,t,s)=>{B({category:s})},hasAddOption:!1})})]}),(0,r.jsx)("div",{className:"m-2",children:(0,r.jsx)("div",{className:"content-center mx-2",children:(0,r.jsx)(c.Z,{onChange:e=>{A(e),B({visibility:e})},currentMode:P})})})]})}),(0,r.jsx)(u.Z,{initialFetchStatus:b,isEmpty:"empty"===b,currentPage:g,isAllDataFetched:y,fetchDataMethod:D,children:"empty"!==b?(0,r.jsx)("div",{className:"flex content-start w-full",children:(0,r.jsx)(a.Fragment,{children:S.map((e=>(0,r.jsx)(l.Z,{postItem:e,onEdit:s,hasFollowButton:z},e.id)))})}):(0,r.jsx)(v,{children:(0,r.jsx)(o,{onCreate:H})})},"posts_".concat((0,j.B)(C)))]})})}}}]);
//# sourceMappingURL=907.70e71644.chunk.js.map