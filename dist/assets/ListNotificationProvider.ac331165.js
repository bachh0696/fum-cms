var E=Object.defineProperty;var T=(e,a,t)=>a in e?E(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var o=(e,a,t)=>(T(e,typeof a!="symbol"?a+"":a,t),t);import{am as A,an as S,ao as g,R as h,a as p,T as v,Q as u,v as d,U as R,t as $,r as B,c as D,V as L}from"./index.6a609018.js";new A().setFactoryModel({id:e=>e,title:e=>`Notification ${e}`,type:e=>`Type ${e}`,from_date:e=>`From ${e}`,to_date:e=>`To ${e}`}).makeData(20);class P extends S{constructor(t){super(t);o(this,"BASE_URL",g.CMS_BASE_URL);o(this,"BASE_ENDPOINT","/api/resource/information");o(this,"detail",t=>{const r=`${this.BASE_ENDPOINT}/${t}`;return this.request.get(r)});this.setRequest()}}const l=new P,y=e=>{const{t:a}=p(v.notification),t=u(l.list,{manual:!0,onError:(s,_)=>{var i,c;_?m({data:[]}):d((c=(i=s==null?void 0:s.response)==null?void 0:i.data)==null?void 0:c.error_message)}}),{run:r,mutate:m}=t,n=R(t),{runAsync:f}=u(l.delete,{manual:!0,onSuccess:s=>{n.handleFetchData(),$(a("common:message.delete_success"))},onError:s=>{d(a("common:message.delete_failed"))}});B.exports.useEffect(()=>{r()},[]);const N={notificationTableHandler:n,handleDeleteNotification:f,...e};return D(L,{...N,children:e.children})},x=h.memo(y);export{x as L,l as n};
