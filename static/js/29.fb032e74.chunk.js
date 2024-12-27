"use strict";(self.webpackChunktake_your_notes_v1=self.webpackChunktake_your_notes_v1||[]).push([[29],{4895:(e,t,s)=>{s.d(t,{Z:()=>d});var r=s(2791),n=s(5709),a=s(2861),i=s(913),o=s(184);const l=()=>(0,o.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-folder-open",children:(0,o.jsx)("path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"})}),(0,o.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,o.jsx)(i.Z,{size:"lg",type:"h2",children:"Hmm..."}),(0,o.jsx)(i.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"It looks like there is no data present."})]})]}),c={none:"Show More",loading:"Fetching data",failure:"Failed to fetch",success:"Show More"},d=e=>{const{UnauthorisedState:t=a.Z,EmptyState:s=l,FailureState:i=n.Z,fetchDataMethod:d,initialFetchStatus:h="none",pageSize:x=10,isEmpty:u=!1,currentPage:m=1,isAllDataFetched:g=!1,initialData:j=[],children:p}=e,[f,v]=(0,r.useState)(h);(0,r.useEffect)((()=>{v(h)}),[h]);return"unauthorised"===f?(0,o.jsx)(r.Fragment,{children:t&&(0,o.jsx)(t,{})}):"empty"===f?(0,o.jsx)(r.Fragment,{children:s&&(0,o.jsx)(s,{})}):"failure"===f?(0,o.jsx)(r.Fragment,{children:i&&(0,o.jsx)(i,{})}):(0,o.jsxs)(r.Fragment,{children:[p,!g&&!u&&(0,o.jsx)("div",{className:"flex w-full justify-center text-sm my-4 mx-2",children:(0,o.jsx)("span",{onClick:()=>{(async e=>{v("loading");try{await d(),v("success"),setTimeout((()=>{v("none")}),1e3)}catch(t){console.error(t),v("failure")}})()},className:"flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-accent text-custom bg-accent hover-default hover-text-default",children:(0,o.jsxs)("span",{className:"flex",children:["loading"===f&&(0,o.jsx)("svg",{className:"lucide lucide-loader-circle mx-2 animate-spin",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,o.jsx)("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}),c[f]]})})})]})}},3934:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(2791);const n=e=>{const{pageSize:t=10}=e||{},[s,n]=(0,r.useState)(0),[a,i]=(0,r.useState)(!1);return{currentPage:s,isAllDataFetched:a,incrementPagination:()=>{n((e=>e+1))},resetPagination:()=>{n(1),i(!1)},checkIfAllDataFetched:e=>{i(0===e.length||e.length%t!==0)}}}},5709:(e,t,s)=>{s.d(t,{Z:()=>n});s(2791);var r=s(184);const n=()=>(0,r.jsx)("div",{children:(0,r.jsx)("span",{children:"Failed tof etch"})})},2861:(e,t,s)=>{s.d(t,{Z:()=>a});s(2791);var r=s(913),n=s(184);const a=()=>(0,n.jsxs)("div",{className:"flex flex-col w-full items-center my-12",children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"120",height:"120",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",class:"lucide lucide-shield-ban",children:[(0,n.jsx)("path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}),(0,n.jsx)("path",{d:"m4.243 5.21 14.39 12.472"})]}),(0,n.jsxs)("div",{className:"flex flex-col items-center my-4 text-center",children:[(0,n.jsx)(r.Z,{size:"lg",type:"h2",children:"Oops!"}),(0,n.jsx)(r.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"It looks like you're not logged in yet."})]})]})},7359:(e,t,s)=>{s.d(t,{p:()=>i});s(2791);var r=s(184);const n={info:{border:"border-info",text:"text-info"},error:{border:"border-destructive",text:"text-destructive"}},a={info:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-info",children:[(0,r.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,r.jsx)("path",{d:"M12 16v-4"}),(0,r.jsx)("path",{d:"M12 8h.01"})]}),error:(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-triangle-alert",children:[(0,r.jsx)("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),(0,r.jsx)("path",{d:"M12 9v4"}),(0,r.jsx)("path",{d:"M12 17h.01"})]})},i=e=>{const{type:t="error",children:s}=e;return(0,r.jsxs)("div",{className:"flex text-sm my-2 px-4 py-2 bg-default border-l ".concat(n[t].border," rounded-md"),children:[(0,r.jsx)("div",{className:"flex ".concat(n[t].text," items-center mr-2"),children:a[t]}),(0,r.jsx)("div",{className:"flex flex-col",children:s})]})}},4664:(e,t,s)=>{s.d(t,{Z:()=>l});var r=s(2791),n=s(6215),a=s(913),i=s(6033),o=s(184);const l=e=>{const{title:t,children:s}=e,[l,c]=(0,r.useState)(null),d=()=>{c(!0)};return l?(0,o.jsxs)(n.Z,{isShown:l,hasOverlay:!0,size:"xl",children:[(0,o.jsxs)("div",{className:"my-4",children:[(0,o.jsxs)("div",{className:"flex justify-between",children:[(0,o.jsx)(a.Z,{textVariant:"h3",size:"md",className:"my-4 mx-4",children:t}),(0,o.jsx)("button",{onClick:()=>{c(!1)},type:"button","data-drawer-hide":"drawer-example","aria-controls":"drawer-example",className:"text-default bg-transparent rounded-lg text-sm flex items-center justify-center mx-4",children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x",children:[(0,o.jsx)("path",{d:"M18 6 6 18"}),(0,o.jsx)("path",{d:"m6 6 12 12"})]})})]}),(0,o.jsx)(i.Z,{className:"my-2"})]}),(0,o.jsx)("div",{className:"mx-4 mb-4 py-4 text-sm",children:s})]}):(0,o.jsx)("span",{onClick:d,className:"flex hover-text-info items-center cursor-pointer pl-2",children:(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-info",children:[(0,o.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,o.jsx)("path",{d:"M12 16v-4"}),(0,o.jsx)("path",{d:"M12 8h.01"})]})})}},792:(e,t,s)=>{s.d(t,{Z:()=>u});var r=s(2791),n=s(6215),a=s(1381),i=s(913),o=s(1039),l=(s(8189),s(7323)),c=s(1685),d=s(184);const h={none:"Create",loading:"Creating",failure:"Failed",completed:"Created"},x={none:"Update",loading:"Updating",failure:"Failed",completed:"Updated"},u=e=>{const{categoryModalData:t,onClose:s=(()=>{})}=e,{status:u,data:m={},onClick:g}=t||{},{id:j,categoryName:p=""}=m,f=j?x:h,v="".concat(j?"Update Category":"Create Category"),w="Are you sure you want to ".concat(j?"update the category":"create a new category","?"),[y,k]=(0,r.useState)([]),[N,C]=(0,r.useState)([]),[b,Z]=(0,r.useState)(p),[S,M]=(0,r.useState)("none"),[z,F]=(0,r.useState)(""),_=()=>{s(),Z("")};return(0,r.useEffect)((()=>{Z(p)}),[p]),(0,r.useEffect)((()=>{(async()=>{try{const e=await l.zg();C(e)}catch(e){console.log(e)}})()}),[]),u?(0,d.jsx)(n.Z,{isShown:!0,hasOverlay:!0,size:"lg",children:(0,d.jsxs)(a.Zb,{variant:"ghost",rounded:"lg",children:[(0,d.jsxs)(a.Ol,{children:[(0,d.jsx)(i.Z,{size:"lg",children:v}),(0,d.jsx)(i.Z,{size:"xs",textVariant:"default",children:w}),j?(0,d.jsx)(i.Z,{size:"xs",textVariant:"bold",children:p}):null]}),(0,d.jsxs)(a.aY,{children:[(0,d.jsx)(o.zC,{type:"text",labelName:"New category name",placeholder:"Enter category name",value:b,onChange:Z,size:"sm",isFocused:!0,validationMsg:{type:"error",messages:[z]}}),(0,d.jsx)("div",{className:"my-3",children:(0,d.jsx)(c.Z,{mainCategories:y,onChange:e=>{k(e)},suggestions:N})})]}),(0,d.jsxs)(a.eW,{className:"p-0 flex justify-between",children:[(0,d.jsx)(o.zx,{size:"xs",width:"none",variant:"custom",onClick:()=>{_()},children:"Cancel"}),(0,d.jsx)(o.zx,{size:"xs",width:"none",variant:"accent",onClick:async()=>{const e=y.map((e=>e.id)),t=(e=>e?(F(""),!0):(F("Please enter a category name"),!1))(b),s={category_name:b,main_category_ids:e};if(t)if(g){M("loading");try{await g(s,j),M("completed"),setTimeout((()=>{_()}),1e3)}catch(r){M("failure"),F(r)}finally{setTimeout((()=>{M("none")}),1e3)}}else _()},buttonStatus:S,children:f[S]})]})]})}):null}},8327:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(2791),n=s(7323),a=s(1087),i=s(6033),o=s(3719),l=s(184);const c=e=>{const{categoryData:t}=e,{categorySlug:s}=t,[c,d]=(0,r.useState)([]),[h,x]=(0,r.useState)(!1),[u,m]=(0,r.useState)("none"),g=o.Z.CATEGORY_EDIT(s);return(0,l.jsxs)("div",{children:[h?(0,l.jsx)("div",{className:"flex w-full justify-center text-xs my-1 mb-2 mx-2",children:(0,l.jsx)("span",{onClick:()=>x(!1),className:"flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-another text-accent bg-another hover-default hover-border-accent hover-text-default",children:(0,l.jsx)("span",{className:"flex",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-circle-chevron-up",children:[(0,l.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,l.jsx)("path",{d:"m8 14 4-4 4 4"})]})})})}):(0,l.jsx)("div",{className:"flex w-full justify-center text-xs my-1 mb-2 mx-2",children:(0,l.jsx)("span",{onClick:async()=>{const{categorySlug:e}=t;if(!c.length&&"success"!==u){m("loading");const t=await n.zg({category:e});d(t),m("success")}x(!0)},className:"flex items-center mx-1 py-1 px-3 rounded-md cursor-pointer border border-another text-accent bg-another hover-default hover-border-accent hover-text-default",children:(0,l.jsx)("span",{className:"flex",children:"loading"===u?(0,l.jsx)("svg",{className:"lucide lucide-loader-circle mx-2 animate-spin",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,l.jsx)("path",{d:"M21 12a9 9 0 1 1-6.219-8.56"})}):(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-circle-chevron-down",children:[(0,l.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,l.jsx)("path",{d:"m16 10-4 4-4-4"})]})})})}),h&&(0,l.jsxs)("div",{className:"flex flex-col w-full text-xs my-1 mb-2 mx-2",children:[0===c.length&&(0,l.jsx)("div",{children:"No Parent Categories"}),c.map((e=>{const{mainCategoryName:t}=e;return(0,l.jsx)("span",{children:t})}))]}),(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(i.Z,{variant:"another",className:"my-2"}),(0,l.jsxs)("div",{className:"flex text-xs",children:[(0,l.jsx)(a.rU,{to:g,className:"cursor-pointer",children:(0,l.jsxs)("span",{className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-primary rounded-md cursor-pointer",onClick:()=>{},children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-pencil-line",children:[(0,l.jsx)("path",{d:"M12 20h9"}),(0,l.jsx)("path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"}),(0,l.jsx)("path",{d:"m15 5 3 3"})]}),(0,l.jsx)("span",{className:"pl-1",children:"Edit"})]})}),(0,l.jsxs)("span",{className:"flex items-center px-2 py-1 mx-2 hover-custom hover-text-destructive rounded-md cursor-pointer",onClick:()=>{},children:[(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-trash",children:[(0,l.jsx)("path",{d:"M3 6h18"}),(0,l.jsx)("path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}),(0,l.jsx)("path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"})]}),(0,l.jsx)("span",{className:"pl-1",children:"Delete"})]})]})]})]})}},1685:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(2791),n=s(4487),a=s(184);const i=e=>{const{mainCategories:t=[],suggestions:s=[],onChange:i=(()=>{}),onCreate:o=(()=>{}),className:l,...c}=e,[d,h]=(0,r.useState)(""),x=e=>t.slice(0,e).concat(t.slice(e+1));return(0,a.jsx)(r.Fragment,{children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex max-w-mds justify-ends text-default  ".concat(l),children:[t.map(((e,t)=>{const{mainCategoryName:s}=e;return(0,a.jsxs)("div",{className:"flex bg-custom mx-1 my-1 text-xs rounded-md",children:[(0,a.jsxs)("span",{className:"mx-1 px-2 py-1",children:["#",s]}),(0,a.jsx)("span",{className:"flex items-center text-bold rounded-md cursor-pointer px-1 hover-destructive hover-text-custom",onClick:()=>(e=>{const t=x(e);i(t)})(t),children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-x",children:[(0,a.jsx)("path",{d:"M18 6 6 18"}),(0,a.jsx)("path",{d:"m6 6 12 12"})]})})]},t)})),t.length>2&&(0,a.jsx)("div",{className:"flex mx-1 my-1 text-xs rounded-md",children:(0,a.jsx)("span",{className:"flex items-center text-bold rounded-md cursor-pointer px-1 hover-destructive hover-text-custom",onClick:()=>{i([])},children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-delete",children:[(0,a.jsx)("path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"}),(0,a.jsx)("line",{x1:"18",x2:"12",y1:"9",y2:"15"}),(0,a.jsx)("line",{x1:"12",x2:"18",y1:"9",y2:"15"})]})})})]}),(0,a.jsx)("div",{className:"flex justify-ends",children:(0,a.jsx)("div",{className:"min-w-md",children:(0,a.jsx)(n.Z,{placeholder:"Type and press Enter",...c,onKeyDown:(e,s)=>{if("Enter"===s.key){if(!e)return;h(""),o(e)}if("Backspace"===s.key&&0===e.length){const e=t.length,s=x(e-1);i(s)}},onChange:(e,t)=>{h(e)},onSuggestionClick:(e,t)=>{i(t)},onCreate:(e,t)=>{o(e),h("")},value:d,selectedOptions:t,suggestions:s,labelKey:"mainCategoryName",idKey:"id",hasCreateNew:!1})})})]})})}},5307:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(2791),n=s(8811),a=s(1324),i=s(184);const o=[{id:"none",text:"None"},{id:"recent",text:"Most Recent"},{id:"oldest",text:"Oldest"},{id:"most_posts",text:"Most Posts"},{id:"least_posts",text:"Least Posts"},{id:"most_followers",text:"Most Followers"},{id:"least_followers",text:"Least Followers"},{id:"random",text:"Random"}],l={recent:{sort_by:"date",sort_order:"desc"},oldest:{sort_by:"date",sort_order:"asc"},most_posts:{sort_by:"posts",sort_order:"desc"},least_posts:{sort_by:"posts",sort_order:"asc"},most_followers:{sort_by:"followers",sort_order:"desc"},least_followers:{sort_by:"followers",sort_order:"asc"},random:{sort_by:"random"}},c=e=>{const{onChange:t=(()=>{}),resetPagination:s=(()=>{})}=e;return(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)(n.Z,{label:"Filter by",onSelect:e=>{const{id:r}=e,n=l[r];s(),t(n)},options:o})}),(0,i.jsx)(a.Z,{size:"sm",textBoxProps:{placeholder:"Search Categories",placeholderFocus:"default"},buttonProps:{size:"xs"},hasSearchIcon:!1,onSearch:e=>{t({search:e})}})]})}},3216:(e,t,s)=>{s.d(t,{Z:()=>c});var r=s(2791),n=s(1087),a=s(2014),i=s(3719),o=s(8777),l=(s(4405),s(184));const c=e=>{const{categoryData:t,hasFollowers:s=!1,hasPosts:c=!1,hasFollowButton:d=!0}=e,{categoryName:h,categorySlug:x,categoryIcon:u,followers:m,posts:g}=t||{},j=i.Z.CATEGORY_DETAIL(x);return(0,l.jsx)(r.Fragment,{children:(0,l.jsx)(n.rU,{to:j,className:"cursor-pointer group-hover",children:(0,l.jsxs)("div",{className:"flex items-center mb-2",children:[(0,l.jsx)("div",{className:"flex",children:(0,l.jsx)(a.Z,{name:h,src:"".concat(o.c6).concat(u)},u)}),(0,l.jsx)("div",{className:"flex flex-col",children:(0,l.jsx)("div",{className:"flex items-center",children:(0,l.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("h3",{className:"text-sm text-default px-3",children:h}),(0,l.jsx)("span",{className:"text-center ml-1 mr-4 invisible group-hover-item",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-circle-chevron-right",children:[(0,l.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,l.jsx)("path",{d:"m10 8 4 4-4 4"})]})})]}),s&&(0,l.jsxs)("p",{className:"text-secondary px-3 space-y-1 text-xs",children:[m," followers"]}),c&&(0,l.jsxs)("p",{className:"text-secondary px-3 space-y-1 text-xs",children:[g," posts"]})]})})})]})})})}},1686:(e,t,s)=>{s.d(t,{Z:()=>o});var r=s(2791),n=s(7323),a=s(2817),i=s(7155);const o=()=>{const[e,t]=(0,r.useState)([]),[s,o]=(0,r.useState)([]),[l,c]=(0,r.useState)("none"),[d,h]=(0,r.useState)(!1),{toast:x}=(0,a.p)(),{logout:u}=(0,i.Z)(),m=(e,t)=>{t&&h(0===e.length||e.length%t!==0)};return{categoryData:s,isAllDataFetched:d,categories:e,fetchStatus:l,fetchMyPostCategories:async e=>{const{limit:t}=e||{};try{c("loading");const s=await n.Zk(e);return m(s,t),0===s.length?c("empty"):(c("success"),setTimeout((()=>{}),1e3)),s}catch(s){const{statusCode:e}=s||{};401===e&&u(),c("failure")}},fetchPostCategories:async e=>{const{limit:t}=e||{};try{c("loading");const s=await n.hk(e);return m(s,t),0===s.length?c("empty"):(c("success"),setTimeout((()=>{}),1e3)),s}catch(s){const{statusCode:e}=s||{};c(401===e?"unauthorised":"failure")}},fetchPostCategoryByName:async e=>{try{c("loading");const t=await n.wG(e);return o(t),c("success"),t}catch(t){c("failure")}},savePostCategory:async e=>(async e=>{try{const t=await n.t4(e);return x({heading:"Post Category created successfully!",description:"Your post Category is now in review, but will be approved by admin soon!",options:{position:"top-right"}}).success(),t}catch(t){const{message:e="Something went wrong"}=t||{};throw e}})(e)}}},2029:(e,t,s)=>{s.r(t),s.d(t,{default:()=>C});var r=s(2791),n=s(4895),a=s(3934),i=s(5307),o=s(1686),l=s(938),c=s(913),d=s(775),h=s(6119),x=s(184);const u="unverified",m="rejected",g=[{id:"verified",label:"Verified",modeElement:(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-circle-check-big",children:[(0,x.jsx)("path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}),(0,x.jsx)("path",{d:"m9 11 3 3L22 4"})]})},{id:u,label:"Pending",modeElement:(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-clock-alert",children:[(0,x.jsx)("path",{d:"M12 6v6l4 2"}),(0,x.jsx)("path",{d:"M16 21.16a10 10 0 1 1 5-13.516"}),(0,x.jsx)("path",{d:"M20 11.5v6"}),(0,x.jsx)("path",{d:"M20 21.5h.01"})]})},{id:m,label:"Rejected",modeElement:(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-octagon-x",children:[(0,x.jsx)("path",{d:"m15 9-6 6"}),(0,x.jsx)("path",{d:"M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"}),(0,x.jsx)("path",{d:"m9 9 6 6"})]})}],j={verified:{verified:"verified"},unverified:{verified:"unverified"},rejected:{verified:"rejected"}},p=g[0].id,f=e=>{let{onChange:t,currentMode:s=p}=e;return(0,x.jsx)(h.Z,{modes:g,onChange:e=>{t(j[e])},selectedValue:s,renderLabel:!0})};s(8327);var v=s(792),w=s(6033),y=s(7359),k=s(4664);const N=()=>(0,x.jsx)(k.Z,{title:"Help information about My Categories",children:(0,x.jsxs)(r.Fragment,{children:[(0,x.jsxs)("div",{className:"mb-4",children:[(0,x.jsx)(c.Z,{size:"md",className:"mb-2",children:"Category Information:"}),(0,x.jsx)(c.Z,{textVariant:"light",size:"xs",children:"- Pending Categories: Need admin verification before being visible."}),(0,x.jsx)(c.Z,{textVariant:"light",size:"xs",children:"- Verified Categories: Publicly visible."}),(0,x.jsx)(c.Z,{textVariant:"light",size:"xs",children:"- Rejected Categories: Cannot be edited; contact the admin for changes."})]}),(0,x.jsxs)(y.p,{type:"info",children:[(0,x.jsx)(c.Z,{children:"Note!"}),(0,x.jsx)(c.Z,{textVariant:"light",size:"xs",children:"You can edit categories that are in the pending verification state."})]}),(0,x.jsx)(w.Z,{className:"my-4"}),(0,x.jsxs)("div",{className:"mb-4",children:[(0,x.jsx)(c.Z,{size:"md",className:"mb-2",children:"Create New Category Information:"}),(0,x.jsx)(c.Z,{textVariant:"light",size:"xs",children:"- You can add new categories, but they will need admin approval before being visible to the public."})]}),(0,x.jsxs)(y.p,{type:"error",children:[(0,x.jsx)(c.Z,{children:"Important!"}),(0,x.jsx)(c.Z,{textVariant:"light",size:"xs",children:"Once a category is verified or rejected, you cannot alter it. For any changes, please contact the administrator."})]})]})}),C=()=>{const{fetchStatus:e,fetchMyPostCategories:t,savePostCategory:s}=(0,o.Z)(),{currentPage:h,isAllDataFetched:u,incrementPagination:m,checkIfAllDataFetched:g,resetPagination:j}=(0,a.Z)({pageSize:30}),[p,w]=(0,r.useState)({verified:"unverified"}),[y,k]=(0,r.useState)([]),[C,b]=(0,r.useState)(null),{userName:Z}=(0,d.bV)(),S=!("following"===p.filters&&!Z)&&"unauthorised"!==e,M=async e=>{const s={...p,...e};w(s),k([]),j();const r={page:1,limit:30,...s};try{const e=await t(r);g(e),k(e)}catch(n){console.error(n)}},z=async()=>{const e={page:h+1,limit:30,...p};try{const s=await t(e)||[];return k((e=>[...e,...s])),m(),g(s),s}catch(s){throw console.error(s),s}},F=async e=>{await s(e);M({verified:"unverified"})};return(0,r.useEffect)((()=>{z()}),[]),(0,x.jsxs)(r.Fragment,{children:[(0,x.jsxs)("div",{className:"text-default m-5",children:[(0,x.jsxs)("div",{className:"flex",children:[(0,x.jsxs)("div",{className:"flex justify-between w-full",children:[(0,x.jsxs)("div",{className:"flex flex-col mx-2 my-2",children:[(0,x.jsxs)(c.Z,{size:"lg",type:"h2",className:"flex",children:["Your Categories",(0,x.jsx)(N,{})]}),(0,x.jsx)(c.Z,{variant:"secondary",size:"sm",textVariant:"default",children:"List of all the categories published by you (Verified/Pending/Rejected)"})]}),(0,x.jsx)("div",{className:"flex",children:(0,x.jsxs)("div",{className:"content-center mx-2",children:[(0,x.jsxs)("div",{onClick:e=>{b({data:{categoryName:"string"===typeof e?e:""},status:!0,onClick:F})},className:"flex text-sm p-2 my-2 bg-default hover-accent hover-text-custom rounded-md cursor-pointer mx-1",children:["Create New",(0,x.jsx)("span",{className:"flex items-center pl-2",children:(0,x.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-circle-plus",children:[(0,x.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,x.jsx)("path",{d:"M8 12h8"}),(0,x.jsx)("path",{d:"M12 8v8"})]})})]}),(0,x.jsx)(f,{onChange:M,currentMode:p.verified,renderLabel:!0})]})})]}),(0,x.jsx)("div",{className:"flex justify-between w-full my-2",children:S&&(0,x.jsx)(r.Fragment,{children:(0,x.jsx)(i.Z,{onChange:M})})})]}),(0,x.jsx)("div",{className:"flex my-2",children:(0,x.jsx)(n.Z,{isEmpty:"success"!==e,initialFetchStatus:e,currentPage:h,isAllDataFetched:u,fetchDataMethod:z,children:(0,x.jsx)(l.Z,{categoriesList:y,hasAuthActions:!0})})})]}),!!C&&(0,x.jsx)(v.Z,{onClose:()=>{b(null)},categoryModalData:C})]})}},938:(e,t,s)=>{s.d(t,{Z:()=>c});s(2791);var r=s(9115),n=s(1381),a=s(3216),i=s(8327),o=s(184);const l=e=>{let{categoryData:t,hasAuthActions:s=!1}=e;return(0,o.jsxs)(n.Zb,{size:"sm",rounded:"lg",className:"border hover-border-highlight mx-4 my-2 group-hover",children:[(0,o.jsx)(n.aY,{children:(0,o.jsx)(r.Z,{direction:"",alignItems:"none",justifyContent:"spaceBetween",children:(0,o.jsx)(a.Z,{categoryData:t,hasFollowers:!0,hasPosts:!0,hasFollowButton:!1})})}),s&&(0,o.jsx)(i.Z,{categoryData:t})]})},c=e=>{let{categoriesList:t=[],hasAuthActions:s}=e;return(0,o.jsx)("div",{className:"w-full px-2 my-4 rounded-md overflow-scroll",children:(0,o.jsx)(r.Z,{justifyContent:"none",alignItems:"none",className:"mb-3",children:t.map(((e,t)=>(0,o.jsx)("div",{className:"min-w-sm",children:(0,o.jsx)(l,{categoryData:e,hasAuthActions:s},t)},t)))})})}}}]);
//# sourceMappingURL=29.fb032e74.chunk.js.map