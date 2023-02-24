System.register(["./index-legacy.07e396c7.js","./ListAccountProvider-legacy.f34a1a63.js"],(function(e,t){"use strict";var l,a,r,s,n,c,i,o,d,m,u,h,f,b,x,p,N,w,g,y,C,F,v,E,I,B;return{setters:[e=>{l=e.R,a=e.E,r=e.u,s=e.b,n=e.t,c=e.H,i=e.v,o=e.j,d=e.i,m=e.c,u=e.d,h=e.C,f=e.h,b=e.a9,x=e.aa,p=e.a5,N=e.Q,w=e.r,g=e.a,y=e.aq,C=e.I,F=e.ak,v=e.ab,E=e.T},e=>{I=e.a,B=e.L}],execute:function(){const t=l.memo((e=>{const{isEdit:t,account:l,setIsEditAccount:p,isFacilityAccount:N}=e,w=a(),{t:g,accountTableHandler:y}=r();g("edit.form.option.label.admin"),g("edit.form.option.label.event_creator");const{control:C,watch:F,handleSubmit:v,formState:{isSubmitting:E,isDirty:B}}=s({mode:"onTouched",defaultValues:{id:l?.id??null,name:l?.name??"",mail:l?.mail??"",role:l?.role??"",roll:l?.roll??"山田太郎",password:"080-0000-0000",created_at:"15m²"}}),j=v((async e=>{e.confirm_password=e?.password;try{await I.save(e),n("success"),w(c.account.list)}catch(t){i(t?.response?.data?.error_message)}}));return o("form",{onSubmit:j,children:[o(d,{className:"p-16",children:[o(d,{className:"flex justify-between items-center mb-8",children:[m(u,{className:"font-bold text-16",children:"アカウント情報"}),m("button",{type:"button",className:"text-blue bg-none text-16 font-bold",onClick:()=>p(!0),children:"編集"})]}),o(d,{className:"flex justify-center",children:[o(d,{className:"flex w-1/2 items-center h-[54px]",children:[m(d,{className:"w-[20%] p-8 bg-[#F9F9F9] flex items-center h-full text-14 border-1 border-[#C4C4C4]",children:g("edit.form.label.id")}),m(h,{control:C,name:"id",size:"small",className:"w-[80%] h-full",readOnly:!t,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]}),o(d,{className:"flex w-1/2 items-center h-[54px]",children:[m(d,{className:"w-[20%] p-8 bg-[#F9F9F9] flex items-center h-full text-14 border-1 border-[#C4C4C4]",children:g(N?"edit.form.label.administrator_name":"edit.form.label.name")}),m(h,{control:C,name:"name",size:"small",className:"w-[80%] h-full",readOnly:!t,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]})]}),o(d,N?{className:"flex justify-center",children:[o(d,{className:"flex w-1/2 items-center h-[54px]",children:[m(d,{className:"w-[20%] p-8 bg-[#F9F9F9] flex items-center h-full text-14 border-1 border-[#C4C4C4]",children:g("edit.form.label.contract_id")}),m(h,{control:C,name:"role",size:"small",className:"w-[80%] h-full",readOnly:!t,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]}),o(d,{className:"flex w-1/2 items-center h-[54px]",children:[m(d,{className:"w-[20%] p-8 bg-[#F9F9F9] flex items-center h-full text-14 border-1 border-[#C4C4C4]",children:g("edit.form.label.plan_name")}),m(h,{control:C,name:"mail",size:"small",className:"w-[80%] h-full",readOnly:!t,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]})]}:{className:"flex w-full items-center h-[54px]",children:[m(d,{className:"w-[10%] p-8 bg-[#F9F9F9] flex items-center border-1 border-[#C4C4C4] h-full text-14",children:g("edit.form.label.mail")}),m(h,{control:C,name:"mail",size:"small",className:"w-[90%] h-full",readOnly:!0,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]})]}),t?o(d,{className:"flex flex-wrap sm:flex-nowrap px-16 mb-20",children:[m(f,{onClick:()=>p(!1),className:"ml-auto h-32 text-13 text-[#BDBDBD]",children:"キャンセル"}),m(b,{variant:"contained",loading:E,type:"submit",className:x("ml-[10px] h-32 text-13 text-white bg-blue"),children:"更新"})]}):null]})}));e("default",l.memo((e=>{const{t:l}=g(E.account),{isEdit:r,account:s,loadingAccount:n}=(e=>{const{id:t}=p(),l="new"!==t,a=N(I.find,{manual:!0,onError:e=>{errorMsg("Get detail failed!!!")}}),{data:r,run:s,loading:n}=a;return w.exports.useEffect((()=>{l&&s(t)}),[]),{isEdit:l,account:r?.account,loadingAccount:n}})(),[c,i]=w.exports.useState(!1);a();const h=y();return m(B,{t:l,children:m(C,{tabHeader:m(F,{title:o(d,{className:"flex items-center justify-between",children:[o(u,{variant:"h1",className:"font-900",children:[c?"施設提供者アカウント編集":"施設提供者アカウント詳細",null]}),m(u,{onClick:()=>{h({content:o(u,{variant:"h4",children:["削除すると登録され情報が全て失われます。",m("br",{}),"本当に削除しますか？"]}),title:"アカウント削除",color:"error",zIndex:9999,okText:"削除"})},className:"cursor-pointer",color:"error",children:"削除"})]})}),content:n?m("div",{className:"mt-40 text-center",children:m(v,{})}):m(t,{isEdit:c,isFacilityAccount:!0,setIsEditAccount:i,account:s})})})})))}}}));
