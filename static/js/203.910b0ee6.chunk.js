"use strict";(self.webpackChunktake_your_notes_v1=self.webpackChunktake_your_notes_v1||[]).push([[203],{1475:(e,s,t)=>{t.d(s,{tb:()=>a.Z});t(542),t(6003);var a=t(6051)},6843:(e,s,t)=>{t.d(s,{Z:()=>n});var a=t(2791),r=t(184);const n=e=>{let{items:s=[]}=e;const t=s.length-1;return(0,r.jsx)("div",{className:"flex rounded-lg px-2 my-2 text-xs bg-default text-secondary",children:s.map(((e,s)=>{const n=s===t;return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)("span",{className:"".concat(n?"text-default":""),children:e}),!n&&(0,r.jsx)("span",{className:"flex items-center text-default mx-1",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-chevron-right",children:(0,r.jsx)("path",{d:"m9 18 6-6-6-6"})})})]})}))})}},3203:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var a=t(2791),r=t(1937),n=t(6843),l=(t(8189),t(6987)),c=t(6114),o=t(4613),d=t(4855),i=t(1172),x=t(475),h=t(1475),m=(t(1686),t(184));const u=()=>{const{navigateToList:e}=(0,d.Z)(),{postFormState:s,postFormDispatcher:t,savePost:u,fetchStatus:p}=(0,i.Z)(),{postTags:j,currentVisibilityMode:v,postCategory:g,postTitle:f,markdownContent:y}=s,{categoryName:N}=g||{};return"loading"===p?(0,m.jsxs)("div",{className:"m-5",children:[(0,m.jsx)(h.tb,{}),(0,m.jsx)(h.tb,{}),(0,m.jsx)(h.tb,{}),(0,m.jsx)(h.tb,{}),(0,m.jsx)(h.tb,{})]}):"failure"===p?(0,m.jsx)("div",{children:"Failed"}):(0,m.jsx)(a.Fragment,{children:(0,m.jsxs)("div",{className:"text-default m-5",children:[(0,m.jsxs)("div",{className:"flex my-2",children:[(0,m.jsxs)("span",{onClick:()=>{e()},className:"flex text-sm p-2 bg-default hover-accent hover-text-custom rounded-md cursor-pointer mx-1",children:[(0,m.jsx)("span",{className:"flex items-center pr-2",children:(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-left",children:[(0,m.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,m.jsx)("path",{d:"m14 16-4-4 4-4"})]})}),"Go Back"]}),(0,m.jsx)("div",{className:"flex text-sm p-2 bg-highlight rounded-md cursor-pointer mx-1",children:(0,m.jsx)(o.Z,{category:g,onChange:(e,s)=>{t({type:x.a.SET_CATEGORY,payload:s})}})})]}),(0,m.jsxs)("div",{className:"flex justify-between w-full ",children:[(0,m.jsx)("div",{className:"flex flex-col w-3/4",children:(0,m.jsx)("div",{children:(0,m.jsx)(n.Z,{items:[N||"Select a category",f]})})}),(0,m.jsxs)("div",{className:"flex flex-col",children:[(0,m.jsx)("div",{className:"",children:(0,m.jsx)(c.Z,{onChange:e=>{t({type:x.a.SET_VISIBILITY,payload:e})},currentMode:v})}),(0,m.jsx)("div",{onClick:async()=>{await u()&&setTimeout((()=>{e()}),1300)},className:"bg-accent border border-accent hover-text-default hover-border-accent hover-transparent text-custom text-sm my-2 p-1 px-2 cursor-pointer rounded-md",children:(0,m.jsxs)("span",{className:"flex",children:["Save",(0,m.jsx)("span",{className:"text-xs bg-secondary text-secondary border border-secondary px-1 mx-1 rounded-md",children:"\u2318 + Enter"})]})})]})]}),(0,m.jsxs)("div",{className:"editing-note py-2 bg-default shadow-xl rounded-lg",children:[(0,m.jsx)(l.Z,{className:"text-default text-lg mx-2",text:f,onSave:e=>{t({type:x.a.SET_TITLE,payload:e})}}),(0,m.jsx)("div",{className:"h-screen-1/2s overflow-scrolls",children:(0,m.jsx)(r.Z,{content:y,onChange:e=>{t({type:x.a.SET_CONTENT,payload:e})},isPreviewEnabled:!0})})]})]})})}}}]);
//# sourceMappingURL=203.910b0ee6.chunk.js.map