!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.07e396c7.js"],(function(t,n){"use strict";var r,a,s,c,o,i,u,l,m,d,h,y;return{setters:[e=>{r=e.am,a=e.an,s=e.ao,c=e.a,o=e.T,i=e.Q,u=e.v,l=e.t,m=e.U,d=e.r,h=e.c,y=e.V}],execute:function(){(new r).setFactoryModel({id:e=>e,name:e=>`course ${e}`,area:e=>`Area ${e}`,range:e=>`コース距離-${e}`,amount:e=>`${e}0000`,physical:e=>`Physical-${e}`,author:e=>`Admin ${e}`}).makeData(20);const n=t("i",new class extends a{constructor(t){super(t),e(this,"BASE_URL",s.CMS_BASE_URL),e(this,"BASE_ENDPOINT","/api/resource/mission"),this.setRequest()}});t("I",(e=>{const{t:t}=c(o.inquiry),r=i(n.list,{manual:!0,onError:(e,t)=>{t?s({data:[]}):u(e.response?.data?.error_message)}}),{run:a,mutate:s}=r,{runAsync:f}=i(n.delete,{manual:!0,onSuccess:()=>{g.handleFetchData(),l(t("common:message.delete_success"))},onError:()=>{u(t("common:message.delete_failed"))}}),g=m(r);d.exports.useEffect((()=>{a()}),[]);const E={keyTableHandler:g,handleDeleteKey:f,...e};return h(y,{...E,children:e.children})}))}}}))}();
