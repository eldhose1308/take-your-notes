"use strict";(self.webpackChunktake_your_notes_v1=self.webpackChunktake_your_notes_v1||[]).push([[994],{7779:(e,t,s)=>{s.d(t,{Z:()=>l});var r=s(2791),o=s(5709),n=s(2861),a=s(6760),c=s(184);const i={none:"Show More",loading:"Fetching data",failure:"Failed to fetch",success:"Show More"},l=e=>{const{UnauthorisedState:t=n.Z,EmptyState:s=a.Z,FailureState:l=o.Z,fetchDataMethod:d,initialFetchStatus:h="none",pageSize:u=10,isEmpty:p=!1,currentPage:x=1,isAllDataFetched:m=!1,initialData:g=[],children:w}=e,[y,f]=(0,r.useState)(h);(0,r.useEffect)((()=>{f(h)}),[h]);return"unauthorised"===y?(0,c.jsx)(r.Fragment,{children:t&&(0,c.jsx)(t,{})}):"empty"===y?(0,c.jsx)(r.Fragment,{children:s&&(0,c.jsx)(s,{})}):"failure"===y?(0,c.jsx)(r.Fragment,{children:l&&(0,c.jsx)(l,{})}):(0,c.jsxs)(r.Fragment,{children:[w,!m&&(0,c.jsx)("div",{className:"flex w-full justify-center text-sm my-4 mx-2",children:(0,c.jsx)("span",{onClick:()=>{(async e=>{f("loading");try{await d(),f("success"),setTimeout((()=>{f("none")}),1e3)}catch(t){console.error(t),f("failure")}})()},className:"flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-accent text-custom bg-accent hover-default hover-text-default",children:(0,c.jsxs)("span",{className:"flex",children:["loading"===y&&(0,c.jsx)("svg",{className:"lucide lucide-loader-circle mx-2 animate-spin",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,c.jsx)("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),i[y]]})})})]})}},3934:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(2791);const o=e=>{const{pageSize:t=10,previousPageFromCache:s=0}=e||{},[o,n]=(0,r.useState)(0),[a,c]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{n(s)}),[s]),{currentPage:o,isAllDataFetched:a,incrementPagination:()=>{n((e=>e+1))},resetPagination:()=>{n(1),c(!1)},checkIfAllDataFetched:e=>{c(0===e.length||e.length%t!==0)}}}},6760:(e,t,s)=>{s.d(t,{Z:()=>n});s(2791);var r=s(913),o=s(184);const n=()=>(0,o.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-folder-open",children:(0,o.jsx)("path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"})}),(0,o.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,o.jsx)(r.Z,{size:"lg",type:"h2",children:"Hmm..."}),(0,o.jsx)(r.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"It looks like there is no data present."})]})]})},5709:(e,t,s)=>{s.d(t,{Z:()=>o});s(2791);var r=s(184);const o=()=>(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:"Failed tof etch"})})},2861:(e,t,s)=>{s.d(t,{Z:()=>n});s(2791);var r=s(913),o=s(184);const n=()=>(0,o.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-shield-ban",children:[(0,o.jsx)("path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}),(0,o.jsx)("path",{d:"m4.243 5.21 14.39 12.472"})]}),(0,o.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,o.jsx)(r.Z,{size:"lg",type:"h2",children:"Oops!"}),(0,o.jsx)(r.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"It looks like you're not logged in yet."})]})]})},2825:(e,t,s)=>{s.d(t,{Z:()=>n});s(2791);var r=s(2817);var o=s(184);const n=e=>{const{shareText:t="Share",shareDetails:s,messages:n}=e,{title:a,text:c,urlRoute:i}=s||{},{success:l="Link copied to clipboard!",error:d="Oops! Unable to copy the link!"}=n||{},{toast:h}=(0,r.p)();return(0,o.jsx)("div",{onClick:async()=>{const e=(()=>{const{protocol:e,host:t,pathname:s}=window.location,r=s.split("/").filter((e=>e)),o=r.length>0?"/".concat(r[0]):"";return"".concat(e,"//").concat(t).concat(o)})();try{const t=await(e=>{let{title:t,text:s,url:r}=e;return new Promise(((e,o)=>{navigator.share?navigator.share({title:t,text:s,url:r}).then((()=>{e("share")})).catch((e=>{console.error("@unable to copy to clipboard",e),o()})):navigator.clipboard.writeText(r).then((()=>{e("clipboard")})).catch((e=>{o(e),console.error("@unable to copy to clipboard",e)}))}))})({title:a,text:c,url:"".concat(e,"/#").concat(i)});"clipboard"===t&&h({heading:l,options:{position:"top-center"}}).success()}catch(t){h({heading:d,description:t.toString(),options:{position:"top-center"}}).error()}},className:"content-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md",children:(0,o.jsxs)("span",{className:"flex",children:[(0,o.jsx)("span",{className:"flex items-center mr-2",children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-share-2",children:[(0,o.jsx)("circle",{cx:"18",cy:"5",r:"3"}),(0,o.jsx)("circle",{cx:"6",cy:"12",r:"3"}),(0,o.jsx)("circle",{cx:"18",cy:"19",r:"3"}),(0,o.jsx)("line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}),(0,o.jsx)("line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"})]})}),t]})})}},6732:(e,t,s)=>{s.d(t,{Z:()=>c});s(2791);var r=s(1087),o=s(913),n=s(3719),a=s(184);const c=e=>{const{categoryName:t,categorySlug:s}=e,c=n.Z.CATEGORY_DETAIL(s);return(0,a.jsx)(r.rU,{to:c,className:"bg-custom hover-default border-2 border-custom rounded-md flex cursor-pointer px-2 py-1.5 mt-2",children:(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("span",{className:"flex items-center mr-2",children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-square-menu",children:[(0,a.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,a.jsx)("path",{d:"M7 8h10"}),(0,a.jsx)("path",{d:"M7 12h10"}),(0,a.jsx)("path",{d:"M7 16h10"})]})}),(0,a.jsx)(o.Z,{size:"xs",type:"span",textVariant:"default",className:"flex items-center",children:t})]})})}},8728:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(3630),o=(s(2791),s(184));const n=e=>{let{createdTime:t,updatedTime:s,hasEditInfo:n=!0}=e;const[a,c]=(0,r.T)(t,s);return(0,o.jsxs)("span",{children:[(0,o.jsx)("p",{className:"text-secondary pr-3 space-y-1 text-xs",children:a}),n&&!!c&&(0,o.jsxs)("p",{className:"text-secondary pr-3 space-y-1 text-xxs",children:["[Edited] ",c]})]})}},1821:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(2791),o=s(8811),n=s(184);const a=[{id:"none",text:"None"},{id:"recent",text:"Most Recent"},{id:"oldest",text:"Oldest"},{id:"most_liked",text:"Most Liked"},{id:"random",text:"Random"}],c={recent:{sort_by:"date",sort_order:"desc"},oldest:{sort_by:"date",sort_order:"asc"},most_liked:{sort_by:"likes",sort_order:"desc"},random:{sort_by:"random"}},i=e=>{const{filters:t,onChange:s=(()=>{}),resetPagination:i=(()=>{})}=e,l=(0,r.useMemo)((()=>Object.keys(c).find((e=>{const s=c[e];return JSON.stringify(s)===JSON.stringify(t)}))),[t]),d=(0,r.useMemo)((()=>a.find((e=>e.id===l))),[l]);return(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)(o.Z,{label:"Filter by",onSelect:e=>{const{id:t}=e,r=c[t];i(),s(r,t)},options:a,selectedOption:d})})}},8534:(e,t,s)=>{s.d(t,{Z:()=>f});var r=s(2791),o=s(1087),n=(s(2817),s(9115)),a=s(1381),c=s(913),i=s(6033),l=(s(2825),s(2206)),d=s(775),h=s(8728),u=s(3719),p=s(6732),x=s(4462),m=s(1172),g=s(4921),w=s(184);const y={none:"Undo Delete",loading:"Restoring...",failure:"Failed to Restore",completed:"Restored"},f=e=>{const{postItem:t}=e,{postTitle:s,postSlug:f,id:j,content:v,category:k,user:N,createdAt:T,updatedAt:_}=t,{categoryName:C,categorySlug:S,isVerified:b}=k||{},{userName:E,fullName:Z,avatar:L}=N||{},[M,F]=(0,r.useState)(!1),[I,P]=(0,r.useState)("none"),{setLastClickedPost:O}=(0,g.H_)(),{deletePost:D,restorePost:B}=(0,m.Z)(),{confirmDelete:V}=(0,x.h)(),A=(0,d.rK)(E),R=(0,d.OG)(E,f),W=u.Z.POST_EDIT(f);return(0,w.jsx)("div",{"data-id":"postItem_".concat(f),className:"w-full post-list-item",children:(0,w.jsxs)(a.Zb,{border:"another",variant:"default",rounded:"md",className:"border hover-border-highlight my-2 w-full max-h-mds ".concat(b?"":"opacity-50"," ").concat(M?"opacity-50":""),children:[(0,w.jsx)(a.Ol,{children:(0,w.jsxs)(n.Z,{justifyContent:"spaceBetween",alignItems:"none",className:"",children:[(0,w.jsx)(l.Z,{userData:N,hasFollowButton:!1}),!b&&(0,w.jsx)("span",{className:"cursor-pointer",title:"This category is not verified",children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-clock-alert",children:[(0,w.jsx)("path",{d:"M12 6v6l4 2"}),(0,w.jsx)("path",{d:"M16 21.16a10 10 0 1 1 5-13.516"}),(0,w.jsx)("path",{d:"M20 11.5v6"}),(0,w.jsx)("path",{d:"M20 21.5h.01"})]})}),M&&(0,w.jsx)("span",{className:"cursor-pointer",title:"This post is deleted",children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-trash-2",children:[(0,w.jsx)("path",{d:"M3 6h18"}),(0,w.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,w.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),(0,w.jsx)("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),(0,w.jsx)("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})})]})}),(0,w.jsxs)(a.aY,{children:[(0,w.jsx)(o.rU,{to:R,onClick:()=>{O("postItem_".concat(f))},className:"cursor-pointer group-hover",children:(0,w.jsxs)(c.Z,{type:"h1",size:"md",className:"mb-2 w-full",children:[s,(0,w.jsx)("span",{className:"text-center ml-2 invisible group-hover-item",children:(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right",children:[(0,w.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,w.jsx)("path",{d:"m10 8 4 4-4 4"})]})})]})}),(0,w.jsx)("div",{className:"flex max-w-fit text-xs",children:(0,w.jsx)(p.Z,{categoryName:C,categorySlug:S})})]}),(0,w.jsx)(a.eW,{className:"p-0",children:(0,w.jsxs)("div",{className:"flex flex-col w-full",children:[(0,w.jsx)(i.Z,{variant:"another",className:"my-2"}),(0,w.jsx)(h.Z,{createdTime:T,updatedTime:_,hasEditInfo:!1}),A?(0,w.jsxs)(r.Fragment,{children:[(0,w.jsx)(i.Z,{variant:"another",className:"my-2"}),(0,w.jsxs)("div",{className:"flex text-xs",children:[(0,w.jsx)(o.rU,{to:W,className:"cursor-pointer",children:(0,w.jsxs)("span",{className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-primary rounded-md cursor-pointer",onClick:()=>{},children:[(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-pencil-line",children:[(0,w.jsx)("path",{d:"M12 20h9"}),(0,w.jsx)("path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}),(0,w.jsx)("path",{d:"m15 5 3 3"})]}),(0,w.jsx)("span",{className:"pl-1",children:"Edit"})]})}),M?(0,w.jsxs)("span",{onClick:"loading"===I?()=>{}:async()=>{P("loading");try{await B(j),F(!1),P("success")}catch{console.log("Failed to restore post"),P("failure")}finally{setTimeout((()=>{P("none")}),1e3)}},className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-info rounded-md cursor-pointer",children:[(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-undo",children:[(0,w.jsx)("path",{d:"M3 7v6h6"}),(0,w.jsx)("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]}),(0,w.jsx)("span",{className:"pl-1",children:y[I]})]}):(0,w.jsxs)("span",{onClick:async()=>{if(await V((()=>D(j))))try{return F(!0),!0}catch{return!1}return!1},className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-destructive rounded-md cursor-pointer",children:[(0,w.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-trash",children:[(0,w.jsx)("path",{d:"M3 6h18"}),(0,w.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,w.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]}),(0,w.jsx)("span",{className:"pl-1",children:"Delete"})]})]})]}):null]})})]})})}},475:(e,t,s)=>{s.d(t,{a:()=>r});const r={SET_FIELDS:"SET_FIELDS",SET_TAGS:"SET_TAGS",SET_VISIBILITY:"SET_VISIBILITY",SET_CONTENT:"SET_CONTENT",SET_TITLE:"SET_TITLE",SET_CATEGORY:"SET_CATEGORY",RESET_FORM:"RESET_FORM"}},2144:(e,t,s)=>{s.d(t,{Qd:()=>o,XD:()=>n,ZM:()=>a});var r=s(184);const o={private:"private",public:"public"},n=[{id:o.private,label:"Private",modeElement:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-eye-off",children:[(0,r.jsx)("path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}),(0,r.jsx)("path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}),(0,r.jsx)("path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}),(0,r.jsx)("path",{d:"m2 2 20 20"})]})},{id:o.public,label:"Public",modeElement:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-eye",children:[(0,r.jsx)("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),(0,r.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}],a="My First Post"},1172:(e,t,s)=>{s.d(t,{Z:()=>m});var r=s(2791),o=s(1087),n=s(7689),a=s(7128),c=s(7323),i=s(2144),l=s(475);const d={postTags:[],currentVisibilityMode:i.Qd.public,postTitle:i.ZM,postCategory:null,markdownContent:""},h=(e,t)=>{let{type:s,payload:r}=t;switch(s){case l.a.SET_FIELDS:return{...e,...r};case l.a.SET_TAGS:return{...e,postTags:r};case l.a.SET_VISIBILITY:return{...e,currentVisibilityMode:r};case l.a.SET_CONTENT:return{...e,markdownContent:r};case l.a.SET_TITLE:return{...e,postTitle:r};case l.a.SET_CATEGORY:return{...e,postCategory:r};case l.a.RESET_FORM:return d;default:return e}};s(4921);var u=s(2817),p=s(775),x=s(7155);const m=()=>{const[e,t]=(0,o.lr)(),{id:s}=(0,n.UO)(),{toast:i}=(0,u.p)(),{logout:m}=(0,x.Z)(),[g,w]=(0,r.useReducer)(h,{...d}),[y,f]=(0,r.useState)("none"),j=(0,r.useCallback)((async e=>{try{const t=await a.TJ(e);return i({heading:"Post created successfully!",description:"Your post has been successfully published!",options:{position:"top-right"}}).success(),t}catch(t){const{message:e,statusCode:s}=t;return 401===s&&m(),i({heading:"Oops! There was an error creating your post.",description:e,options:{position:"top-right"}}).error(),!1}}),[]),v=(0,r.useCallback)((async(e,t)=>{try{const s=await a.CP(e,t);return i({heading:"Post updated successfully!",description:"Your post has been successfully updated!",options:{position:"top-right"}}).success(),s}catch(s){const{message:e}=s;return i({heading:"Oops! There was an error updating your post.",description:e,options:{position:"top-right"}}).error(),!1}}),[]),k=(0,r.useCallback)((async e=>{try{const t=await a.fR(e);return i({heading:"Post deleted successfully!",description:"Your post has been successfully deleted!",options:{position:"top-right"}}).success(),t}catch(t){const{message:e,statusCode:s}=t;throw 401===s&&m(),i({heading:"Oops! There was an error deleting your post.",description:e,options:{position:"top-right"}}).error(),t}}),[]),N=(0,r.useCallback)((async e=>{try{const t=await a.ts(e);return i({heading:"Post restored successfully!",description:"Your post has been successfully restored!",options:{position:"top-right"}}).success(),t}catch(t){const{message:e}=t;throw i({heading:"Oops! There was an error restoring your post.",description:e,options:{position:"top-right"}}).error(),t}}),[]);return(0,r.useEffect)((()=>{}),[s]),{fetchCategoriesData:async e=>{try{f("loading");const e=await c.hk();return f("success"),setTimeout((()=>{f("none")}),1e3),e}catch(t){f("failure")}},fetchMyPostsData:async e=>{try{f("loading");const t=await a.$n(e);return 0===t.length?f("empty"):(f("success"),setTimeout((()=>{f("none")}),1e3)),t}catch(t){const{statusCode:e}=t;throw 401===e&&m(),f("failure"),t}},fetchUsersPostItem:async()=>{if(!s)return;const{userName:e}=(0,p.bV)();try{f("loading");const t=await a.zQ({userName:e,postSlug:s}),{id:r,category:o,content:n,postTitle:c,visibility:i,user:d}=t||{},{categoryId:h,categoryName:u,categorySlug:p}=o||{},{fullName:x,avatar:m}=d||{},g={postId:r,markdownContent:n,postTitle:c,currentVisibilityMode:i,postCategory:{id:h,categoryName:u,categorySlug:p,value:p}};w({type:l.a.SET_FIELDS,payload:g}),f("success")}catch(t){f("failure")}},savePost:async()=>{const[e,t]=(e=>{const{postTags:t,currentVisibilityMode:s,postCategory:r,postTitle:o,markdownContent:n}=e;return r?s?o?n?[!1,""]:[!0,"Post content is missing"]:[!0,"Post Title is missing"]:[!0,"Post Visibility Mode is missing"]:[!0,"Category is missing"]})(g);if(e)return void i({heading:"Oops! Please verify the changes.",description:t,options:{position:"top-right"}}).error();const{postId:r,postTags:o,currentVisibilityMode:n,postCategory:a,postTitle:c,markdownContent:l}=g,d={category:a.id,content:l,post_title:c,visibility:n};return s?v(d,r):j(d)},deletePost:k,restorePost:N,postFormState:g,postFormDispatcher:w,fetchStatus:y}}},1176:(e,t,s)=>{s.d(t,{Z:()=>c});s(2791);var r=s(1087),o=s(2014),n=s(3719),a=s(184);const c=e=>{const{userData:t,hasFollowers:s=!1}=e,{fullName:c,userName:i,avatar:l,followers:d=0}=t||{},h=n.Z.USER_DETAIL(i);return(0,a.jsx)(r.rU,{to:h,className:"cursor-pointer group-hover",children:(0,a.jsxs)("div",{className:"flex items-center mb-2",children:[(0,a.jsx)("div",{className:"flex",children:(0,a.jsx)(o.Z,{name:c,src:l},l)}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("h3",{className:"text-sm text-default px-3",children:c}),(0,a.jsx)("span",{className:"text-center ml-1 mr-4 invisible group-hover-item",children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right",children:[(0,a.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,a.jsx)("path",{d:"m10 8 4 4-4 4"})]})})]}),s&&(0,a.jsxs)("p",{className:"text-secondary px-3 space-y-1 text-xs",children:[d," followers"]})]})})})]})})}},2206:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(2791),o=s(1176),n=s(4405),a=s(775),c=s(184);const i=e=>{const{userData:t,hasFollowers:s=!1,hasFollowButton:i=!0}=e,[l,d]=(0,r.useState)(t),{userName:h,userId:u,isFollowing:p}=l||{},x=(0,a.rK)(h);return(0,c.jsxs)(r.Fragment,{children:[(0,c.jsx)(o.Z,{userData:l,hasFollowers:s}),i&&!x&&(0,c.jsx)(n.Z,{userName:h,userId:u,isFollowing:p,onFollow:async()=>{d((e=>({...e,followers:Number(e.followers)+1,isFollowing:!e.isFollowing})))},onUnFollow:async()=>{d((e=>({...e,followers:Number(e.followers)-1,isFollowing:!e.isFollowing})))}})]})}},7323:(e,t,s)=>{s.d(t,{Bg:()=>w,Yl:()=>p,Zk:()=>i,rP:()=>l,zg:()=>d,hk:()=>h,wG:()=>u,N_:()=>y,t4:()=>m,ZV:()=>x,$A:()=>g});var r=s(8777),o=s(3003);var n=s(3630);const a=e=>{const{category_name:t,category_slug:s,category_icon:r,posts_count:o,followers_count:a,created_at:c,full_name:i="Admin",user_name:l,category_id:d,is_following:h,verified:u}=e;return{id:d,categoryName:t,categorySlug:s,categoryIcon:r,followers:a,posts:o,createdUser:i,createdUserName:l,createdAt:(0,n.B)(c),isFollowing:!!h,isVerified:!!Number(u)}},c=e=>{const{main_category_name:t,main_category_slug:s,created_at:r,main_category_id:o}=e;return{id:o,mainCategoryName:t,mainCategorySlug:s,createdAt:(0,n.B)(r)}},i=async function(e){try{const t=await async function(e){const t=(0,o.K)(r._n+"postCategories/my",e);return new o.Z(t).get().then((e=>e)).catch((e=>{throw e}))}(e),{data:s=[]}=t;return s.map(a)||[]}catch(t){throw t}},l=async function(e){const t=await async function(e){return new o.Z("".concat(r._n,"postCategories/my/").concat(e)).get().then((e=>e)).catch((e=>{throw e.response}))}(e),{data:s=[]}=t,n=(e=>{const{main_categories:t,...s}=e;return{...a(s),mainCategories:t.map(c)}})(s);return n||[]},d=async function(e){try{const t=await async function(e){const t=(0,o.K)(r._n+"postMainCategories",e);return new o.Z(t).get().then((e=>e)).catch((e=>{throw e}))}(e),{data:s=[]}=t;return s.map(c)||[]}catch(t){throw t}},h=async function(e){try{const t=await async function(e){const t=(0,o.K)(r._n+"postCategories",e);return new o.Z(t).get().then((e=>e)).catch((e=>{throw e}))}(e),{data:s=[]}=t;return s.map(a)||[]}catch(t){throw t}},u=async function(e){const t=await async function(e){return new o.Z(r._n+"postCategories/".concat(e)).get().then((e=>e)).catch((e=>{throw e.response}))}(e),{data:s=[]}=t;return a(s)||{}},p=async function(e){try{await async function(e){return new o.Z(r._n+"postCategories/".concat(e,"/follow")).post().then((e=>e)).catch((e=>{throw e}))}(e);return!0}catch(t){throw t}},x=async function(e){try{await async function(e){return new o.Z(r._n+"postCategories/".concat(e,"/unfollow")).post().then((e=>e)).catch((e=>{throw e}))}(e);return!0}catch(t){throw t}},m=async function(e){try{const t=await async function(e){return new o.Z(r._n+"postCategories").post(e).then((e=>e)).catch((e=>{throw e}))}(e),{data:s=[]}=t;return a(s)}catch(t){throw t}},g=async function(e,t){try{const s=await async function(e,t){return new o.Z(r._n+"postCategories/".concat(t)).put(e).then((e=>e)).catch((e=>{throw e.response}))}(e,t),{data:n=[]}=s;return a(n)}catch(s){throw s}},w=async function(e){try{return await async function(e){return new o.Z(r._n+"postCategories/".concat(e)).delete().then((e=>e)).catch((e=>{throw e}))}(e)}catch(t){throw t}},y=async function(e){try{return await async function(e){return new o.Z(r._n+"postCategories/".concat(e,"/restore")).post().then((e=>e)).catch((e=>{throw e}))}(e)}catch(t){throw t}}}}]);
//# sourceMappingURL=994.07c976de.chunk.js.map