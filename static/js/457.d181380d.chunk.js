"use strict";(self.webpackChunktake_your_notes_v1=self.webpackChunktake_your_notes_v1||[]).push([[457],{792:(e,t,s)=>{s.d(t,{Z:()=>g});var a=s(2791),o=s(6215),n=s(1381),r=s(913),i=s(1039),c=(s(8189),s(7323)),l=s(1685),d=s(184);const u={none:"Create",loading:"Creating",failure:"Failed",completed:"Created"},h={none:"Update",loading:"Updating",failure:"Failed",completed:"Updated"},g=e=>{const{categoryModalData:t,onClose:s=(()=>{})}=e,{status:g,data:p={},onClick:y}=t||{},{id:m,categoryName:x=""}=p,w=m?h:u,C="".concat(m?"Update Category":"Create Category"),f="Are you sure you want to ".concat(m?"update the category":"create a new category","?"),[v,T]=(0,a.useState)([]),[j,S]=(0,a.useState)([]),[k,E]=(0,a.useState)(x),[N,b]=(0,a.useState)("none"),[_,M]=(0,a.useState)(""),Z=()=>{s(),E("")};return(0,a.useEffect)((()=>{E(x)}),[x]),(0,a.useEffect)((()=>{(async()=>{try{const e=await c.zg();S(e)}catch(e){console.log(e)}})()}),[]),g?(0,d.jsx)(o.Z,{isShown:!0,hasOverlay:!0,size:"lg",children:(0,d.jsxs)(n.Zb,{variant:"ghost",rounded:"lg",children:[(0,d.jsxs)(n.Ol,{children:[(0,d.jsx)(r.Z,{size:"lg",children:C}),(0,d.jsx)(r.Z,{size:"xs",textVariant:"default",children:f}),m?(0,d.jsx)(r.Z,{size:"xs",textVariant:"bold",children:x}):null]}),(0,d.jsxs)(n.aY,{children:[(0,d.jsx)(i.zC,{type:"text",labelName:"New category name",placeholder:"Enter category name",value:k,onChange:E,size:"sm",isFocused:!0,validationMsg:{type:"error",messages:[_]}}),(0,d.jsx)("div",{className:"my-3",children:(0,d.jsx)(l.Z,{mainCategories:v,onChange:e=>{T(e)},suggestions:j})})]}),(0,d.jsxs)(n.eW,{className:"p-0 flex justify-between",children:[(0,d.jsx)(i.zx,{size:"xs",width:"none",variant:"custom",onClick:()=>{Z()},children:"Cancel"}),(0,d.jsx)(i.zx,{size:"xs",width:"none",variant:"accent",onClick:async()=>{const e=v.map((e=>e.id)),t=(e=>e?(M(""),!0):(M("Please enter a category name"),!1))(k),s={category_name:k,main_category_ids:e};if(t)if(y){b("loading");try{await y(s,m),b("completed"),setTimeout((()=>{Z()}),1e3)}catch(a){b("failure"),M(a)}finally{setTimeout((()=>{b("none")}),1e3)}}else Z()},buttonStatus:N,children:w[N]})]})]})}):null}},1685:(e,t,s)=>{s.d(t,{Z:()=>r});var a=s(2791),o=s(4487),n=s(184);const r=e=>{const{mainCategories:t=[],suggestions:s=[],onChange:r=(()=>{}),onCreate:i=(()=>{}),className:c,...l}=e,[d,u]=(0,a.useState)(""),h=e=>t.slice(0,e).concat(t.slice(e+1));return(0,n.jsx)(a.Fragment,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"flex max-w-mds justify-ends text-default  ".concat(c),children:[t.map(((e,t)=>{const{mainCategoryName:s}=e;return(0,n.jsxs)("div",{className:"flex bg-custom mx-1 my-1 text-xs rounded-md",children:[(0,n.jsxs)("span",{className:"mx-1 px-2 py-1",children:["#",s]}),(0,n.jsx)("span",{className:"flex items-center text-bold rounded-md cursor-pointer px-1 hover-destructive hover-text-custom",onClick:()=>(e=>{const t=h(e);r(t)})(t),children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x",children:[(0,n.jsx)("path",{d:"M18 6 6 18"}),(0,n.jsx)("path",{d:"m6 6 12 12"})]})})]},t)})),t.length>2&&(0,n.jsx)("div",{className:"flex mx-1 my-1 text-xs rounded-md",children:(0,n.jsx)("span",{className:"flex items-center text-bold rounded-md cursor-pointer px-1 hover-destructive hover-text-custom",onClick:()=>{r([])},children:(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-delete",children:[(0,n.jsx)("path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"}),(0,n.jsx)("line",{x1:"18",x2:"12",y1:"9",y2:"15"}),(0,n.jsx)("line",{x1:"12",x2:"18",y1:"9",y2:"15"})]})})})]}),(0,n.jsx)("div",{className:"flex justify-ends",children:(0,n.jsx)("div",{className:"min-w-md",children:(0,n.jsx)(o.Z,{placeholder:"Type and press Enter",...l,onKeyDown:(e,s)=>{if("Enter"===s.key){if(!e)return;u(""),i(e)}if("Backspace"===s.key&&0===e.length){const e=t.length,s=h(e-1);r(s)}},onChange:(e,t)=>{u(e)},onSuggestionClick:(e,t)=>{r(t)},onCreate:(e,t)=>{i(e),u("")},value:d,selectedOptions:t,suggestions:s,labelKey:"mainCategoryName",idKey:"id",hasCreateNew:!1})})})]})})}},4232:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(2791),o=s(3097),n=s(1686),r=s(792),i=s(5866),c=s(184);const l=e=>{let{category:t,categoryList_arg:s,onChange:l=(()=>{}),hasAddOption:d=!0}=e;const{savePostCategory:u,fetchMyPostCategories:h,fetchStatus:g,isAllDataFetched:p,categories:y}=(0,n.Z)(),[m,x]=(0,a.useState)({filters:"explore",verified:"all",limit:30,page:1}),[w,C]=(0,a.useState)(t),[f,v]=(0,a.useState)([]),{id:T,categoryName:j="Select a category"}=(0,a.useMemo)((()=>w||{}),[w]),[S,k]=(0,a.useState)(null),E=(0,i.Z)(),N=(e,t)=>{const{categorySlug:s=""}=t||{};C(t),l(e,t,s)},b=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t={...m,...e},s=await h(t);v((e=>[...e,...s])),x((e=>({...e,page:e.page+1})))},_=async e=>{const t=await u(e);v((e=>[...e,t])),C(t),l(t.id,t)};return(0,a.useEffect)((()=>{b()}),[]),(0,c.jsxs)(a.Fragment,{children:[(0,c.jsxs)(o.ZP,{children:[(0,c.jsx)(o.f_,{children:(0,c.jsxs)("span",{className:"flex mx-1 items-center text-secondary cursor-pointer",children:[(0,c.jsx)("span",{className:"",children:j}),(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"14",height:"14",fill:"currentColor",children:(0,c.jsx)("path",{d:"M18 9 12 3 6 9H18ZM18 15 12 21 6 15H18Z"})})]})}),(0,c.jsx)(o.Fo,{heading:"Select a category",options:f,onChange:N,isFetching:"loading"===g,isAllDataFetched:p,onNewOptions:b,onSearch:E((async e=>{const t={...m,search:e,page:1},s=await h(t);v(s),x((e=>({...e,page:2})))}),500),renderAdd:d?e=>{if(e)return(0,c.jsxs)("span",{className:"block w-full",onClick:()=>{var t;k({data:{categoryName:"string"===typeof(t=e)?t:""},status:!0,onClick:_})},children:['Create new "',e,'"']})}:()=>{},selectedValue:T,idKey:"id",labelKey:"categoryName",isSpecialKey:"isVerified"}),!!T&&(0,c.jsx)("span",{className:"flex items-center text-bold rounded-md cursor-pointer px-1 hover-text-destructive",onClick:()=>N(""),children:(0,c.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-delete",children:[(0,c.jsx)("path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"}),(0,c.jsx)("line",{x1:"18",x2:"12",y1:"9",y2:"15"}),(0,c.jsx)("line",{x1:"12",x2:"18",y1:"9",y2:"15"})]})})]},"".concat(T,"_").concat(j)),!!S&&(0,c.jsx)(r.Z,{onClose:()=>{k(null)},categoryModalData:S})]})}},6114:(e,t,s)=>{s.d(t,{Z:()=>r});s(2791);var a=s(6119),o=s(2144),n=s(184);const r=e=>{let{currentMode:t,onChange:s}=e;return(0,n.jsx)(a.Z,{modes:o.XD,onChange:s,selectedValue:t,renderLabel:!0})}},475:(e,t,s)=>{s.d(t,{a:()=>a});const a={SET_FIELDS:"SET_FIELDS",SET_TAGS:"SET_TAGS",SET_VISIBILITY:"SET_VISIBILITY",SET_CONTENT:"SET_CONTENT",SET_TITLE:"SET_TITLE",SET_CATEGORY:"SET_CATEGORY",RESET_FORM:"RESET_FORM"}},2144:(e,t,s)=>{s.d(t,{Qd:()=>o,XD:()=>n,ZM:()=>r});var a=s(184);const o={private:"private",public:"public"},n=[{id:o.private,label:"Private",modeElement:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-eye-off",children:[(0,a.jsx)("path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"}),(0,a.jsx)("path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242"}),(0,a.jsx)("path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"}),(0,a.jsx)("path",{d:"m2 2 20 20"})]})},{id:o.public,label:"Public",modeElement:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-eye",children:[(0,a.jsx)("path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}),(0,a.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}],r="My First Post"},1172:(e,t,s)=>{s.d(t,{Z:()=>y});var a=s(2791),o=s(1087),n=s(7689),r=s(7128),i=s(7323),c=s(2144),l=s(475);const d={postTags:[],currentVisibilityMode:c.Qd.public,postTitle:c.ZM,postCategory:null,markdownContent:""},u=(e,t)=>{let{type:s,payload:a}=t;switch(s){case l.a.SET_FIELDS:return{...e,...a};case l.a.SET_TAGS:return{...e,postTags:a};case l.a.SET_VISIBILITY:return{...e,currentVisibilityMode:a};case l.a.SET_CONTENT:return{...e,markdownContent:a};case l.a.SET_TITLE:return{...e,postTitle:a};case l.a.SET_CATEGORY:return{...e,postCategory:a};case l.a.RESET_FORM:return d;default:return e}};s(4921);var h=s(2817),g=s(775),p=s(7155);const y=()=>{const[e,t]=(0,o.lr)(),{id:s}=(0,n.UO)(),{toast:c}=(0,h.p)(),{logout:y}=(0,p.Z)(),[m,x]=(0,a.useReducer)(u,{...d}),[w,C]=(0,a.useState)("none"),f=(0,a.useCallback)((async e=>{try{const t=await r.TJ(e);return c({heading:"Post created successfully!",description:"Your post has been successfully published!",options:{position:"top-right"}}).success(),t}catch(t){const{message:e,statusCode:s}=t;return 401===s&&y(),c({heading:"Oops! There was an error creating your post.",description:e,options:{position:"top-right"}}).error(),!1}}),[]),v=(0,a.useCallback)((async(e,t)=>{try{const s=await r.CP(e,t);return c({heading:"Post updated successfully!",description:"Your post has been successfully updated!",options:{position:"top-right"}}).success(),s}catch(s){const{message:e}=s;return c({heading:"Oops! There was an error updating your post.",description:e,options:{position:"top-right"}}).error(),!1}}),[]),T=(0,a.useCallback)((async e=>{}),[]);return(0,a.useEffect)((()=>{if(!s)return;(async()=>{const{userName:e}=(0,g.bV)();try{C("loading");const t=await r.zQ({userName:e,postSlug:s}),{id:a,category:o,content:n,postTitle:i,user:c}=t||{},{categoryId:d,categoryName:u}=o||{},{fullName:h,avatar:g}=c||{},p={postId:a,markdownContent:n,postTitle:i,postCategory:{id:d,categoryName:u,value:d}};x({type:l.a.SET_FIELDS,payload:p}),C("success")}catch(t){C("failure")}})()}),[s]),{fetchCategoriesData:async e=>{try{C("loading");const e=await i.hk();return C("success"),setTimeout((()=>{C("none")}),1e3),e}catch(t){C("failure")}},fetchMyPostsData:async e=>{try{C("loading");const t=await r.$n(e);return 0===t.length?C("empty"):(C("success"),setTimeout((()=>{C("none")}),1e3)),t}catch(t){const{statusCode:e}=t;throw 401===e&&y(),C("failure"),t}},savePost:async()=>{const[e,t]=(e=>{const{postTags:t,currentVisibilityMode:s,postCategory:a,postTitle:o,markdownContent:n}=e;return a?s?o?n?[!1,""]:[!0,"Post content is missing"]:[!0,"Post Title is missing"]:[!0,"Post Visibility Mode is missing"]:[!0,"Category is missing"]})(m);if(e)return void c({heading:"Oops! Please verify the changes.",description:t,options:{position:"top-right"}}).error();const{postId:a,postTags:o,currentVisibilityMode:n,postCategory:r,postTitle:i,markdownContent:l}=m,d={category:r.id,content:l,post_title:i,visibility:n};return s?v(d,a):f(d)},deletePost:T,postFormState:m,postFormDispatcher:x,fetchStatus:w}}},1686:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(2791),o=s(7323),n=s(2817),r=s(7155);const i=()=>{const[e,t]=(0,a.useState)([]),[s,i]=(0,a.useState)([]),[c,l]=(0,a.useState)("none"),[d,u]=(0,a.useState)(!1),{toast:h}=(0,n.p)(),{logout:g}=(0,r.Z)(),p=(e,t)=>{t&&u(0===e.length||e.length%t!==0)};return{categoryData:s,isAllDataFetched:d,categories:e,fetchStatus:c,fetchMyPostCategories:async e=>{const{limit:t}=e||{};try{l("loading");const s=await o.Zk(e);return p(s,t),0===s.length?l("empty"):(l("success"),setTimeout((()=>{}),1e3)),s}catch(s){const{statusCode:e}=s||{};401===e&&g(),l("failure")}},fetchPostCategories:async e=>{const{limit:t}=e||{};try{l("loading");const s=await o.hk(e);return p(s,t),0===s.length?l("empty"):(l("success"),setTimeout((()=>{}),1e3)),s}catch(s){const{statusCode:e}=s||{};l(401===e?"unauthorised":"failure")}},fetchPostCategoryByName:async e=>{try{l("loading");const t=await o.wG(e);return i(t),l("success"),t}catch(t){l("failure")}},savePostCategory:async e=>(async e=>{try{const t=await o.t4(e);return h({heading:"Post Category created successfully!",description:"Your post Category is now in review, but will be approved by admin soon!",options:{position:"top-right"}}).success(),t}catch(t){const{message:e="Something went wrong"}=t||{};throw e}})(e)}}},4855:(e,t,s)=>{s.d(t,{Z:()=>o});var a=s(7689);const o=()=>{const e=(0,a.s0)();return{navigateToList:()=>{e("/my/posts")},navigateToCreate:()=>{e("create")},navigateToEdit:t=>{e("edit/"+t)}}}}}]);
//# sourceMappingURL=457.d181380d.chunk.js.map