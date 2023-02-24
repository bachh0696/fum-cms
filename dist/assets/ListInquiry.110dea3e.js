import{R as f,a as c,T as m,b as y,j as t,J as b,c as e,i as a,d as u,f as h,C as q,h as p,E as N,u as I,r as w,o as r,H as x,q as C,I as v,ak as T}from"./index.98e8622b.js";import{I as _}from"./InquiryProvider.45099202.js";const A=()=>{const{t:s}=c(m.inquiry),{control:n}=y({defaultValues:{name:"",prefecture:""}});return t(b,{children:[e(a,{className:"py-8",children:e(u,{variant:"h4",children:s("title.filter")})}),t(a,{className:"my-10 p-12 bg-grey-200 rounded-4",children:[t(a,{className:"flex w-[90%] gap-6 mb-12",children:[e(a,{className:"w-full sm:w-[13.5%] p-8",children:s("filter.period")}),t(a,{className:"w-[50%] flex gap-12 items-center",children:[e(a,{className:"flex w-full",children:e(h,{control:n,name:"name",size:"small",className:"w-full bg-white rounded-4"})}),e("span",{children:"\u301C"}),e(a,{className:"flex w-full",children:e(h,{control:n,name:"prefecture",size:"small",className:"w-full bg-white rounded-4"})})]})]}),t(a,{className:"flex",children:[t(a,{className:"flex w-full sm:w-[90%] items-start",children:[e(a,{className:"w-full sm:w-[14%] p-8",children:s("filter.search_word")}),e(q,{control:n,name:"detail",size:"small",className:"w-full sm:w-[86%] bg-white rounded-4"})]}),e(a,{className:"flex w-full sm:w-[10%] mx-8 items-center",children:e(p,{variant:"outlined",color:"primary",className:"ml-auto bg-white font-bold h-32 mt-[2px]",children:s("filter.submit")})})]})]})]})},F=f.memo(A),B=()=>{const{t:s}=c(m.inquiry),n=N(),{keyTableHandler:i,handleDeleteKey:R}=I(),g=w.exports.useMemo(()=>[r.accessor("mission_name",{header:s("columns.mail"),className:"w-[5%]",cell:({row:l})=>{var d;const o=l.original;return e(u,{className:"cursor-pointer text-blue underline",onClick:()=>n(x.inquiry.list+`/${o.id}`,{state:{data:o}}),children:(d=l==null?void 0:l.original)==null?void 0:d.mission_name})}}),r.accessor("clear_type",{cell:l=>l.getValue(),header:s("columns.date"),className:"w-[5%]"}),r.accessor("app_currency_amount",{cell:l=>l.getValue(),header:s("columns.content"),className:"w-[5%]"})]);return t(a,{children:[e(F,{}),e(C,{isShowPagination:!0,...i,columns:g,data:i==null?void 0:i.missions})]})},P=f.memo(B),D=()=>{const{t:s}=c(m.inquiry),n=N();return w.exports.useEffect(()=>{document.title="\u304A\u554F\u3044\u5408\u308F\u305B"},[]),e(_,{children:e(v,{tabHeader:e(T,{className:"px-0",title:t(a,{className:"flex items-center justify-between",children:[e(u,{variant:"h1",className:"font-900",children:s("title.inquiries")}),e(p,{variant:"contained",onClick:()=>n(x.key.list+"/new"),className:"text-white px-32",children:"\u65B0\u898F\u767B\u9332"})]})}),content:e(P,{})})})};export{D as default};
