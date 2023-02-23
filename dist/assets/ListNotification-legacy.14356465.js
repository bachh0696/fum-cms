System.register(["./index-legacy.7a415fa2.js","./ListNotificationProvider-legacy.f5dfaff3.js"],(function(e,t){"use strict";var n,a,o,i,c,r,s,l,d,m,u,h,f,p,b,g,N,x,w,y,_,E,H,S;return{setters:[e=>{n=e.R,a=e.a,o=e.T,i=e.Q,c=e.v,r=e.U,s=e.t,l=e.r,d=e.c,m=e.V,u=e.E,h=e.u,f=e.o,p=e.d,b=e.H,g=e.q,N=e.j,x=e.i,w=e.h,y=e.al,_=e.I,E=e.ak},e=>{H=e.n,S=e.L}],execute:function(){const t=n.memo((e=>{const{t:t}=a(o.notification),n=i(H.list,{manual:!0,onError:(e,t)=>{t?h({data:[]}):c(e?.response?.data?.error_message)}}),{run:u,mutate:h}=n,f=r(n),{runAsync:p}=i(H.delete,{manual:!0,onSuccess:e=>{f.handleFetchData(),s(t("common:message.delete_success"))},onError:e=>{c(t("common:message.delete_failed"))}});l.exports.useEffect((()=>{u()}),[]);const b={notificationTableHandler:f,handleDeleteNotification:p,...e};return d(m,{...b,children:e.children})})),D=n.memo((e=>{const n=u(),{t:a,notificationTableHandler:o,handleDeleteNotification:i}=h(),c=l.exports.useMemo((()=>[f.accessor("publish_start",{header:a("column.created_at"),className:"w-[5%]"}),f.accessor("title",{header:a("column.content"),cell:({row:e})=>{const t=e.original;return d(p,{className:"cursor-pointer text-blue underline",onClick:()=>n(b.notification.list+`/${t.id}`,{state:{data:t}}),children:e?.original?.title})}}),f.accessor("category",{header:a("column.status")})]),[a]);return d(t,{children:d(g,{isShowPagination:!0,columns:c,...o,data:o?.information})})})),C=n.memo((e=>{const n=u(),{t:a,notificationTableHandler:o,handleDeleteNotification:i}=h(),c=l.exports.useMemo((()=>[f.accessor("publish_start",{header:a("column.created_at"),className:"w-[5%]"}),f.accessor("title",{header:a("column.content"),cell:({row:e})=>{const t=e.original;return d(p,{className:"cursor-pointer text-blue underline",onClick:()=>n(b.notification.list+`/${t.id}`,{state:{data:t}}),children:e?.original?.title})}}),f.accessor("category",{header:a("column.status")})]),[a]);return d(t,{children:d(g,{isShowPagination:!0,columns:c,...o,data:o?.information})})})),P=()=>N(x,{className:"border rounded-4 border-grey-300 px-10 py-20 mt-10",children:[d(p,{className:"mb-36",children:"デバイストークン一覧のエクスポート"}),N(x,{className:"flex justify-center items-center flex-col",children:[d(w,{variant:"contained",color:"primary",className:"text-white mb-6",children:"CSVで出力する"}),d(p,{className:"underline",children:"GrowthPushを表示する (別サイトへ移動します）"})]})]}),T=n.memo((e=>{const{t:t}=a(o.notification),n=i(H.list,{manual:!0,onError:(e,t)=>{t?h({data:[]}):c(e?.response?.data?.error_message)}}),{run:u,mutate:h}=n,f=r(n),{runAsync:p}=i(H.delete,{manual:!0,onSuccess:e=>{f.handleFetchData(),s(t("common:message.delete_success"))},onError:e=>{c(t("common:message.delete_failed"))}});l.exports.useEffect((()=>{u()}),[]);const b={notificationTableHandler:f,handleDeleteNotification:p,...e};return d(m,{...b,children:e.children})})),v=n.memo((e=>{const t=u(),{t:n,notificationTableHandler:a,handleDeleteNotification:o}=h(),i=l.exports.useMemo((()=>[f.accessor("publish_start",{header:n("column.created_at"),className:"w-[5%]"}),f.accessor("title",{header:n("column.content"),cell:({row:e})=>{const n=e.original;return d(p,{className:"cursor-pointer text-blue underline",onClick:()=>t(b.notification.list+`/${n.id}`,{state:{data:n}}),children:e?.original?.title})}}),f.accessor("category",{header:n("column.status")})]),[n]);return d(T,{children:d(g,{isShowPagination:!0,columns:i,...a,data:a?.information})})})),j=n.memo((e=>{const t=u(),{t:n,notificationTableHandler:a,handleDeleteNotification:o}=h(),i=l.exports.useMemo((()=>[f.accessor("publish_start",{header:n("column.created_at"),className:"w-[5%]"}),f.accessor("title",{header:n("column.content"),cell:({row:e})=>{const n=e.original;return d(p,{className:"cursor-pointer text-blue underline",onClick:()=>t(b.notification.list+`/${n.id}`,{state:{data:n}}),children:e?.original?.title})}}),f.accessor("category",{header:n("column.status")})]),[n]);return d(T,{children:d(g,{isShowPagination:!0,columns:i,...a,data:a?.information})})})),k=n.memo((e=>d(y,{options:[{label:"メール一括",optionsChildrens:[{label:"施設提供者",component:d(D,{})},{label:"利用者",component:d(C,{})}]},{label:"WEB",optionsChildrens:[{label:"施設提供者",component:d(v,{})},{label:"利用者",component:d(j,{})}]},{label:"PUSH",component:d(P,{})}]})));e("default",n.memo((e=>{const{t:t}=a(o.notification);return l.exports.useEffect((()=>{document.title="お知らせ"}),[]),d(S,{t:t,children:d(_,{className:"h-auto",tabHeader:d(E,{className:"px-0",title:N(x,{className:"flex items-center justify-between",children:[d(p,{variant:"h1",className:"font-900",children:t("title.notifications")}),d(w,{variant:"contained",className:"text-white px-32",children:"メール通知作成"})]})}),content:d(k,{})})})})))}}}));
