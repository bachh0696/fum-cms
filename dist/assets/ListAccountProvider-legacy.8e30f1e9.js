!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.86583ad0.js"],(function(t,n){"use strict";var r,s,c,a,o,u,l,i,d,m,f,h;return{setters:[e=>{r=e.an,s=e.ao,c=e.R,a=e.a,o=e.T,u=e.Q,l=e.v,i=e.t,d=e.U,m=e.r,f=e.c,h=e.V}],execute:function(){const n=t("a",new class extends r{constructor(t){super(t),e(this,"BASE_URL",s.CMS_BASE_URL),e(this,"BASE_ENDPOINT","/api/resource/account"),this.setRequest()}});t("L",c.memo((e=>{const{t:t}=a(o.account),r=u(n.list,{manual:!0,onError:(e,t)=>{t?c({data:[]}):l(e?.response?.data?.error_message)}}),{run:s,mutate:c}=r,{runAsync:E}=u(n.delete,{manual:!0,onSuccess:e=>{_.handleFetchData(),i(t("common:message.delete_success"))},onError:e=>{l(t("common:message.delete_failed"))}}),_=d(r);m.exports.useEffect((()=>{s()}),[]);const g={accountTableHandler:_,handleDeleteAccount:E,...e};return f(h,{...g,children:e.children})})))}}}))}();
