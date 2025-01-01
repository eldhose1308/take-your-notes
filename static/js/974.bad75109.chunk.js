"use strict";(self.webpackChunktake_your_notes_v1=self.webpackChunktake_your_notes_v1||[]).push([[974],{9974:(e,s,t)=>{t.r(s),t.d(s,{default:()=>S});var a=t(2791),c=t(9722),r=t(6926),n=t(3381),i=t(9102),l=t(7779),o=t(1821),d=t(3067),x=t(3934),h=t(8788),m=t(4921),u=t(184);const j=()=>{const{cachePostsList:e,getCachedPostsList:s,getCachedFilters:t,setCachedFilters:c,getPreviousPage:r,setPreviousPage:n}=(0,m.H_)(),{currentPage:j,isAllDataFetched:g,incrementPagination:y,checkIfAllDataFetched:p,resetPagination:v}=(0,x.Z)({pageSize:5,previousPageFromCache:r()}),{fetchStatus:N,fetchPostsData:Z}=(0,d.Z)(),[f,b]=(0,a.useState)(t()),[w,P]=(0,a.useState)([]),k=s=>{p(s),P(s),e(s)},S=async()=>{const e={page:j+1,limit:5,...f};try{const s=await Z(e);return k([...w,...s]),y(),n(j+1),s}catch(s){console.log(s)}};return(0,a.useEffect)((()=>{(()=>{const e=s();e.length>0?(e=>{k(e)})(e):S()})()}),[]),(0,u.jsxs)(a.Fragment,{children:[(0,u.jsx)(o.Z,{filters:f,onChange:async e=>{const s={...f,...e};b(s),c(s),P([]),v();const t={page:1,limit:5,...s};try{const e=await Z(t);k(e)}catch(a){console.log(a)}}}),(0,u.jsx)(l.Z,{initialFetchStatus:N,currentPage:j,isAllDataFetched:g,fetchDataMethod:S,children:(0,u.jsx)(a.Fragment,{children:(0,u.jsx)(i.Z,{usersPostList:w})})},"posts_".concat((0,h.B)(f)))]})};var g=t(4129),y=t(1381),p=t(913),v=t(6033),N=t(1087),Z=t(3719),f=t(7155);const b=()=>{const{isAuthenticated:e,user:s}=(0,f.Z)(),{fullName:t="Unknown"}=s||{};return(0,u.jsx)(y.Zb,{size:"sm",rounded:"lg",className:"border hover-border-highlight mx-4 my-2 min-w-sm",children:e?(0,u.jsxs)(y.aY,{children:[(0,u.jsxs)("div",{className:"p-2",children:[(0,u.jsx)(p.Z,{type:"h3",size:"lg",className:"my-2",children:"Welcome to MakeMyBlogs"}),(0,u.jsxs)(p.Z,{type:"h5",textVariant:"normal",size:"sm",className:"my-2",children:["Hi ",t,", ready to blog today?"]}),(0,u.jsx)(p.Z,{textVariant:"light",size:"xs",className:"my-2",children:"Your blog is waiting, and so is your audience. Ready to share your next big idea?"})]}),(0,u.jsx)(v.Z,{className:"my-2"}),(0,u.jsxs)("div",{className:"p-2",children:[(0,u.jsx)(N.rU,{to:Z.Z.MY_POST,children:(0,u.jsx)("div",{className:"text-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md",children:(0,u.jsx)("span",{className:"",children:"See What I've Shared"})})}),(0,u.jsx)(N.rU,{to:Z.Z.POST_CREATE,children:(0,u.jsx)("div",{className:"bg-custom text-accent hover-text-custom hover-accent text-center text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md",children:(0,u.jsx)("span",{className:"",children:"Write Your Next Story"})})})]})]}):(0,u.jsxs)(y.aY,{children:[(0,u.jsxs)("div",{className:"p-2",children:[(0,u.jsx)(p.Z,{type:"h3",size:"lg",className:"my-2",children:"Welcome to MakeMyBlogs"}),(0,u.jsx)(p.Z,{type:"h5",textVariant:"normal",size:"sm",className:"my-2",children:"Your thoughts called \u2014 they want an audience!"}),(0,u.jsx)(p.Z,{textVariant:"light",size:"xs",className:"my-2",children:"You've got ideas, stories, and opinions. We've got the platform. Together, we'll make blogging easier than deciding what to eat for dinner."})]}),(0,u.jsx)(v.Z,{className:"my-2"}),(0,u.jsxs)("div",{className:"p-2",children:[(0,u.jsx)(N.rU,{to:Z.Z.SIGNUP,children:(0,u.jsx)("div",{className:"text-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md",children:(0,u.jsx)("span",{className:"",children:"Join the Party"})})}),(0,u.jsx)(N.rU,{to:Z.Z.SIGNIN,children:(0,u.jsx)("div",{className:"bg-custom text-accent hover-text-custom hover-accent text-center text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md",children:(0,u.jsx)("span",{className:"",children:"Welcome Back"})})})]})]})})};var w=t(5414);const P=e=>(0,u.jsx)(a.Fragment,{children:(0,u.jsx)("div",{className:"opacity-50 cursor-not-allowed",children:(0,u.jsx)(r.Z,{heading:"Series You Might Like",children:(0,u.jsx)(w.Z,{size:"sm"})})})}),k=e=>(0,u.jsx)(a.Fragment,{children:(0,u.jsx)("div",{className:"opacity-50 cursor-not-allowed",children:(0,u.jsx)(r.Z,{heading:"Recently searched by others",children:(0,u.jsx)(w.Z,{size:"sm"})})})}),S=()=>(0,u.jsx)("div",{className:"text-default m-5",children:(0,u.jsxs)("div",{className:"flex w-full px-2 my-4 rounded-md",children:[(0,u.jsx)("div",{className:"flex flex-col grow-1 basis-0",children:(0,u.jsx)(b,{})}),(0,u.jsx)("div",{className:"flex flex-col mx-2 grow-2 basis-0",children:(0,u.jsx)(j,{})}),(0,u.jsx)(c.Z,{direction:"right",children:(0,u.jsxs)("div",{className:"flex flex-col grow-1 basis-0",children:[(0,u.jsx)(g.Z,{type:"following"}),(0,u.jsx)(n.Z,{}),(0,u.jsx)(P,{}),(0,u.jsx)(g.Z,{type:"latest"}),(0,u.jsx)(k,{})]})})]})})}}]);
//# sourceMappingURL=974.bad75109.chunk.js.map