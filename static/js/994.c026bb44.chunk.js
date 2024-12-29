"use strict";(self.webpackChunktake_your_notes_v1=self.webpackChunktake_your_notes_v1||[]).push([[994],{7779:(e,t,s)=>{s.d(t,{Z:()=>l});var r=s(2791),o=s(5709),n=s(2861),i=s(6760),a=s(184);const c={none:"Show More",loading:"Fetching data",failure:"Failed to fetch",success:"Show More"},l=e=>{const{UnauthorisedState:t=n.Z,EmptyState:s=i.Z,FailureState:l=o.Z,fetchDataMethod:d,initialFetchStatus:h="none",pageSize:u=10,isEmpty:x=!1,currentPage:p=1,isAllDataFetched:m=!1,initialData:g=[],children:w}=e,[j,y]=(0,r.useState)(h);(0,r.useEffect)((()=>{y(h)}),[h]);return"unauthorised"===j?(0,a.jsx)(r.Fragment,{children:t&&(0,a.jsx)(t,{})}):"empty"===j?(0,a.jsx)(r.Fragment,{children:s&&(0,a.jsx)(s,{})}):"failure"===j?(0,a.jsx)(r.Fragment,{children:l&&(0,a.jsx)(l,{})}):(0,a.jsxs)(r.Fragment,{children:[w,!m&&(0,a.jsx)("div",{className:"flex w-full justify-center text-sm my-4 mx-2",children:(0,a.jsx)("span",{onClick:()=>{(async e=>{y("loading");try{await d(),y("success"),setTimeout((()=>{y("none")}),1e3)}catch(t){console.error(t),y("failure")}})()},className:"flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-accent text-custom bg-accent hover-default hover-text-default",children:(0,a.jsxs)("span",{className:"flex",children:["loading"===j&&(0,a.jsx)("svg",{className:"lucide lucide-loader-circle mx-2 animate-spin",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),c[j]]})})})]})}},3934:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(2791);const o=e=>{const{pageSize:t=10}=e||{},[s,o]=(0,r.useState)(0),[n,i]=(0,r.useState)(!1);return{currentPage:s,isAllDataFetched:n,incrementPagination:()=>{o((e=>e+1))},resetPagination:()=>{o(1),i(!1)},checkIfAllDataFetched:e=>{i(0===e.length||e.length%t!==0)}}}},6760:(e,t,s)=>{s.d(t,{Z:()=>n});s(2791);var r=s(913),o=s(184);const n=()=>(0,o.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-folder-open",children:(0,o.jsx)("path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"})}),(0,o.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,o.jsx)(r.Z,{size:"lg",type:"h2",children:"Hmm..."}),(0,o.jsx)(r.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"It looks like there is no data present."})]})]})},5709:(e,t,s)=>{s.d(t,{Z:()=>o});s(2791);var r=s(184);const o=()=>(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:"Failed tof etch"})})},2861:(e,t,s)=>{s.d(t,{Z:()=>n});s(2791);var r=s(913),o=s(184);const n=()=>(0,o.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-shield-ban",children:[(0,o.jsx)("path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}),(0,o.jsx)("path",{d:"m4.243 5.21 14.39 12.472"})]}),(0,o.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,o.jsx)(r.Z,{size:"lg",type:"h2",children:"Oops!"}),(0,o.jsx)(r.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"It looks like you're not logged in yet."})]})]})},2825:(e,t,s)=>{s.d(t,{Z:()=>n});s(2791);var r=s(2817);var o=s(184);const n=e=>{const{shareText:t="Share",shareDetails:s,messages:n}=e,{title:i,text:a,urlRoute:c}=s||{},{success:l="Link copied to clipboard!",error:d="Oops! Unable to copy the link!"}=n||{},{toast:h}=(0,r.p)();return(0,o.jsx)("div",{onClick:async()=>{const e=(()=>{const{protocol:e,host:t,pathname:s}=window.location,r=s.split("/").filter((e=>e)),o=r.length>0?"/".concat(r[0]):"";return"".concat(e,"//").concat(t).concat(o)})();try{const t=await(e=>{let{title:t,text:s,url:r}=e;return new Promise(((e,o)=>{navigator.share?navigator.share({title:t,text:s,url:r}).then((()=>{e("share")})).catch((e=>{console.error("@unable to copy to clipboard",e),o()})):navigator.clipboard.writeText(r).then((()=>{e("clipboard")})).catch((e=>{o(e),console.error("@unable to copy to clipboard",e)}))}))})({title:i,text:a,url:"".concat(e,"/#").concat(c)});"clipboard"===t&&h({heading:l,options:{position:"top-center"}}).success()}catch(t){h({heading:d,description:t.toString(),options:{position:"top-center"}}).error()}},className:"content-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md",children:(0,o.jsxs)("span",{className:"flex",children:[(0,o.jsx)("span",{className:"flex items-center mr-2",children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-share-2",children:[(0,o.jsx)("circle",{cx:"18",cy:"5",r:"3"}),(0,o.jsx)("circle",{cx:"6",cy:"12",r:"3"}),(0,o.jsx)("circle",{cx:"18",cy:"19",r:"3"}),(0,o.jsx)("line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}),(0,o.jsx)("line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"})]})}),t]})})}},6732:(e,t,s)=>{s.d(t,{Z:()=>a});s(2791);var r=s(1087),o=s(913),n=s(3719),i=s(184);const a=e=>{const{categoryName:t,categorySlug:s}=e,a=n.Z.CATEGORY_DETAIL(s);return(0,i.jsx)(r.rU,{to:a,className:"bg-custom hover-default border-2 border-custom rounded-md flex cursor-pointer px-2 py-1.5 mt-2",children:(0,i.jsxs)("div",{className:"flex items-center",children:[(0,i.jsx)("span",{className:"flex items-center mr-2",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-square-menu",children:[(0,i.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,i.jsx)("path",{d:"M7 8h10"}),(0,i.jsx)("path",{d:"M7 12h10"}),(0,i.jsx)("path",{d:"M7 16h10"})]})}),(0,i.jsx)(o.Z,{size:"xs",type:"span",textVariant:"default",className:"flex items-center",children:t})]})})}},8728:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(3630),o=(s(2791),s(184));const n=e=>{let{createdTime:t,updatedTime:s,hasEditInfo:n=!0}=e;const[i,a]=(0,r.T)(t,s);return(0,o.jsxs)("span",{children:[(0,o.jsx)("p",{className:"text-secondary pr-3 space-y-1 text-xs",children:i}),n&&!!a&&(0,o.jsxs)("p",{className:"text-secondary pr-3 space-y-1 text-xxs",children:["[Edited] ",a]})]})}},1821:(e,t,s)=>{s.d(t,{Z:()=>a});s(2791);var r=s(8811),o=s(184);const n=[{id:"none",text:"None"},{id:"recent",text:"Most Recent"},{id:"oldest",text:"Oldest"},{id:"most_liked",text:"Most Liked"},{id:"random",text:"Random"}],i={recent:{sort_by:"date",sort_order:"desc"},oldest:{sort_by:"date",sort_order:"asc"},most_liked:{sort_by:"likes",sort_order:"desc"},random:{sort_by:"random"}},a=e=>{const{onChange:t=(()=>{}),resetPagination:s=(()=>{})}=e;return(0,o.jsx)("div",{className:"flex",children:(0,o.jsx)(r.Z,{label:"Filter by",onSelect:e=>{const{id:r}=e,o=i[r];s(),t(o)},options:n})})}},8534:(e,t,s)=>{s.d(t,{Z:()=>w});var r=s(2791),o=s(1087),n=(s(2817),s(9115)),i=s(1381),a=s(913),c=s(6033),l=(s(2825),s(2206)),d=s(775),h=s(8728),u=s(3719),x=s(6732),p=s(4462),m=s(1172),g=s(184);const w=e=>{const{postItem:t}=e,{postTitle:s,postSlug:w,id:j,content:y,category:v,user:f,createdAt:k,updatedAt:N}=t,{categoryName:T,categorySlug:b,isVerified:S}=v||{},{userName:E,fullName:C,avatar:L}=f||{},[M,_]=(0,r.useState)(!1),{deletePost:Z,restorePost:F}=(0,m.Z)(),{confirmDelete:I}=(0,p.h)(),P=(0,d.rK)(E),D=(0,d.OG)(E,w),O=u.Z.POST_EDIT(w);return(0,g.jsxs)(i.Zb,{border:"another",variant:"default",rounded:"md",className:"border hover-border-highlight my-2 w-full max-h-mds ".concat(S?"":"opacity-50"," ").concat(M?"opacity-50":""),children:[(0,g.jsx)(i.Ol,{children:(0,g.jsxs)(n.Z,{justifyContent:"spaceBetween",alignItems:"none",className:"",children:[(0,g.jsx)(l.Z,{userData:f,hasFollowButton:!1}),!S&&(0,g.jsx)("span",{className:"cursor-pointer",title:"This category is not verified",children:(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-clock-alert",children:[(0,g.jsx)("path",{d:"M12 6v6l4 2"}),(0,g.jsx)("path",{d:"M16 21.16a10 10 0 1 1 5-13.516"}),(0,g.jsx)("path",{d:"M20 11.5v6"}),(0,g.jsx)("path",{d:"M20 21.5h.01"})]})}),M&&(0,g.jsx)("span",{className:"cursor-pointer",title:"This post is deleted",children:(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-trash-2",children:[(0,g.jsx)("path",{d:"M3 6h18"}),(0,g.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,g.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}),(0,g.jsx)("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),(0,g.jsx)("line",{x1:"14",x2:"14",y1:"11",y2:"17"})]})})]})}),(0,g.jsxs)(i.aY,{children:[(0,g.jsx)(o.rU,{to:D,className:"cursor-pointer group-hover",children:(0,g.jsxs)(a.Z,{type:"h1",size:"md",className:"mb-2 w-full",children:[s,(0,g.jsx)("span",{className:"text-center ml-2 invisible group-hover-item",children:(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right",children:[(0,g.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,g.jsx)("path",{d:"m10 8 4 4-4 4"})]})})]})}),(0,g.jsx)("div",{className:"flex max-w-fit text-xs",children:(0,g.jsx)(x.Z,{categoryName:T,categorySlug:b})})]}),(0,g.jsx)(i.eW,{className:"p-0",children:(0,g.jsxs)("div",{className:"flex flex-col w-full",children:[(0,g.jsx)(c.Z,{variant:"another",className:"my-2"}),(0,g.jsx)(h.Z,{createdTime:k,updatedTime:N,hasEditInfo:!1}),P?(0,g.jsxs)(r.Fragment,{children:[(0,g.jsx)(c.Z,{variant:"another",className:"my-2"}),(0,g.jsxs)("div",{className:"flex text-xs",children:[(0,g.jsx)(o.rU,{to:O,className:"cursor-pointer",children:(0,g.jsxs)("span",{className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-primary rounded-md cursor-pointer",onClick:()=>{},children:[(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-pencil-line",children:[(0,g.jsx)("path",{d:"M12 20h9"}),(0,g.jsx)("path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}),(0,g.jsx)("path",{d:"m15 5 3 3"})]}),(0,g.jsx)("span",{className:"pl-1",children:"Edit"})]})}),M?(0,g.jsxs)("span",{onClick:async()=>{try{await F(j),_(!1)}catch{console.log("Failed to restore post")}},className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-info rounded-md cursor-pointer",children:[(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-undo",children:[(0,g.jsx)("path",{d:"M3 7v6h6"}),(0,g.jsx)("path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"})]}),(0,g.jsx)("span",{className:"pl-1",children:"Undo Delete"})]}):(0,g.jsxs)("span",{onClick:async()=>{if(await I((()=>Z(j))))try{return _(!0),!0}catch{return!1}return!1},className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-destructive rounded-md cursor-pointer",children:[(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-trash",children:[(0,g.jsx)("path",{d:"M3 6h18"}),(0,g.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,g.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]}),(0,g.jsx)("span",{className:"pl-1",children:"Delete"})]})]})]}):null]})})]})}},475:(e,t,s)=>{s.d(t,{a:()=>r});const r={SET_FIELDS:"SET_FIELDS",SET_TAGS:"SET_TAGS",SET_VISIBILITY:"SET_VISIBILITY",SET_CONTENT:"SET_CONTENT",SET_TITLE:"SET_TITLE",SET_CATEGORY:"SET_CATEGORY",RESET_FORM:"RESET_FORM"}},2144:(e,t,s)=>{s.d(t,{Qd:()=>o,XD:()=>n,ZM:()=>i});var r=s(184);const o={private:"private",public:"public"},n=[{id:o.private,label:"Private",modeElement:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-eye-off",children:[(0,r.jsx)("path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}),(0,r.jsx)("path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}),(0,r.jsx)("path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}),(0,r.jsx)("path",{d:"m2 2 20 20"})]})},{id:o.public,label:"Public",modeElement:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-eye",children:[(0,r.jsx)("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),(0,r.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}],i="My First Post"},1172:(e,t,s)=>{s.d(t,{Z:()=>m});var r=s(2791),o=s(1087),n=s(7689),i=s(7128),a=s(7323),c=s(2144),l=s(475);const d={postTags:[],currentVisibilityMode:c.Qd.public,postTitle:c.ZM,postCategory:null,markdownContent:""},h=(e,t)=>{let{type:s,payload:r}=t;switch(s){case l.a.SET_FIELDS:return{...e,...r};case l.a.SET_TAGS:return{...e,postTags:r};case l.a.SET_VISIBILITY:return{...e,currentVisibilityMode:r};case l.a.SET_CONTENT:return{...e,markdownContent:r};case l.a.SET_TITLE:return{...e,postTitle:r};case l.a.SET_CATEGORY:return{...e,postCategory:r};case l.a.RESET_FORM:return d;default:return e}};s(4921);var u=s(2817),x=s(775),p=s(7155);const m=()=>{const[e,t]=(0,o.lr)(),{id:s}=(0,n.UO)(),{toast:c}=(0,u.p)(),{logout:m}=(0,p.Z)(),[g,w]=(0,r.useReducer)(h,{...d}),[j,y]=(0,r.useState)("none"),v=(0,r.useCallback)((async e=>{try{const t=await i.TJ(e);return c({heading:"Post created successfully!",description:"Your post has been successfully published!",options:{position:"top-right"}}).success(),t}catch(t){const{message:e,statusCode:s}=t;return 401===s&&m(),c({heading:"Oops! There was an error creating your post.",description:e,options:{position:"top-right"}}).error(),!1}}),[]),f=(0,r.useCallback)((async(e,t)=>{try{const s=await i.CP(e,t);return c({heading:"Post updated successfully!",description:"Your post has been successfully updated!",options:{position:"top-right"}}).success(),s}catch(s){const{message:e}=s;return c({heading:"Oops! There was an error updating your post.",description:e,options:{position:"top-right"}}).error(),!1}}),[]),k=(0,r.useCallback)((async e=>{try{const t=await i.fR(e);return c({heading:"Post deleted successfully!",description:"Your post has been successfully deleted!",options:{position:"top-right"}}).success(),t}catch(t){const{message:e,statusCode:s}=t;throw 401===s&&m(),c({heading:"Oops! There was an error deleting your post.",description:e,options:{position:"top-right"}}).error(),t}}),[]),N=(0,r.useCallback)((async e=>{try{const t=await i.ts(e);return c({heading:"Post restored successfully!",description:"Your post has been successfully restored!",options:{position:"top-right"}}).success(),t}catch(t){const{message:e}=t;throw c({heading:"Oops! There was an error restoring your post.",description:e,options:{position:"top-right"}}).error(),t}}),[]);return(0,r.useEffect)((()=>{}),[s]),{fetchCategoriesData:async e=>{try{y("loading");const e=await a.hk();return y("success"),setTimeout((()=>{y("none")}),1e3),e}catch(t){y("failure")}},fetchMyPostsData:async e=>{try{y("loading");const t=await i.$n(e);return 0===t.length?y("empty"):(y("success"),setTimeout((()=>{y("none")}),1e3)),t}catch(t){const{statusCode:e}=t;throw 401===e&&m(),y("failure"),t}},fetchUsersPostItem:async()=>{const{userName:e}=(0,x.bV)();try{y("loading");const t=await i.zQ({userName:e,postSlug:s}),{id:r,category:o,content:n,postTitle:a,visibility:c,user:d}=t||{},{categoryId:h,categoryName:u,categorySlug:x}=o||{},{fullName:p,avatar:m}=d||{},g={postId:r,markdownContent:n,postTitle:a,currentVisibilityMode:c,postCategory:{id:h,categoryName:u,categorySlug:x,value:x}};w({type:l.a.SET_FIELDS,payload:g}),y("success")}catch(t){y("failure")}},savePost:async()=>{const[e,t]=(e=>{const{postTags:t,currentVisibilityMode:s,postCategory:r,postTitle:o,markdownContent:n}=e;return r?s?o?n?[!1,""]:[!0,"Post content is missing"]:[!0,"Post Title is missing"]:[!0,"Post Visibility Mode is missing"]:[!0,"Category is missing"]})(g);if(e)return void c({heading:"Oops! Please verify the changes.",description:t,options:{position:"top-right"}}).error();const{postId:r,postTags:o,currentVisibilityMode:n,postCategory:i,postTitle:a,markdownContent:l}=g,d={category:i.id,content:l,post_title:a,visibility:n};return s?f(d,r):v(d)},deletePost:k,restorePost:N,postFormState:g,postFormDispatcher:w,fetchStatus:j}}},1176:(e,t,s)=>{s.d(t,{Z:()=>a});s(2791);var r=s(1087),o=s(2014),n=s(3719),i=s(184);const a=e=>{const{userData:t,hasFollowers:s=!1}=e,{fullName:a,userName:c,avatar:l,followers:d=0}=t||{},h=n.Z.USER_DETAIL(c);return(0,i.jsx)(r.rU,{to:h,className:"cursor-pointer group-hover",children:(0,i.jsxs)("div",{className:"flex items-center mb-2",children:[(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)(o.Z,{name:a,src:l},l)}),(0,i.jsx)("div",{className:"flex flex-col",children:(0,i.jsx)("div",{className:"flex items-center",children:(0,i.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("h3",{className:"text-sm text-default px-3",children:a}),(0,i.jsx)("span",{className:"text-center ml-1 mr-4 invisible group-hover-item",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right",children:[(0,i.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,i.jsx)("path",{d:"m10 8 4 4-4 4"})]})})]}),s&&(0,i.jsxs)("p",{className:"text-secondary px-3 space-y-1 text-xs",children:[d," followers"]})]})})})]})})}},2206:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(2791),o=s(1176),n=s(4405),i=s(775),a=s(184);const c=e=>{const{userData:t,hasFollowers:s=!1,hasFollowButton:c=!0}=e,[l,d]=(0,r.useState)(t),{userName:h,userId:u,isFollowing:x}=l||{},p=(0,i.rK)(h);return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(o.Z,{userData:l,hasFollowers:s}),c&&!p&&(0,a.jsx)(n.Z,{userName:h,userId:u,isFollowing:x,onFollow:async()=>{d((e=>({...e,followers:Number(e.followers)+1,isFollowing:!e.isFollowing})))},onUnFollow:async()=>{d((e=>({...e,followers:Number(e.followers)-1,isFollowing:!e.isFollowing})))}})]})}}}]);
//# sourceMappingURL=994.c026bb44.chunk.js.map