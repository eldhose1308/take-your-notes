"use strict";(self.webpackChunktake_your_notes_v1=self.webpackChunktake_your_notes_v1||[]).push([[418],{4895:(e,s,t)=>{t.d(s,{Z:()=>d});var r=t(2791),n=t(5709),o=t(2861),a=t(913),l=t(184);const c=()=>(0,l.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-folder-open",children:(0,l.jsx)("path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"})}),(0,l.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,l.jsx)(a.Z,{size:"lg",type:"h2",children:"Hmm..."}),(0,l.jsx)(a.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"It looks like there is no data present."})]})]}),i={none:"Show More",loading:"Fetching data",failure:"Failed to fetch",success:"Show More"},d=e=>{const{UnauthorisedState:s=o.Z,EmptyState:t=c,FailureState:a=n.Z,fetchDataMethod:d,initialFetchStatus:x="none",pageSize:h=10,isEmpty:m=!1,currentPage:u=1,isAllDataFetched:p=!1,initialData:j=[],children:g}=e,[v,w]=(0,r.useState)(x);(0,r.useEffect)((()=>{w(x)}),[x]);return"unauthorised"===v?(0,l.jsx)(r.Fragment,{children:s&&(0,l.jsx)(s,{})}):"empty"===v?(0,l.jsx)(r.Fragment,{children:t&&(0,l.jsx)(t,{})}):"failure"===v?(0,l.jsx)(r.Fragment,{children:a&&(0,l.jsx)(a,{})}):(0,l.jsxs)(r.Fragment,{children:[g,!p&&!m&&(0,l.jsx)("div",{className:"flex w-full justify-center text-sm my-4 mx-2",children:(0,l.jsx)("span",{onClick:()=>{(async e=>{w("loading");try{await d(),w("success"),setTimeout((()=>{w("none")}),1e3)}catch(s){console.error(s),w("failure")}})()},className:"flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-accent text-custom bg-accent hover-default hover-text-default",children:(0,l.jsxs)("span",{className:"flex",children:["loading"===v&&(0,l.jsx)("svg",{className:"lucide lucide-loader-circle mx-2 animate-spin",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,l.jsx)("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),i[v]]})})})]})}},3934:(e,s,t)=>{t.d(s,{Z:()=>n});var r=t(2791);const n=e=>{const{pageSize:s=10}=e||{},[t,n]=(0,r.useState)(0),[o,a]=(0,r.useState)(!1);return{currentPage:t,isAllDataFetched:o,incrementPagination:()=>{n((e=>e+1))},resetPagination:()=>{n(1),a(!1)},checkIfAllDataFetched:e=>{a(0===e.length||e.length%s!==0)}}}},5709:(e,s,t)=>{t.d(s,{Z:()=>n});t(2791);var r=t(184);const n=()=>(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:"Failed tof etch"})})},2861:(e,s,t)=>{t.d(s,{Z:()=>o});t(2791);var r=t(913),n=t(184);const o=()=>(0,n.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-shield-ban",children:[(0,n.jsx)("path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}),(0,n.jsx)("path",{d:"m4.243 5.21 14.39 12.472"})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,n.jsx)(r.Z,{size:"lg",type:"h2",children:"Oops!"}),(0,n.jsx)(r.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"It looks like you're not logged in yet."})]})]})},2825:(e,s,t)=>{t.d(s,{Z:()=>o});t(2791);var r=t(2817);var n=t(184);const o=e=>{const{shareText:s="Share",shareDetails:t,messages:o}=e,{title:a,text:l,urlRoute:c}=t||{},{success:i="Link copied to clipboard!",error:d="Oops! Unable to copy the link!"}=o||{},{toast:x}=(0,r.p)();return(0,n.jsx)("div",{onClick:async()=>{const e=(()=>{const{protocol:e,host:s,pathname:t}=window.location,r=t.split("/").filter((e=>e)),n=r.length>0?"/".concat(r[0]):"";return"".concat(e,"//").concat(s).concat(n)})();try{const s=await(e=>{let{title:s,text:t,url:r}=e;return new Promise(((e,n)=>{navigator.share?navigator.share({title:s,text:t,url:r}).then((()=>{e("share")})).catch((e=>{console.error("@unable to copy to clipboard",e),n()})):navigator.clipboard.writeText(r).then((()=>{e("clipboard")})).catch((e=>{n(e),console.error("@unable to copy to clipboard",e)}))}))})({title:a,text:l,url:"".concat(e,"/#").concat(c)});"clipboard"===s&&x({heading:i,options:{position:"top-center"}}).success()}catch(s){x({heading:d,description:s.toString(),options:{position:"top-center"}}).error()}},className:"content-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md",children:(0,n.jsxs)("span",{className:"flex",children:[(0,n.jsx)("span",{className:"flex items-center mr-2",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-share-2",children:[(0,n.jsx)("circle",{cx:"18",cy:"5",r:"3"}),(0,n.jsx)("circle",{cx:"6",cy:"12",r:"3"}),(0,n.jsx)("circle",{cx:"18",cy:"19",r:"3"}),(0,n.jsx)("line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}),(0,n.jsx)("line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"})]})}),s]})})}},6732:(e,s,t)=>{t.d(s,{Z:()=>l});t(2791);var r=t(1087),n=t(913),o=t(3719),a=t(184);const l=e=>{const{categoryName:s,categorySlug:t}=e,l=o.Z.CATEGORY_DETAIL(t);return(0,a.jsx)(r.rU,{to:l,className:"bg-custom hover-another border-2 border-custom rounded-md flex cursor-pointer px-2 py-1.5 mt-2",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"flex items-center mr-2",children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-square-menu",children:[(0,a.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,a.jsx)("path",{d:"M7 8h10"}),(0,a.jsx)("path",{d:"M7 12h10"}),(0,a.jsx)("path",{d:"M7 16h10"})]})}),(0,a.jsx)(n.Z,{size:"xs",type:"span",textVariant:"default",className:"flex items-center",children:s})]})})}},8728:(e,s,t)=>{t.d(s,{Z:()=>o});var r=t(3630),n=(t(2791),t(184));const o=e=>{let{createdTime:s,updatedTime:t,hasEditInfo:o=!0}=e;const[a,l]=(0,r.T)(s,t);return(0,n.jsxs)("span",{children:[(0,n.jsx)("p",{className:"text-secondary pr-3 space-y-1 text-xs",children:a}),o&&!!l&&(0,n.jsxs)("p",{className:"text-secondary pr-3 space-y-1 text-xxs",children:["[Edited] ",l]})]})}},1821:(e,s,t)=>{t.d(s,{Z:()=>l});t(2791);var r=t(8811),n=t(184);const o=[{id:"none",text:"None"},{id:"recent",text:"Most Recent"},{id:"oldest",text:"Oldest"},{id:"most_liked",text:"Most Liked"},{id:"random",text:"Random"}],a={recent:{sort_by:"date",sort_order:"desc"},oldest:{sort_by:"date",sort_order:"asc"},most_liked:{sort_by:"likes",sort_order:"desc"},random:{sort_by:"random"}},l=e=>{const{onChange:s=(()=>{}),resetPagination:t=(()=>{})}=e;return(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)(r.Z,{label:"Filter by",onSelect:e=>{const{id:r}=e,n=a[r];t(),s(n)},options:o})})}},8534:(e,s,t)=>{t.d(s,{Z:()=>p});var r=t(2791),n=t(1087),o=(t(2817),t(9115)),a=t(1381),l=t(913),c=t(6033),i=(t(2825),t(2206)),d=t(775),x=t(8728),h=t(3719),m=t(6732),u=t(184);const p=e=>{const{postItem:s}=e,{postTitle:t,postSlug:p,id:j,content:g,category:v,user:w,createdAt:f,updatedAt:y}=s,{categoryName:N,categorySlug:k}=v||{},{userName:b,fullName:Z,avatar:F}=w||{},L=(0,d.rK)(b),S=(0,d.OG)(b,p),C=h.Z.POST_EDIT(p);return(0,u.jsxs)(a.Zb,{border:"another",variant:"default",rounded:"md",className:"border hover-border-highlight my-2 w-full max-h-mds",children:[(0,u.jsx)(a.Ol,{children:(0,u.jsx)(o.Z,{justifyContent:"spaceBetween",alignItems:"none",className:"",children:(0,u.jsx)(i.Z,{userData:w,hasFollowButton:!1})})}),(0,u.jsxs)(a.aY,{children:[(0,u.jsx)(n.rU,{to:S,className:"cursor-pointer group-hover",children:(0,u.jsxs)(l.Z,{type:"h1",size:"md",className:"mb-2 w-full",children:[t,(0,u.jsx)("span",{className:"text-center ml-2 invisible group-hover-item",children:(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right",children:[(0,u.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,u.jsx)("path",{d:"m10 8 4 4-4 4"})]})})]})}),(0,u.jsx)("div",{className:"flex max-w-fit text-xs",children:(0,u.jsx)(m.Z,{categoryName:N,categorySlug:k})})]}),(0,u.jsx)(a.eW,{className:"p-0",children:(0,u.jsxs)("div",{className:"flex flex-col w-full",children:[(0,u.jsx)(c.Z,{variant:"another",className:"my-2"}),(0,u.jsx)(x.Z,{createdTime:f,updatedTime:y,hasEditInfo:!1}),L?(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)(c.Z,{variant:"another",className:"my-2"}),(0,u.jsxs)("div",{className:"flex text-xs",children:[(0,u.jsx)(n.rU,{to:C,className:"cursor-pointer",children:(0,u.jsxs)("span",{className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-primary rounded-md cursor-pointer",onClick:()=>{},children:[(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-pencil-line",children:[(0,u.jsx)("path",{d:"M12 20h9"}),(0,u.jsx)("path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}),(0,u.jsx)("path",{d:"m15 5 3 3"})]}),(0,u.jsx)("span",{className:"pl-1",children:"Edit"})]})}),(0,u.jsxs)("span",{className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-destructive rounded-md cursor-pointer",onClick:()=>{},children:[(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-trash",children:[(0,u.jsx)("path",{d:"M3 6h18"}),(0,u.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,u.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]}),(0,u.jsx)("span",{className:"pl-1",children:"Delete"})]})]})]}):null]})})]})}},3067:(e,s,t)=>{t.d(s,{Z:()=>o});var r=t(2791),n=t(7128);const o=()=>{const[e,s]=(0,r.useState)("none");return{fetchStatus:e,fetchPostsData:async e=>{try{s("loading");const t=await n.Jq(e);return 0===t.length?s("empty"):(s("success"),setTimeout((()=>{s("none")}),1e3)),t}catch(t){s("failure")}}}}},1176:(e,s,t)=>{t.d(s,{Z:()=>l});t(2791);var r=t(1087),n=t(2014),o=t(3719),a=t(184);const l=e=>{const{userData:s,hasFollowers:t=!1}=e,{fullName:l,userName:c,avatar:i,followers:d=0}=s||{},x=o.Z.USER_DETAIL(c);return(0,a.jsx)(r.rU,{to:x,className:"cursor-pointer group-hover",children:(0,a.jsxs)("div",{className:"flex items-center mb-2",children:[(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)(n.Z,{name:l,src:i},i)}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("h3",{className:"text-sm text-default px-3",children:l}),(0,a.jsx)("span",{className:"text-center ml-1 mr-4 invisible group-hover-item",children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right",children:[(0,a.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,a.jsx)("path",{d:"m10 8 4 4-4 4"})]})})]}),t&&(0,a.jsxs)("p",{className:"text-secondary px-3 space-y-1 text-xs",children:[d," followers"]})]})})})]})})}},2206:(e,s,t)=>{t.d(s,{Z:()=>c});var r=t(2791),n=t(1176),o=t(4405),a=t(775),l=t(184);const c=e=>{const{userData:s,hasFollowers:t=!1,hasFollowButton:c=!0}=e,[i,d]=(0,r.useState)(s),{userName:x,userId:h,isFollowing:m}=i||{},u=(0,a.rK)(x);return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(n.Z,{userData:i,hasFollowers:t}),c&&!u&&(0,l.jsx)(o.Z,{userName:x,userId:h,isFollowing:m,onFollow:async()=>{d((e=>({...e,followers:Number(e.followers)+1,isFollowing:!e.isFollowing})))},onUnFollow:async()=>{d((e=>({...e,followers:Number(e.followers)-1,isFollowing:!e.isFollowing})))}})]})}},1266:(e,s,t)=>{t.d(s,{Z:()=>l});var r=t(2791),n=t(8534),o=t(184);const a=e=>{const{posts:s=[]}=e;return(0,o.jsx)(r.Fragment,{children:(0,o.jsx)("div",{className:"flex w-full",children:s.map((e=>(0,o.jsx)(n.Z,{postItem:e},e.id)))})})},l=e=>{const{usersPostList:s=[]}=e;return(0,o.jsx)("div",{className:"flex content-start w-full",children:(0,o.jsx)(r.Fragment,{children:(0,o.jsx)(a,{posts:s})})})}}}]);
//# sourceMappingURL=418.4f2c04f3.chunk.js.map