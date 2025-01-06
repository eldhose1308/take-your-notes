"use strict";(self.webpackChunktake_your_notes_v1=self.webpackChunktake_your_notes_v1||[]).push([[105],{4212:(e,s,t)=>{t.d(s,{Z:()=>c});t(2791);var a=t(913),r=t(184);const c=()=>(0,r.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-folder-open",children:(0,r.jsx)("path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"})}),(0,r.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,r.jsx)(a.Z,{size:"lg",type:"h2",children:"Hmm..."}),(0,r.jsx)(a.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"Nothing Here... Yet."}),(0,r.jsx)(a.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"Everyone starts somewhere. This user might post something soon!!"})]})]})},6447:(e,s,t)=>{t.d(s,{Z:()=>r});t(2791);var a=t(184);const r=e=>{const{count:s=1}=e;return(0,a.jsx)("div",{className:"w-full",children:Array.from({length:s}).map((e=>(0,a.jsxs)("div",{className:"w-full animate-pulse my-10",children:[(0,a.jsx)("div",{className:"h-12 bg-custom rounded-md mb-3"}),(0,a.jsx)("div",{className:"h-3 bg-custom rounded-md mb-3 w-1/2"}),(0,a.jsx)("div",{className:"h-3 bg-custom rounded-md mb-3 w-3/4"}),(0,a.jsx)("div",{className:"h-3 bg-custom rounded-md mb-3 w-full"})]},"cardStencil_".concat(e))))})}},2870:(e,s,t)=>{t.d(s,{Z:()=>m});var a=t(2791),r=t(1087),c=t(1475),l=t(1160),n=t(2309),o=t(6926),i=t(9272),d=t(3719),x=t(5553),h=t(184);const m=e=>{const{userName:s,fullName:t}=e,{usersPostList:m,fetchUsersPost:u,fetchStatus:g}=(0,l.Z)({userName:s}),j=d.Z.USER_DETAIL(s),f=(0,n.Z)({fetchStatus:g,loading:(0,h.jsx)(c.tb,{}),success:(0,h.jsx)(i.Z,{usersPostList:m})});return(0,a.useEffect)((()=>{s&&u({page:1,limit:6})}),[s]),(0,h.jsx)(a.Fragment,{children:(0,h.jsx)(o.Z,{renderHeader:()=>(0,h.jsxs)("span",{className:"flex",children:["More from ",(0,h.jsx)(r.rU,{to:j,className:"text-bold mx-2",children:t})]}),renderFooter:()=>(0,h.jsx)(x.Z,{linkUrl:j}),children:f})})}},9272:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(913),r=t(6732),c=t(775),l=t(2791),n=t(1087),o=t(184);const i=e=>{const{usersPostList:s=[]}=e;return(0,o.jsx)(l.Fragment,{children:s.map((e=>{const{postTitle:s,postSlug:t,user:l,category:i}=e,{userName:d}=l,{categoryName:x,categorySlug:h}=i,m=(0,c.OG)(d,t);return(0,o.jsx)(n.rU,{to:m,children:(0,o.jsxs)("div",{className:"flex flex-col my-3 p-2 border-b border-custom hover-custom rounded-md",children:[(0,o.jsx)(a.Z,{type:"span",children:s}),(0,o.jsx)("div",{className:"flex",children:(0,o.jsx)(r.Z,{categoryName:x,categorySlug:h})})]})})}))})}},3216:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(2791),r=t(1087),c=t(2014),l=t(3719),n=t(8777),o=(t(4405),t(184));const i=e=>{const{categoryData:s,hasFollowers:t=!1,hasPosts:i=!1,hasFollowButton:d=!0}=e,{categoryName:x,categorySlug:h,categoryIcon:m,followers:u,posts:g}=s||{},j=l.Z.CATEGORY_DETAIL(h);return(0,o.jsx)(a.Fragment,{children:(0,o.jsx)(r.rU,{to:j,className:"cursor-pointer group-hover",children:(0,o.jsxs)("div",{className:"flex items-center mb-2",children:[(0,o.jsx)("div",{className:"flex",children:(0,o.jsx)(c.Z,{name:x,src:"".concat(n.c6).concat(m)},m)}),(0,o.jsx)("div",{className:"flex flex-col",children:(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("h3",{className:"text-sm text-default px-3",children:x}),(0,o.jsx)("span",{className:"text-center ml-1 mr-4 invisible group-hover-item",children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,o.jsx)("path",{d:"m10 8 4 4-4 4"})]})})]}),t&&(0,o.jsxs)("p",{className:"text-secondary px-3 space-y-1 text-xs",children:[u," followers"]}),i&&(0,o.jsxs)("p",{className:"text-secondary px-3 space-y-1 text-xs",children:[g," posts"]})]})})})]})})})}},1160:(e,s,t)=>{t.d(s,{Z:()=>c});var a=t(2791),r=t(9732);const c=e=>{let{userName:s}=e;const[t,c]=(0,a.useState)([]),[l,n]=(0,a.useState)("none");return(0,a.useEffect)((()=>{}),[s]),{fetchStatus:l,usersPostList:t,fetchUsersPost:async e=>{try{n("loading");const t=await r.NL(s,e);return c(t),0===t.length?n("empty"):n("success"),t}catch(t){n("failure")}}}}},5105:(e,s,t)=>{t.r(s),t.d(s,{default:()=>A});var a=t(2791),r=t(7689),c=t(9722),l=t(6926),n=(t(2870),t(3381)),o=t(2309),i=t(6447),d=t(1686),x=(t(1614),t(6033)),h=t(913),m=t(2825),u=t(7323),g=t(184);const j={true:{icon:(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-user-round-check",children:[(0,g.jsx)("path",{d:"M2 21a8 8 0 0 1 13.292-6"}),(0,g.jsx)("circle",{cx:"10",cy:"8",r:"5"}),(0,g.jsx)("path",{d:"m16 19 2 2 4-4"})]}),text:"Unfollow"},false:{icon:(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-user-round-plus",children:[(0,g.jsx)("path",{d:"M2 21a8 8 0 0 1 13.292-6"}),(0,g.jsx)("circle",{cx:"10",cy:"8",r:"5"}),(0,g.jsx)("path",{d:"M19 16v6"}),(0,g.jsx)("path",{d:"M22 19h-6"})]}),text:"Follow"}},f=e=>{const{categorySlug:s,categoryId:t,isFollowing:a=!1,updateCategory:r=(()=>{}),onFollow:c=(()=>{}),onUnFollow:l=(()=>{})}=e;return(0,g.jsx)("div",{onClick:async()=>{t?a?(async()=>{try{await u.ZV(t),r((e=>({...e,followers:Number(e.followers)-1,isFollowing:!e.isFollowing})))}catch(e){alert(e.message)}})():(async()=>{try{await u.Yl(t),r((e=>({...e,followers:Number(e.followers)+1,isFollowing:!e.isFollowing})))}catch(e){alert(e.message)}})():alert("Nopeee")},className:"flex bg-custom text-accent hover-text-custom hover-accent text-xs my-2 mr-2 ml-4 p-2 px-2 cursor-pointer rounded-md",children:(0,g.jsxs)("span",{className:"flex items-center",children:[(0,g.jsx)("span",{className:"flex items-center mr-2",children:j[a].icon}),j[a].text]})})};var y=t(3216),p=t(3719),v=t(1087);const w=e=>{const{categoryData:s={}}=e,[t,r]=(0,a.useState)(s),{id:c,categorySlug:l,categoryName:n,bio:o,createdAt:i,createdUser:d,createdUserName:u,posts:j,followers:w,rank:N,isFollowing:Z}=t;return(0,g.jsxs)("div",{className:"border bg-default p-4 rounded-md",children:[(0,g.jsxs)("div",{className:"flex justify-between",children:[(0,g.jsx)(y.Z,{categoryData:t}),(0,g.jsxs)("div",{className:"flex",children:[(0,g.jsx)(m.Z,{shareDetails:{title:l,text:n,urlRoute:p.Z.CATEGORY_DETAIL(l)},shareText:"Share Category"}),(0,g.jsx)(f,{categoryId:c,categorySlug:l,isFollowing:Z,updateCategory:r})]})]}),(0,g.jsx)(x.Z,{variant:"default"}),(0,g.jsxs)("div",{className:"flex my-2",children:[(0,g.jsxs)("div",{className:"flex flex-col text-center",children:[(0,g.jsx)(h.Z,{children:j}),(0,g.jsx)(h.Z,{size:"xs",textVariant:"none",children:"Posts"})]}),(0,g.jsx)("div",{className:"mx-4"}),(0,g.jsxs)("div",{className:"flex flex-col text-center",children:[(0,g.jsx)(h.Z,{children:w}),(0,g.jsx)(h.Z,{size:"xs",textVariant:"none",children:"Followers"})]})]}),(0,g.jsx)(x.Z,{variant:"default"}),(0,g.jsx)("div",{className:"flex my-2",children:(0,g.jsxs)("div",{children:[(0,g.jsxs)(h.Z,{textVariant:"none",children:["Created at ",(0,g.jsx)(h.Z,{type:"span",children:i})]}),(0,g.jsxs)(h.Z,{textVariant:"none",children:["Added by ",(0,g.jsx)(h.Z,{type:"span",children:(0,g.jsx)(v.rU,{to:p.Z.USER_DETAIL(u),children:d})})]})]})}),!!o&&(0,g.jsx)("div",{className:"flex my-4",children:(0,g.jsx)(h.Z,{textVariant:"none",children:o})})]})};var N=t(9102),Z=t(7779),S=t(1821),k=t(4212),F=t(3067),b=t(3934),P=t(8788);const D=e=>{const{categoryName:s}=e,{currentPage:t,isAllDataFetched:r,incrementPagination:c,checkIfAllDataFetched:l,resetPagination:n}=(0,b.Z)({pageSize:30}),{fetchPostsData:o,fetchStatus:i}=(0,F.Z)(),[d,x]=(0,a.useState)({category:s}),[h,m]=(0,a.useState)([]),u=async()=>{const e={page:t+1,limit:30,...d};try{const s=await o(e);return m((e=>[...e,...s])),c(),l(s),s}catch(s){throw console.log(s),s}};return(0,a.useEffect)((()=>{u()}),[]),(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)(S.Z,{onChange:async e=>{const s={...d,...e};x(s),m([]),n();const t={page:1,limit:30,...s};try{const e=await o(t);l(e),m(e)}catch(a){console.log(a)}}}),(0,g.jsx)(Z.Z,{EmptyState:k.Z,initialFetchStatus:i,currentPage:t,isAllDataFetched:r,fetchDataMethod:u,children:(0,g.jsx)(a.Fragment,{children:(0,g.jsx)(N.Z,{usersPostList:h})})},"posts_".concat((0,P.B)(d)))]})};var L=t(4129);const A=()=>{const{categoryName:e}=(0,r.UO)(),{categoryData:s,fetchStatus:t,fetchPostCategoryByName:x}=(0,d.Z)(),h=(0,o.Z)({fetchStatus:t,loading:(0,g.jsx)(i.Z,{}),messages:{failure:{heading:"Looks like this user is removed or no such user existed",description:"Please recheck the url"}},success:(0,g.jsx)(w,{categoryData:s}),failure:(0,g.jsx)(w,{categoryData:s})});return(0,a.useEffect)((()=>{x(e)}),[e]),(0,g.jsx)("div",{className:"text-default m-5",children:(0,g.jsxs)("div",{className:"flex",children:[(0,g.jsxs)("div",{className:"flex flex-col mx-2 grow-3 basis-0",children:[h,(0,g.jsx)(D,{categoryName:e},e)]}),(0,g.jsx)(c.Z,{direction:"right",children:(0,g.jsxs)("div",{className:"flex flex-col grow-1 basis-0",children:[(0,g.jsx)(L.Z,{type:"related",categorySlug:e}),(0,g.jsx)(n.Z,{}),(0,g.jsx)(l.Z,{heading:"Posts You Might Like",renderFooter:()=>(0,g.jsx)("span",{className:"flex w-full justify-center",children:"See more"})})]})})]})})}},1614:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var a=t(2791),r=t(9102),c=t(7779),l=t(1821),n=(t(3067),t(3934)),o=t(1160),i=t(8788),d=t(4212),x=t(184);const h=e=>{const{pageSize:s=30,initialPage:t=0,initialData:h=[],userName:m}=e,{currentPage:u,isAllDataFetched:g,incrementPagination:j,checkIfAllDataFetched:f,resetPagination:y}=(0,n.Z)({pageSize:s}),{fetchUsersPost:p,fetchStatus:v}=(0,o.Z)({userName:m}),[w,N]=(0,a.useState)(),[Z,S]=(0,a.useState)(h||[]),k=async()=>{const e={page:u+1,limit:s,...w},t=await p(e);return S((e=>[...e,...t])),j(),f(t),t};return(0,a.useEffect)((()=>{k()}),[]),(0,x.jsx)(a.Fragment,{children:"empty"!==v?(0,x.jsxs)(a.Fragment,{children:[(0,x.jsx)(l.Z,{onChange:async e=>{N(e),S([]),y();const t={page:1,limit:s,...e},a=await p(t);f(a),S(a)}}),(0,x.jsx)(c.Z,{isEmpty:"empty"===v,initialFetchStatus:v,currentPage:u,isAllDataFetched:g,fetchDataMethod:k,children:(0,x.jsx)(a.Fragment,{children:"empty"!==v?(0,x.jsx)(r.Z,{usersPostList:Z}):(0,x.jsx)(d.Z,{})})},"posts_".concat((0,i.B)(w)))]}):(0,x.jsx)(d.Z,{})})}}}]);
//# sourceMappingURL=105.0dcc08ba.chunk.js.map