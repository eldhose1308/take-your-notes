"use strict";(self.webpackChunktake_your_notes_v1=self.webpackChunktake_your_notes_v1||[]).push([[449],{7779:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(2791),r=s(184);const o={none:"Show More",loading:"Fetching data",failure:"Failed to fetch",success:"Show More"},n=e=>{const{fetchDataMethod:t,initialFetchStatus:s="none",pageSize:n=10,isEmpty:c=!1,currentPage:i=1,isAllDataFetched:l=!1,initialData:d=[],children:h}=e,[u,x]=(0,a.useState)(s);(0,a.useEffect)((()=>{x(s)}),[s]);return(0,r.jsxs)(a.Fragment,{children:[h,!l&&!c&&(0,r.jsx)("div",{className:"flex w-full justify-center text-sm my-4 mx-2",children:(0,r.jsx)("span",{onClick:()=>{(async e=>{x("loading");try{await t(),x("success"),setTimeout((()=>{x("none")}),1e3)}catch(s){console.error(s),x("failure")}})()},className:"flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-accent text-custom bg-accent hover-default hover-text-default",children:(0,r.jsxs)("span",{className:"flex",children:["loading"===u&&(0,r.jsx)("svg",{className:"lucide lucide-loader-circle mx-2 animate-spin",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),o[u]]})})})]})}},3934:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(2791);const r=e=>{const{pageSize:t=10}=e||{},[s,r]=(0,a.useState)(0),[o,n]=(0,a.useState)(!1);return{currentPage:s,isAllDataFetched:o,incrementPagination:()=>{r((e=>e+1))},resetPagination:()=>{r(1),n(!1)},checkIfAllDataFetched:e=>{n(0===e.length||e.length%t!==0)}}}},2825:(e,t,s)=>{s.d(t,{Z:()=>o});s(2791);var a=s(2817);var r=s(184);const o=e=>{const{shareText:t="Share",shareDetails:s,messages:o}=e,{title:n,text:c,urlRoute:i}=s||{},{success:l="Link copied to clipboard!",error:d="Oops! Unable to copy the link!"}=o||{},{toast:h}=(0,a.p)();return(0,r.jsx)("div",{onClick:async()=>{const e=(()=>{const{protocol:e,host:t,pathname:s}=window.location,a=s.split("/").filter((e=>e)),r=a.length>0?"/".concat(a[0]):"";return"".concat(e,"//").concat(t).concat(r)})();try{const t=await(e=>{let{title:t,text:s,url:a}=e;return new Promise(((e,r)=>{navigator.share?navigator.share({title:t,text:s,url:a}).then((()=>{e("share")})).catch((e=>{console.error("@unable to copy to clipboard",e),r()})):navigator.clipboard.writeText(a).then((()=>{e("clipboard")})).catch((e=>{r(e),console.error("@unable to copy to clipboard",e)}))}))})({title:n,text:c,url:"".concat(e,"/#").concat(i)});"clipboard"===t&&h({heading:l,options:{position:"top-center"}}).success()}catch(t){h({heading:d,description:t.toString(),options:{position:"top-center"}}).error()}},className:"content-center border border-another text-accent hover-accent hover-text-custom text-xs my-2 mx-1 p-2 px-2 cursor-pointer rounded-md",children:(0,r.jsxs)("span",{className:"flex",children:[(0,r.jsx)("span",{className:"flex items-center mr-2",children:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-share-2",children:[(0,r.jsx)("circle",{cx:"18",cy:"5",r:"3"}),(0,r.jsx)("circle",{cx:"6",cy:"12",r:"3"}),(0,r.jsx)("circle",{cx:"18",cy:"19",r:"3"}),(0,r.jsx)("line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49"}),(0,r.jsx)("line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49"})]})}),t]})})}},6732:(e,t,s)=>{s.d(t,{Z:()=>c});s(2791);var a=s(1087),r=s(913),o=s(3719),n=s(184);const c=e=>{const{categoryName:t,categorySlug:s}=e,c=o.Z.CATEGORY_DETAIL(s);return(0,n.jsx)(a.rU,{to:c,className:"bg-custom hover-another border-2 border-custom rounded-md flex cursor-pointer px-2 py-1.5 mt-2",children:(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)("span",{className:"flex items-center mr-2",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-square-menu",children:[(0,n.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,n.jsx)("path",{d:"M7 8h10"}),(0,n.jsx)("path",{d:"M7 12h10"}),(0,n.jsx)("path",{d:"M7 16h10"})]})}),(0,n.jsx)(r.Z,{size:"xs",type:"span",textVariant:"default",className:"flex items-center",children:t})]})})}},8728:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(3630),r=(s(2791),s(184));const o=e=>{let{createdTime:t,updatedTime:s,hasEditInfo:o=!0}=e;const[n,c]=(0,a.T)(t,s);return(0,r.jsxs)("span",{children:[(0,r.jsx)("p",{className:"text-secondary pr-3 space-y-1 text-xs",children:n}),o&&!!c&&(0,r.jsxs)("p",{className:"text-secondary pr-3 space-y-1 text-xxs",children:["[Edited] ",c]})]})}},5915:(e,t,s)=>{s.d(t,{Z:()=>p});var a=s(2791),r=s(3097),o=s(1686),n=s(6215),c=s(1381),i=s(913),l=s(1039),d=s(184);const h={none:"Create",loading:"Creating",failure:"Failed",completed:"Created"},u={none:"Update",loading:"Updating",failure:"Failed",completed:"Updated"},x=e=>{const{categoryModalData:t,onClose:s=(()=>{})}=e,{status:r,data:o={},onClick:x}=t||{},{id:m,categoryName:p=""}=o,g=m?u:h,y="".concat(m?"Update Category":"Create Category"),j="Are you sure you want to ".concat(m?"update the category":"create a new category","?"),[w,v]=(0,a.useState)(p),[f,N]=(0,a.useState)("none"),[C,k]=(0,a.useState)(""),S=()=>{s(),v("")};return(0,a.useEffect)((()=>{v(p)}),[p]),r?(0,d.jsx)(n.Z,{isShown:!0,hasOverlay:!0,children:(0,d.jsxs)(c.Zb,{variant:"ghost",rounded:"lg",children:[(0,d.jsxs)(c.Ol,{children:[(0,d.jsx)(i.Z,{size:"lg",children:y}),(0,d.jsx)(i.Z,{size:"xs",textVariant:"default",children:j}),m?(0,d.jsx)(i.Z,{size:"xs",textVariant:"bold",children:p}):null]}),(0,d.jsx)(c.aY,{children:(0,d.jsx)(l.zC,{type:"text",labelName:"New category name",placeholder:"Enter category name",value:w,onChange:v,size:"sm",isFocused:!0,validationMsg:{type:"error",messages:[C]}})}),(0,d.jsxs)(c.eW,{className:"p-0 flex justify-between",children:[(0,d.jsx)(l.zx,{size:"xs",width:"none",variant:"custom",onClick:()=>{S()},children:"Cancel"}),(0,d.jsx)(l.zx,{size:"xs",width:"none",variant:"accent",onClick:async()=>{const e=(e=>e?(k(""),!0):(k("Please enter a category name"),!1))(w);if(e)if(x){N("loading");try{await x(w,m),N("completed"),setTimeout((()=>{S()}),1e3)}catch(t){N("failure"),k(t)}finally{setTimeout((()=>{N("none")}),1e3)}}else S()},buttonStatus:f,children:g[f]})]})]})}):null};var m=s(5866);const p=e=>{let{category:t,categoryList_arg:s,onChange:n=(()=>{}),hasAddOption:c=!0}=e;const{savePostCategory:i,fetchPostCategories:l,fetchStatus:h,isAllDataFetched:u,categories:p}=(0,o.Z)(),[g,y]=(0,a.useState)({filters:"explore",limit:30,page:1}),[j,w]=(0,a.useState)(t),[v,f]=(0,a.useState)([]),{id:N,categoryName:C="Select a category"}=(0,a.useMemo)((()=>j||{}),[j]),[k,S]=(0,a.useState)(null),T=(0,m.Z)(),b=(e,t)=>{const{categorySlug:s=""}=t||{};w(t),n(e,t,s)},E=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t={...g,...e},s=await l(t);f((e=>[...e,...s])),y((e=>({...e,page:e.page+1})))},Z=async e=>{const t=await i(e);n(t.id,t)};return(0,a.useEffect)((()=>{E()}),[]),(0,d.jsxs)(a.Fragment,{children:[(0,d.jsxs)(r.ZP,{children:[(0,d.jsx)(r.f_,{children:(0,d.jsxs)("span",{className:"flex mx-1 items-center text-secondary cursor-pointer",children:[(0,d.jsx)("span",{className:"",children:C}),(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor",children:(0,d.jsx)("path",{d:"M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z"})})]})}),(0,d.jsx)(r.Fo,{heading:"Select a category",options:v,onChange:b,isFetching:"loading"===h,isAllDataFetched:u,onNewOptions:E,onSearch:T((async e=>{const t={...g,search:e,page:1},s=await l(t);f(s),y((e=>({...e,page:2})))}),500),renderAdd:c?e=>{if(e)return(0,d.jsxs)("span",{className:"block w-full",onClick:()=>{var t;S({data:{categoryName:"string"===typeof(t=e)?t:""},status:!0,onClick:Z})},children:['Create new "',e,'"']})}:()=>{},selectedValue:N,idKey:"id",labelKey:"categoryName"}),!!N&&(0,d.jsx)("span",{className:"flex items-center text-bold rounded-md cursor-pointer px-1 hover-text-destructive",onClick:()=>b(""),children:(0,d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-delete",children:[(0,d.jsx)("path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"}),(0,d.jsx)("line",{x1:"18",x2:"12",y1:"9",y2:"15"}),(0,d.jsx)("line",{x1:"12",x2:"18",y1:"9",y2:"15"})]})})]},"".concat(N,"_").concat(C)),!!k&&(0,d.jsx)(x,{onClose:()=>{S(null)},categoryModalData:k})]})}},1821:(e,t,s)=>{s.d(t,{Z:()=>c});s(2791);var a=s(8811),r=s(184);const o=[{id:"none",text:"None"},{id:"recent",text:"Most Recent"},{id:"oldest",text:"Oldest"},{id:"most_liked",text:"Most Liked"},{id:"random",text:"Random"}],n={recent:{sort_by:"date",sort_order:"desc"},oldest:{sort_by:"date",sort_order:"asc"},most_liked:{sort_by:"likes",sort_order:"desc"},random:{sort_by:"random"}},c=e=>{const{onChange:t=(()=>{}),resetPagination:s=(()=>{})}=e;return(0,r.jsx)("div",{className:"flex",children:(0,r.jsx)(a.Z,{label:"Filter by",onSelect:e=>{const{id:a}=e,r=n[a];s(),t(r)},options:o})})}},6114:(e,t,s)=>{s.d(t,{Z:()=>n});s(2791);var a=s(6119),r=s(2144),o=s(184);const n=e=>{let{currentMode:t,onChange:s}=e;return(0,o.jsx)(a.Z,{modes:r.XD,onChange:s,selectedValue:t,renderLabel:!0})}},8534:(e,t,s)=>{s.d(t,{Z:()=>p});var a=s(2791),r=s(1087),o=(s(2817),s(9115)),n=s(1381),c=s(913),i=s(6033),l=(s(2825),s(2206)),d=s(775),h=s(8728),u=s(3719),x=s(6732),m=s(184);const p=e=>{const{postItem:t}=e,{postTitle:s,postSlug:p,id:g,content:y,category:j,user:w,createdAt:v,updatedAt:f}=t,{categoryName:N,categorySlug:C}=j||{},{userName:k,fullName:S,avatar:T}=w||{},b=(0,d.rK)(k),E=(0,d.OG)(k,p),Z=u.Z.POST_EDIT(p);return(0,m.jsxs)(n.Zb,{border:"another",variant:"default",rounded:"md",className:"border hover-border-highlight my-2 w-full max-h-mds",children:[(0,m.jsx)(n.Ol,{children:(0,m.jsx)(o.Z,{justifyContent:"spaceBetween",alignItems:"none",className:"",children:(0,m.jsx)(l.Z,{userData:w,hasFollowButton:!1})})}),(0,m.jsxs)(n.aY,{children:[(0,m.jsx)(r.rU,{to:E,className:"cursor-pointer group-hover",children:(0,m.jsxs)(c.Z,{type:"h1",size:"md",className:"mb-2 w-full",children:[s,(0,m.jsx)("span",{className:"text-center ml-2 invisible group-hover-item",children:(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right",children:[(0,m.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,m.jsx)("path",{d:"m10 8 4 4-4 4"})]})})]})}),(0,m.jsx)("div",{className:"flex max-w-fit text-xs",children:(0,m.jsx)(x.Z,{categoryName:N,categorySlug:C})})]}),(0,m.jsx)(n.eW,{className:"p-0",children:(0,m.jsxs)("div",{className:"flex flex-col w-full",children:[(0,m.jsx)(i.Z,{variant:"another",className:"my-2"}),(0,m.jsx)(h.Z,{createdTime:v,updatedTime:f,hasEditInfo:!1}),b?(0,m.jsxs)(a.Fragment,{children:[(0,m.jsx)(i.Z,{variant:"another",className:"my-2"}),(0,m.jsxs)("div",{className:"flex text-xs",children:[(0,m.jsx)(r.rU,{to:Z,className:"cursor-pointer",children:(0,m.jsxs)("span",{className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-primary rounded-md cursor-pointer",onClick:()=>{},children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-pencil-line",children:[(0,m.jsx)("path",{d:"M12 20h9"}),(0,m.jsx)("path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}),(0,m.jsx)("path",{d:"m15 5 3 3"})]}),(0,m.jsx)("span",{className:"pl-1",children:"Edit"})]})}),(0,m.jsxs)("span",{className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-destructive rounded-md cursor-pointer",onClick:()=>{},children:[(0,m.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-trash",children:[(0,m.jsx)("path",{d:"M3 6h18"}),(0,m.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,m.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]}),(0,m.jsx)("span",{className:"pl-1",children:"Delete"})]})]})]}):null]})})]})}},475:(e,t,s)=>{s.d(t,{a:()=>a});const a={SET_FIELDS:"SET_FIELDS",SET_TAGS:"SET_TAGS",SET_VISIBILITY:"SET_VISIBILITY",SET_CONTENT:"SET_CONTENT",SET_TITLE:"SET_TITLE",SET_CATEGORY:"SET_CATEGORY",RESET_FORM:"RESET_FORM"}},2144:(e,t,s)=>{s.d(t,{Qd:()=>r,XD:()=>o,ZM:()=>n});var a=s(184);const r={private:"private",public:"public"},o=[{id:r.private,label:"Private",modeElement:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-eye-off",children:[(0,a.jsx)("path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}),(0,a.jsx)("path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}),(0,a.jsx)("path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}),(0,a.jsx)("path",{d:"m2 2 20 20"})]})},{id:r.public,label:"Public",modeElement:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-eye",children:[(0,a.jsx)("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),(0,a.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}],n="My First Post"},1172:(e,t,s)=>{s.d(t,{Z:()=>p});var a=s(2791),r=s(1087),o=s(7689),n=s(7128),c=s(7323),i=s(2144),l=s(475);const d={postTags:[],currentVisibilityMode:i.Qd.public,postTitle:i.ZM,postCategory:null,markdownContent:""},h=(e,t)=>{let{type:s,payload:a}=t;switch(s){case l.a.SET_FIELDS:return{...e,...a};case l.a.SET_TAGS:return{...e,postTags:a};case l.a.SET_VISIBILITY:return{...e,currentVisibilityMode:a};case l.a.SET_CONTENT:return{...e,markdownContent:a};case l.a.SET_TITLE:return{...e,postTitle:a};case l.a.SET_CATEGORY:return{...e,postCategory:a};case l.a.RESET_FORM:return d;default:return e}};s(4921);var u=s(2817),x=s(775),m=s(7155);const p=()=>{const[e,t]=(0,r.lr)(),{id:s}=(0,o.UO)(),{toast:i}=(0,u.p)(),{logout:p}=(0,m.Z)(),[g,y]=(0,a.useReducer)(h,{...d}),[j,w]=(0,a.useState)("none"),v=(0,a.useCallback)((async e=>{try{const t=await n.TJ(e);return i({heading:"Post created successfully!",description:"Your post has been successfully published!",options:{position:"top-right"}}).success(),t}catch(t){const{message:e,statusCode:s}=t;return 401===s&&p(),i({heading:"Oops! There was an error creating your post.",description:e,options:{position:"top-right"}}).error(),!1}}),[]),f=(0,a.useCallback)((async(e,t)=>{try{const s=await n.CP(e,t);return i({heading:"Post updated successfully!",description:"Your post has been successfully updated!",options:{position:"top-right"}}).success(),s}catch(s){const{message:e}=s;return i({heading:"Oops! There was an error updating your post.",description:e,options:{position:"top-right"}}).error(),!1}}),[]),N=(0,a.useCallback)((async e=>{}),[]);return(0,a.useEffect)((()=>{if(!s)return;(async()=>{const{userName:e}=(0,x.bV)();try{w("loading");const t=await n.zQ({userName:e,postSlug:s}),{id:a,category:r,content:o,postTitle:c,user:i}=t||{},{categoryId:d,categoryName:h}=r||{},{fullName:u,avatar:x}=i||{},m={postId:a,markdownContent:o,postTitle:c,postCategory:{id:d,categoryName:h,value:d}};y({type:l.a.SET_FIELDS,payload:m}),w("success")}catch(t){w("failure")}})()}),[s]),{fetchCategoriesData:async e=>{try{w("loading");const e=await c.hk();return w("success"),setTimeout((()=>{w("none")}),1e3),e}catch(t){w("failure")}},fetchMyPostsData:async e=>{try{w("loading");const t=await n.$n(e);return 0===t.length?w("empty"):(w("success"),setTimeout((()=>{w("none")}),1e3)),t}catch(t){const{statusCode:e}=t;throw 401===e&&p(),w("failure"),t}},savePost:async()=>{const[e,t]=(e=>{const{postTags:t,currentVisibilityMode:s,postCategory:a,postTitle:r,markdownContent:o}=e;return a?s?r?o?[!1,""]:[!0,"Post content is missing"]:[!0,"Post Title is missing"]:[!0,"Post Visibility Mode is missing"]:[!0,"Category is missing"]})(g);if(e)return void i({heading:"Oops! Please verify the changes.",description:t,options:{position:"top-right"}}).error();const{postId:a,postTags:r,currentVisibilityMode:o,postCategory:n,postTitle:c,markdownContent:l}=g,d={category:n.id,content:l,post_title:c,visibility:o};return s?f(d,a):v(d)},deletePost:N,postFormState:g,postFormDispatcher:y,fetchStatus:j}}},1686:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(2791),r=s(7323),o=s(2817);const n=()=>{const[e,t]=(0,a.useState)([]),[s,n]=(0,a.useState)([]),[c,i]=(0,a.useState)("none"),[l,d]=(0,a.useState)(!1),{toast:h}=(0,o.p)(),u=(e,t)=>{t&&d(0===e.length||e.length%t!==0)};return{categoryData:s,isAllDataFetched:l,categories:e,fetchStatus:c,fetchPostCategories:async e=>{const{limit:t}=e||{};try{i("loading");const s=await r.hk(e);return u(s,t),0===s.length?i("empty"):(i("success"),setTimeout((()=>{}),1e3)),s}catch(s){const{statusCode:e}=s||{};i(401===e?"unauthorised":"failure")}},fetchPostCategoryByName:async e=>{try{i("loading");const t=await r.wG(e);return n(t),i("success"),t}catch(t){i("failure")}},savePostCategory:async e=>(async e=>{try{const t=await r.t4(e);return h({heading:"Post Category created successfully!",description:"Your post Category is now in review, but will be approved by admin soon!",options:{position:"top-right"}}).success(),t}catch(t){const{message:e="Something went wrong"}=t||{};throw e}})({category_name:e})}}},4855:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(7689);const r=()=>{const e=(0,a.s0)();return{navigateToList:()=>{e("/my/posts")},navigateToCreate:()=>{e("create")},navigateToEdit:t=>{e("edit/"+t)}}}},1176:(e,t,s)=>{s.d(t,{Z:()=>c});s(2791);var a=s(1087),r=s(2014),o=s(3719),n=s(184);const c=e=>{const{userData:t,hasFollowers:s=!1}=e,{fullName:c,userName:i,avatar:l,followers:d=0}=t||{},h=o.Z.USER_DETAIL(i);return(0,n.jsx)(a.rU,{to:h,className:"cursor-pointer group-hover",children:(0,n.jsxs)("div",{className:"flex items-center mb-2",children:[(0,n.jsx)("div",{className:"flex",children:(0,n.jsx)(r.Z,{name:c,src:l},l)}),(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("h3",{className:"text-sm text-default px-3",children:c}),(0,n.jsx)("span",{className:"text-center ml-1 mr-4 invisible group-hover-item",children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right",children:[(0,n.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,n.jsx)("path",{d:"m10 8 4 4-4 4"})]})})]}),s&&(0,n.jsxs)("p",{className:"text-secondary px-3 space-y-1 text-xs",children:[d," followers"]})]})})})]})})}},2206:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(2791),r=s(1176),o=s(4405),n=s(775),c=s(184);const i=e=>{const{userData:t,hasFollowers:s=!1,hasFollowButton:i=!0}=e,[l,d]=(0,a.useState)(t),{userName:h,userId:u,isFollowing:x}=l||{},m=(0,n.rK)(h);return(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)(r.Z,{userData:l,hasFollowers:s}),i&&!m&&(0,c.jsx)(o.Z,{userName:h,userId:u,isFollowing:x,onFollow:async()=>{d((e=>({...e,followers:Number(e.followers)+1,isFollowing:!e.isFollowing})))},onUnFollow:async()=>{d((e=>({...e,followers:Number(e.followers)-1,isFollowing:!e.isFollowing})))}})]})}},6449:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var a=s(2791),r=s(913),o=s(8534),n=s(6114),c=s(2144),i=s(184);const l=e=>{let{onCreate:t=(()=>{})}=e;return(0,i.jsx)("div",{onClick:t,className:"bg-accent border border-accent hover-text-default hover-border-accent hover-transparent text-custom text-sm p-1 px-2 cursor-pointer rounded-md",children:(0,i.jsxs)("span",{className:"flex",children:["Start Writing",(0,i.jsx)("span",{className:"flex items-center ml-2",children:(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-plus",children:[(0,i.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,i.jsx)("path",{d:"M8 12h8"}),(0,i.jsx)("path",{d:"M12 8v8"})]})})]})})};var d=s(5915),h=s(4855),u=s(1172),x=s(3934),m=s(7779),p=s(8788),g=s(1821);const y=e=>{const{children:t}=e;return(0,i.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-folder-open",children:(0,i.jsx)("path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"})}),(0,i.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,i.jsx)(r.Z,{size:"lg",type:"h2",children:"Hmm..."}),(0,i.jsx)(r.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"Nothing Here... Yet."}),(0,i.jsx)(r.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"Everyone starts somewhere. You should post something !!"})]}),(0,i.jsx)("div",{className:"flex flex-col items-center my-4 text-center",children:t})]})},j=e=>{const{navigateToCreate:t,navigateToEdit:s}=(0,h.Z)(),{currentPage:j,isAllDataFetched:w,incrementPagination:v,checkIfAllDataFetched:f,resetPagination:N}=(0,x.Z)({pageSize:30}),{fetchStatus:C,fetchMyPostsData:k}=(0,u.Z)(),[S,T]=(0,a.useState)({visibility:"public"}),[b,E]=(0,a.useState)([]),{hasFollowButton:Z=!0,onEdit:F}=e,[_,L]=(0,a.useState)(c.Qd.public),M=async e=>{const t={...S,...e};T(t),E([]),N();const s={page:1,limit:30,...t};try{const e=await k(s);f(e),E(e)}catch(a){console.log(a)}},D=async()=>{const e={page:j+1,limit:30,...S};try{const t=await k(e);return E((e=>[...e,...t])),v(),f(t),t}catch(t){console.log(t)}};(0,a.useEffect)((()=>{D()}),[]);const I=()=>{t()};return(0,i.jsx)(a.Fragment,{children:(0,i.jsxs)("div",{className:"text-default m-5",children:[(0,i.jsx)("div",{className:"flex",children:(0,i.jsxs)("div",{className:"flex justify-between w-full",children:[(0,i.jsxs)("div",{className:"flex flex-col mx-2 my-2",children:[(0,i.jsx)(r.Z,{size:"lg",type:"h2",children:"Your Posts"}),(0,i.jsx)(r.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"List of all the posts published by you"})]}),(0,i.jsx)("div",{className:"flex flex-col my-2",children:(0,i.jsx)(l,{onCreate:I})})]})}),(0,i.jsx)("div",{className:"flex",children:(0,i.jsxs)("div",{className:"flex justify-between w-full",children:[(0,i.jsxs)("div",{className:"flex my-2",children:[(0,i.jsx)(g.Z,{onChange:M}),(0,i.jsx)("div",{className:"content-center",children:(0,i.jsx)(d.Z,{onChange:(e,t,s)=>{M({category:s})},hasAddOption:!1})})]}),(0,i.jsx)("div",{className:"m-2",children:(0,i.jsx)("div",{className:"content-center mx-2",children:(0,i.jsx)(n.Z,{onChange:e=>{L(e),M({visibility:e})},currentMode:_})})})]})}),(0,i.jsx)(m.Z,{initialFetchStatus:C,isEmpty:"empty"===C,currentPage:j,isAllDataFetched:w,fetchDataMethod:D,children:"empty"!==C?(0,i.jsx)("div",{className:"flex content-start w-full",children:(0,i.jsx)(a.Fragment,{children:b.map((e=>(0,i.jsx)(o.Z,{postItem:e,onEdit:s,hasFollowButton:Z},e.id)))})}):(0,i.jsx)(y,{children:(0,i.jsx)(l,{onCreate:I})})},"posts_".concat((0,p.B)(S)))]})})}}}]);
//# sourceMappingURL=449.4904c126.chunk.js.map