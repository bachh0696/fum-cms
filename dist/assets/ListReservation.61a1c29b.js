import{R as c,u as v,E as T,r as o,S as f,v as h,o as s,c as t,d as R,H as x,j as b,B as A,q as L,a as E,I as D,T as N}from"./index.da767aa3.js";import{R as _,L as C}from"./ListReservationProvider.bf667b17.js";import{r as S}from"./useHelpRender.d3560f2f.js";const y=u=>{const{t:a,reservationTableHandler:n,handleDeleteReservation:j,tags:l}=v(),d=T(),[m,p]=o.exports.useState(null);o.exports.useEffect(()=>{l&&p(l.tags)},[l]),o.exports.useCallback(async e=>{const r=e.target.files[0];if(r)try{await f.csvUploadFile(r)}catch(i){h(i)}});const g=o.exports.useMemo(()=>[s.accessor("id",{cell:e=>e.getValue(),header:a("label.id"),className:"w-[5%]"}),s.accessor("name",{header:a("label.name"),cell:({row:e})=>{var i;const r=e.original;return t(R,{className:"cursor-pointer text-blue underline",onClick:()=>d(x.reservation.list+`/${r.id}`,{state:{data:r}}),children:(i=e==null?void 0:e.original)==null?void 0:i.name})}}),s.accessor("address",{header:a("label.reservation_name"),cell:e=>S(e.getValue())}),s.accessor("tel",{header:a("label.reservation_date")}),s.accessor("tel",{header:a("label.utilization_time")}),s.accessor("url",{header:a("label.usage_fee"),cell:e=>"10,000\u5186"})],[a,m]);return b(A,{children:[t(_,{}),t(L,{isShowPagination:!0,columns:g,...n,data:n==null?void 0:n.spots})]})},M=c.memo(y),P=u=>{const{t:a}=E(N.reservation);return o.exports.useEffect(()=>{document.title="\u65BD\u8A2D\u4E88\u7D04\u4E00\u89A7"},[]),t(C,{t:a,children:t(D,{pageTitle:a("title.reservation"),content:t(M,{})})})},$=c.memo(P);export{$ as default};
