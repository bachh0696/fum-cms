!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.86583ad0.js"],(function(t,n){"use strict";var r,a,s,o,i,c,u,l,d,m,f,h,_;return{setters:[e=>{r=e.am,a=e.an,s=e.ao,o=e.R,i=e.a,c=e.T,u=e.Q,l=e.v,d=e.U,m=e.t,f=e.r,h=e.c,_=e.V}],execute:function(){(new r).setFactoryModel({id:e=>e,title:e=>`Notification ${e}`,type:e=>`Type ${e}`,from_date:e=>`From ${e}`,to_date:e=>`To ${e}`}).makeData(20);const n=t("n",new class extends a{constructor(t){super(t),e(this,"BASE_URL",s.CMS_BASE_URL),e(this,"BASE_ENDPOINT","/api/resource/information"),e(this,"detail",(e=>{const t=`${this.BASE_ENDPOINT}/${e}`;return this.request.get(t)})),this.setRequest()}});t("L",o.memo((e=>{const{t:t}=i(c.notification),r=u(n.list,{manual:!0,onError:(e,t)=>{t?s({data:[]}):l(e?.response?.data?.error_message)}}),{run:a,mutate:s}=r,o=d(r),{runAsync:E}=u(n.delete,{manual:!0,onSuccess:e=>{o.handleFetchData(),m(t("common:message.delete_success"))},onError:e=>{l(t("common:message.delete_failed"))}});f.exports.useEffect((()=>{a()}),[]);const g={notificationTableHandler:o,handleDeleteNotification:E,...e};return h(_,{...g,children:e.children})})))}}}))}();
