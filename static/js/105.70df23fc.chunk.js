"use strict";(self.webpackChunktake_your_notes_v1=self.webpackChunktake_your_notes_v1||[]).push([[105],{4212:(e,s,t)=>{t.d(s,{Z:()=>c});t(2791);var a=t(913),r=t(184);const c=()=>(0,r.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-folder-open",children:(0,r.jsx)("path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"})}),(0,r.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,r.jsx)(a.Z,{size:"lg",type:"h2",children:"Hmm..."}),(0,r.jsx)(a.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"Nothing Here... Yet."}),(0,r.jsx)(a.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"Everyone starts somewhere. This user might post something soon!!"})]})]})},6447:(e,s,t)=>{t.d(s,{Z:()=>r});t(2791);var a=t(184);const r=e=>{const{count:s=1}=e;return(0,a.jsx)("div",{className:"w-full",children:Array.from({length:s}).map((e=>(0,a.jsxs)("div",{className:"w-full animate-pulse my-10",children:[(0,a.jsx)("div",{className:"h-12 bg-custom rounded-md mb-3"}),(0,a.jsx)("div",{className:"h-3 bg-custom rounded-md mb-3 w-1/2"}),(0,a.jsx)("div",{className:"h-3 bg-custom rounded-md mb-3 w-3/4"}),(0,a.jsx)("div",{className:"h-3 bg-custom rounded-md mb-3 w-full"})]},"cardStencil_".concat(e))))})}},330:(e,s,t)=>{t.d(s,{Z:()=>j});var a=t(2791),r=t(1087),c=t(1475),n=t(1160),l=t(1372),o=t(6926),i=t(913),d=t(6732),x=t(775),h=t(184);const u=e=>{const{usersPostList:s=[]}=e;return(0,h.jsx)(a.Fragment,{children:s.map((e=>{const{postTitle:s,postSlug:t,user:a,category:c}=e,{userName:n}=a,{categoryName:l,categorySlug:o}=c,u=(0,x.OG)(n,t);return(0,h.jsx)(r.rU,{to:u,children:(0,h.jsxs)("div",{className:"flex flex-col my-3 p-2 border-b border-custom hover-custom rounded-md",children:[(0,h.jsx)(i.Z,{type:"span",children:s}),(0,h.jsx)("div",{className:"flex",children:(0,h.jsx)(d.Z,{categoryName:l,categorySlug:o})})]})})}))})};var m=t(3719),g=t(5553);const j=e=>{const{userName:s,fullName:t}=e,{usersPostList:i,fetchStatus:d}=(0,n.Z)({userName:s}),x=m.Z.USER_DETAIL(s),j=(0,l.Z)({fetchStatus:d,loading:(0,h.jsx)(c.tb,{}),success:(0,h.jsx)(u,{usersPostList:i})});return(0,h.jsx)(a.Fragment,{children:(0,h.jsx)(o.Z,{renderHeader:()=>(0,h.jsxs)("span",{className:"flex",children:["More from ",(0,h.jsx)(r.rU,{to:x,className:"text-bold mx-2",children:t})]}),renderFooter:()=>(0,h.jsx)(g.Z,{linkUrl:x}),children:j})})}},3216:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(2791),r=t(1087),c=t(2014),n=t(3719),l=t(8777),o=(t(4405),t(184));const i=e=>{const{categoryData:s,hasFollowers:t=!1,hasPosts:i=!1,hasFollowButton:d=!0}=e,{categoryName:x,categorySlug:h,categoryIcon:u,followers:m,posts:g}=s||{},j=n.Z.CATEGORY_DETAIL(h);return(0,o.jsx)(a.Fragment,{children:(0,o.jsx)(r.rU,{to:j,className:"cursor-pointer group-hover",children:(0,o.jsxs)("div",{className:"flex items-center mb-2",children:[(0,o.jsx)("div",{className:"flex",children:(0,o.jsx)(c.Z,{name:x,src:"".concat(l.c6).concat(u)},u)}),(0,o.jsx)("div",{className:"flex flex-col",children:(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,o.jsxs)("div",{className:"flex",children:[(0,o.jsx)("h3",{className:"text-sm text-default px-3",children:x}),(0,o.jsx)("span",{className:"text-center ml-1 mr-4 invisible group-hover-item",children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,o.jsx)("path",{d:"m10 8 4 4-4 4"})]})})]}),t&&(0,o.jsxs)("p",{className:"text-secondary px-3 space-y-1 text-xs",children:[m," followers"]}),i&&(0,o.jsxs)("p",{className:"text-secondary px-3 space-y-1 text-xs",children:[g," posts"]})]})})})]})})})}},1686:(e,s,t)=>{t.d(s,{Z:()=>n});var a=t(2791),r=t(7323),c=t(2817);const n=()=>{const[e,s]=(0,a.useState)([]),[t,n]=(0,a.useState)([]),[l,o]=(0,a.useState)("none"),[i,d]=(0,a.useState)(!1),{toast:x}=(0,c.p)(),h=(e,s)=>{s&&d(0===e.length||e.length%s!==0)};return{categoryData:t,isAllDataFetched:i,categories:e,fetchStatus:l,fetchPostCategories:async e=>{const{limit:s}=e||{};try{o("loading");const t=await r.hk(e);return h(t,s),0===t.length?o("empty"):(o("success"),setTimeout((()=>{}),1e3)),t}catch(t){const{statusCode:e}=t||{};o(401===e?"unauthorised":"failure")}},fetchPostCategoryByName:async e=>{try{o("loading");const s=await r.wG(e);return n(s),o("success"),s}catch(s){o("failure")}},savePostCategory:async e=>(async e=>{try{const s=await r.t4(e);return x({heading:"Post Category created successfully!",description:"Your post Category is now in review, but will be approved by admin soon!",options:{position:"top-right"}}).success(),s}catch(s){const{message:e="Something went wrong"}=s||{};throw e}})({category_name:e})}}},1160:(e,s,t)=>{t.d(s,{Z:()=>c});var a=t(2791),r=t(9732);const c=e=>{let{userName:s}=e;const[t,c]=(0,a.useState)([]),[n,l]=(0,a.useState)("none"),o=async e=>{try{l("loading");const t=await r.NL(s,e);return c(t),0===t.length?l("empty"):l("success"),t}catch(t){l("failure")}};return(0,a.useEffect)((()=>{s&&o()}),[s]),{fetchStatus:n,usersPostList:t,fetchUsersPost:o}}},5105:(e,s,t)=>{t.r(s),t.d(s,{default:()=>C});var a=t(2791),r=t(7689),c=t(9722),n=t(6926),l=(t(330),t(3381)),o=t(1372),i=t(6447),d=t(1686),x=(t(1614),t(6033)),h=t(913),u=t(2825),m=t(7323),g=t(184);const j={true:{icon:(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-user-round-check",children:[(0,g.jsx)("path",{d:"M2 21a8 8 0 0 1 13.292-6"}),(0,g.jsx)("circle",{cx:"10",cy:"8",r:"5"}),(0,g.jsx)("path",{d:"m16 19 2 2 4-4"})]}),text:"Unfollow"},false:{icon:(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-user-round-plus",children:[(0,g.jsx)("path",{d:"M2 21a8 8 0 0 1 13.292-6"}),(0,g.jsx)("circle",{cx:"10",cy:"8",r:"5"}),(0,g.jsx)("path",{d:"M19 16v6"}),(0,g.jsx)("path",{d:"M22 19h-6"})]}),text:"Follow"}},f=e=>{const{categorySlug:s,categoryId:t,isFollowing:a=!1,updateCategory:r=(()=>{}),onFollow:c=(()=>{}),onUnFollow:n=(()=>{})}=e;return(0,g.jsx)("div",{onClick:async()=>{t?a?(async()=>{try{await m.ZV(t),r((e=>({...e,followers:Number(e.followers)-1,isFollowing:!e.isFollowing})))}catch(e){alert(e.message)}})():(async()=>{try{await m.Yl(t),r((e=>({...e,followers:Number(e.followers)+1,isFollowing:!e.isFollowing})))}catch(e){alert(e.message)}})():alert("Nopeee")},className:"flex bg-custom text-accent hover-text-custom hover-accent text-xs my-2 mr-2 ml-4 p-2 px-2 cursor-pointer rounded-md",children:(0,g.jsxs)("span",{className:"flex items-center",children:[(0,g.jsx)("span",{className:"flex items-center mr-2",children:j[a].icon}),j[a].text]})})};var y=t(3216),p=t(3719);const w=e=>{const{categoryData:s={}}=e,[t,r]=(0,a.useState)(s),{id:c,categorySlug:n,categoryName:l,bio:o,createdAt:i,posts:d,followers:m,rank:j,isFollowing:w}=t;return(0,g.jsxs)("div",{className:"border bg-default p-4 rounded-md",children:[(0,g.jsxs)("div",{className:"flex justify-between",children:[(0,g.jsx)(y.Z,{categoryData:t}),(0,g.jsxs)("div",{className:"flex",children:[(0,g.jsx)(u.Z,{shareDetails:{title:n,text:l,urlRoute:p.Z.CATEGORY_DETAIL(n)},shareText:"Share Category"}),(0,g.jsx)(f,{categoryId:c,categorySlug:n,isFollowing:w,updateCategory:r})]})]}),(0,g.jsx)(x.Z,{variant:"default"}),(0,g.jsxs)("div",{className:"flex my-2",children:[(0,g.jsxs)("div",{className:"flex flex-col text-center",children:[(0,g.jsx)(h.Z,{children:d}),(0,g.jsx)(h.Z,{size:"xs",textVariant:"none",children:"Posts"})]}),(0,g.jsx)("div",{className:"mx-4"}),(0,g.jsxs)("div",{className:"flex flex-col text-center",children:[(0,g.jsx)(h.Z,{children:m}),(0,g.jsx)(h.Z,{size:"xs",textVariant:"none",children:"Followers"})]})]}),(0,g.jsx)(x.Z,{variant:"default"}),(0,g.jsx)("div",{className:"flex my-2",children:(0,g.jsx)("div",{children:(0,g.jsxs)(h.Z,{textVariant:"none",children:["Created at ",(0,g.jsx)(h.Z,{type:"span",children:i})]})})}),!!o&&(0,g.jsx)("div",{className:"flex my-4",children:(0,g.jsx)(h.Z,{textVariant:"none",children:o})})]})};var v=t(1266),N=t(7779),Z=t(1821),S=t(4212),k=t(3067),F=t(3934),b=t(8788);const P=e=>{const{categoryName:s}=e,{currentPage:t,isAllDataFetched:r,incrementPagination:c,checkIfAllDataFetched:n,resetPagination:l}=(0,F.Z)({pageSize:30}),{fetchPostsData:o,fetchStatus:i}=(0,k.Z)(),[d,x]=(0,a.useState)({category:s}),[h,u]=(0,a.useState)([]),m=async()=>{const e={page:t+1,limit:30,...d},s=await o(e);return u((e=>[...e,...s])),c(),n(s),s};return(0,a.useEffect)((()=>{m()}),[]),(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)(Z.Z,{onChange:async e=>{x(e),u([]),l();const s={page:1,limit:30,...e},t=await o(s);u(t)}}),(0,g.jsx)(N.Z,{isEmpty:"empty"===i,initialFetchStatus:i,currentPage:t,isAllDataFetched:r,fetchDataMethod:m,children:(0,g.jsx)(a.Fragment,{children:"empty"!==i?(0,g.jsx)(v.Z,{usersPostList:h}):(0,g.jsx)(S.Z,{})})},"posts_".concat(s,"_").concat((0,b.B)(d)))]})},C=()=>{const{categoryName:e}=(0,r.UO)(),{categoryData:s,fetchStatus:t,fetchPostCategoryByName:x}=(0,d.Z)(),h=(0,o.Z)({fetchStatus:t,loading:(0,g.jsx)(i.Z,{}),messages:{failure:{heading:"Looks like this user is removed or no such user existed",description:"Please recheck the url"}},success:(0,g.jsx)(w,{categoryData:s}),failure:(0,g.jsx)(w,{categoryData:s})});return(0,a.useEffect)((()=>{x(e)}),[e]),(0,g.jsx)("div",{className:"text-default m-5",children:(0,g.jsxs)("div",{className:"flex",children:[(0,g.jsxs)("div",{className:"flex flex-col mx-2 grow-3 basis-0",children:[h,(0,g.jsx)(P,{categoryName:e},e)]}),(0,g.jsx)(c.Z,{direction:"right",children:(0,g.jsxs)("div",{className:"flex flex-col grow-1 basis-0",children:[(0,g.jsx)(l.Z,{}),(0,g.jsx)(n.Z,{heading:"Posts You Might Like",renderFooter:()=>(0,g.jsx)("span",{className:"flex w-full justify-center",children:"See more"})})]})})]})})}},1614:(e,s,t)=>{t.r(s),t.d(s,{default:()=>h});var a=t(2791),r=t(1266),c=t(7779),n=t(1821),l=(t(3067),t(3934)),o=t(1160),i=t(8788),d=t(4212),x=t(184);const h=e=>{const{pageSize:s=10,initialPage:t=0,initialData:h=[],userName:u}=e,{currentPage:m,isAllDataFetched:g,incrementPagination:j,checkIfAllDataFetched:f,resetPagination:y}=(0,l.Z)({pageSize:s}),{fetchUsersPost:p,fetchStatus:w}=(0,o.Z)({userName:u}),[v,N]=(0,a.useState)(),[Z,S]=(0,a.useState)(h||[]),k=async()=>{const e={page:m+1,limit:s,...v},t=await p(e);return S((e=>[...e,...t])),j(),f(t),t};return(0,a.useEffect)((()=>{k()}),[]),(0,x.jsx)(a.Fragment,{children:"empty"!==w?(0,x.jsxs)(a.Fragment,{children:[(0,x.jsx)(n.Z,{onChange:async e=>{N(e),S([]),y();const t={page:1,limit:s,...e},a=await p(t);S(a)}}),(0,x.jsx)(c.Z,{isEmpty:"empty"===w,initialFetchStatus:w,currentPage:m,isAllDataFetched:g,fetchDataMethod:k,children:(0,x.jsx)(a.Fragment,{children:"empty"!==w?(0,x.jsx)(r.Z,{usersPostList:Z}):(0,x.jsx)(d.Z,{})})},"posts_".concat((0,i.B)(v)))]}):(0,x.jsx)(d.Z,{})})}}}]);
//# sourceMappingURL=105.70df23fc.chunk.js.map