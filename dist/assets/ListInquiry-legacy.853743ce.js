System.register(["./index-legacy.07e396c7.js","./InquiryProvider-legacy.4e5516c1.js"],(function(e,l){"use strict";var a,s,n,t,r,c,i,m,o,d,u,h,f,w,N,p,x,y,g,b,q;return{setters:[e=>{a=e.R,s=e.a,n=e.T,t=e.b,r=e.j,c=e.J,i=e.c,m=e.i,o=e.d,d=e.f,u=e.C,h=e.h,f=e.E,w=e.u,N=e.r,p=e.o,x=e.H,y=e.q,g=e.I,b=e.ak},e=>{q=e.I}],execute:function(){const l=a.memo((()=>{const{t:e}=s(n.inquiry),{control:l}=t({defaultValues:{name:"",prefecture:""}});return r(c,{children:[i(m,{className:"py-8",children:i(o,{variant:"h4",children:e("title.filter")})}),r(m,{className:"my-10 p-12 bg-grey-200 rounded-4",children:[r(m,{className:"flex w-[90%] gap-6 mb-12",children:[i(m,{className:"w-full sm:w-[13.5%] p-8",children:e("filter.period")}),r(m,{className:"w-[50%] flex gap-12 items-center",children:[i(m,{className:"flex w-full",children:i(d,{control:l,name:"name",size:"small",className:"w-full bg-white rounded-4"})}),i("span",{children:"〜"}),i(m,{className:"flex w-full",children:i(d,{control:l,name:"prefecture",size:"small",className:"w-full bg-white rounded-4"})})]})]}),r(m,{className:"flex",children:[r(m,{className:"flex w-full sm:w-[90%] items-start",children:[i(m,{className:"w-full sm:w-[14%] p-8",children:e("filter.search_word")}),i(u,{control:l,name:"detail",size:"small",className:"w-full sm:w-[86%] bg-white rounded-4"})]}),i(m,{className:"flex w-full sm:w-[10%] mx-8 items-center",children:i(h,{variant:"outlined",color:"primary",className:"ml-auto bg-white font-bold h-32 mt-[2px]",children:e("filter.submit")})})]})]})]})})),v=a.memo((()=>{const{t:e}=s(n.inquiry),a=f(),{keyTableHandler:t,handleDeleteKey:c}=w(),d=N.exports.useMemo((()=>[p.accessor("mission_name",{header:e("columns.mail"),className:"w-[5%]",cell:({row:e})=>{const l=e.original;return i(o,{className:"cursor-pointer text-blue underline",onClick:()=>a(x.inquiry.list+`/${l.id}`,{state:{data:l}}),children:e?.original?.mission_name})}}),p.accessor("clear_type",{cell:e=>e.getValue(),header:e("columns.date"),className:"w-[5%]"}),p.accessor("app_currency_amount",{cell:e=>e.getValue(),header:e("columns.content"),className:"w-[5%]"})]));return r(m,{children:[i(l,{}),i(y,{isShowPagination:!0,...t,columns:d,data:t?.missions})]})}));e("default",(()=>{const{t:e}=s(n.inquiry),l=f();return N.exports.useEffect((()=>{document.title="お問い合わせ"}),[]),i(q,{children:i(g,{tabHeader:i(b,{className:"px-0",title:r(m,{className:"flex items-center justify-between",children:[i(o,{variant:"h1",className:"font-900",children:e("title.inquiries")}),i(h,{variant:"contained",onClick:()=>l(x.key.list+"/new"),className:"text-white px-32",children:"新規登録"})]})}),content:i(v,{})})})}))}}}));
