import{R as f,Q as c,v as d,a6 as l,t as h,U as v,r as P,c as x,V as E}from"./index.8e71033d.js";const L=s=>{const a=c(l.list,{manual:!0,onError:(e,T)=>{var o,n;T?g({data:[]}):d((n=(o=e==null?void 0:e.response)==null?void 0:o.data)==null?void 0:n.error_message)}}),{runAsync:u}=c(l.delete,{manual:!0,onSuccess:e=>{r.handleFetchData(),h(t("common:message.delete_success"))},onError:e=>{d(t("common:message.delete_failed"))}}),{run:m,mutate:g}=a,r=v(a);P.exports.useEffect(()=>{m()},[]);const i={...s,tagTableHandler:r,handleDeleteTag:u};return x(E,{...i,children:s.children})},_=f.memo(L);export{_ as L};
