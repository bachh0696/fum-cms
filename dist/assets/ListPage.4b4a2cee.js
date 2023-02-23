import{R as C,u as T,a as B,T as F,b as W,j as a,B as s,c as e,d as p,C as _,e as M,f as x,g as J,h as E,r as w,i as k,D as G,k as H,l as q,m as U,n as K,o as g,p as z,q as S,s as A,t as Q,v as P,w as O,x as X,y as Z,z as N,A as i,E as V,F as ee,G as le,H as $,L as re,I as ne,J as ae}from"./index.0dd042c3.js";import{m as D}from"./moment.8f337bb1.js";import{r as R}from"./useHelpRender.46543290.js";import{u as L}from"./index.e2722c1e.js";const se=b=>{const{eventTableHandler:l,tags:r}=T(),{t:d}=B(F.facility),{control:t,getValues:m,watch:c}=W({mode:"onTouched",defaultValues:{}}),o=async()=>{var h,y;try{const n=m(),f={...n,event_date_from:n!=null&&n.event_date_from?D(n==null?void 0:n.event_date_from).add(7,"hours").format("YYYY-MM-DD"):null,event_date_until:n!=null&&n.event_date_until?D(n==null?void 0:n.event_date_until).add(7,"hours").format("YYYY-MM-DD"):null,reception_date_from:n!=null&&n.reception_date_from?D(n==null?void 0:n.reception_date_from).add(7,"hours").format("YYYY-MM-DD"):null,reception_date_until:n!=null&&n.reception_date_until?D(n==null?void 0:n.reception_date_until).add(7,"hours").format("YYYY-MM-DD"):null,category:(h=n==null?void 0:n.category)==null?void 0:h.join(","),tag:(y=n==null?void 0:n.tag)==null?void 0:y.join(",")};await l.handleFetchData(f)}catch(n){console.log("============= error",n)}};return a(s,{className:"border-1 rounded-4 border-grey-300",children:[e(s,{className:"p-8 bg-grey-300",children:e(p,{variant:"h4",children:"\u691C\u7D22\u6761\u4EF6"})}),a(s,{className:"flex p-8 w-full",children:[a(s,{className:"flex w-1/2 items-center",children:[e(s,{className:"w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4",children:"\u30A4\u30D9\u30F3\u30C8\u30BF\u30A4\u30C8\u30EB"}),e(_,{control:t,name:"title",size:"small",className:"w-2/3"})]}),a(s,{className:"flex w-1/2 items-center mx-8 ",children:[e(s,{className:"w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4",children:"\u30AB\u30C6\u30B4\u30EA\u30FC"}),e(M,{control:t,name:"category",size:"small",className:"w-2/3",returnValueType:"enum",placeholder:"\u9078\u629E\u3059\u308B",multiple:!0,options:[{value:1,label:"\u30AB\u30C6\u30B4\u30EA\u30FC1"},{value:2,label:"\u30AB\u30C6\u30B4\u30EA\u30FC2"}]})]})]}),a(s,{className:"flex p-8  w-full",children:[a(s,{className:"flex w-1/2 items-center  ",children:[e(s,{className:"w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4",children:"\u307E\u3068\u3081"}),e(_,{control:t,name:"summary",size:"small",className:"w-2/3"})]}),a(s,{className:"flex w-1/2 items-center mx-8 ",children:[e(s,{className:"w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4",children:"\u958B\u50AC\u5730"}),e(_,{control:t,name:"venue",size:"small",className:"w-2/3"})]})]}),a(s,{className:"flex p-8  w-full",children:[a(s,{className:"flex w-1/2 items-center  ",children:[e(s,{className:"w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4",children:"\u958B\u50AC\u5E74\u6708\u65E5"}),e(x,{control:t,name:"event_date_from",size:"small",className:"w-1/3"}),e(x,{control:t,name:"event_date_until",size:"small",className:"w-1/3"})]}),a(s,{className:"flex w-1/2 items-center mx-8 ",children:[e(s,{className:"w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4",children:"\u53D7\u4ED8\u5E74\u6708\u65E5"}),e(x,{control:t,name:"reception_date_from",size:"small",className:"w-1/3"}),e(x,{control:t,name:"reception_date_until",size:"small",className:"w-1/3"})]})]}),a(s,{className:"flex p-8  w-full",children:[a(s,{className:"flex w-1/2 items-center  ",children:[e(s,{className:"w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4",children:"\u8457\u8005"}),e(_,{control:t,name:"author",size:"small",className:"w-2/3"})]}),a(s,{className:"flex w-1/2 items-center mx-8 ",children:[e(s,{className:"w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4",children:"\u8CBB\u7528"}),e(_,{control:t,name:"min_fee",className:"w-1/3",size:"small"}),e(_,{control:t,name:"max_fee",className:"w-1/3",size:"small"})]})]}),a(s,{className:"flex p-8  w-full",children:[a(s,{className:"flex w-1/2 items-center",children:[e(s,{className:"w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4",children:"\u30BF\u30B0\u60C5\u5831"}),e(M,{control:t,name:"tag",size:"small",className:"w-2/3",returnValueType:"enum",placeholder:"\u9078\u629E\u3059\u308B",multiple:!0,options:r==null?void 0:r.tags,valuePath:"id",labelPath:"name"})]}),a(s,{className:"flex w-1/2 items-center mx-8",children:[e(s,{className:"w-1/3 p-8 bg-grey-300 border-grey-300 border-1 rounded-4",children:"\u72B6\u614B"}),e(s,{className:"border-grey-400 border-1 rounded-4",children:e(J,{control:t,name:"publish",className:"ml-10",options:[{key:"1",value:1,label:d("value.express")},{key:"0",value:0,label:d("value.non_representation")}],row:!0,sx:{"& .MuiSvgIcon-root":{fontSize:17}}})}),e(E,{variant:"contained",color:"primary",className:"ml-auto h-32 mt-[2px]",onClick:o,children:"\u691C\u7D22"})]})]})]})},te=C.memo(se),ie=b=>{const{title:l,content:r,action:d}=b;var[t,m]=w.exports.useState(!1);const c=()=>{m(!0)},o=()=>{m(!1)};return a("div",{children:[e(k,{variant:"outlined",onClick:c,children:d}),a(G,{open:t,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e(H,{id:"alert-dialog-title",children:l}),e(q,{children:e(U,{id:"alert-dialog-description",children:r})}),a(K,{children:[e(E,{onClick:o,children:"Disagree"}),e(E,{onClick:o,autoFocus:!0,children:"Agree"})]})]})]})};C.memo(ie);const ce=b=>{const{t:l}=T(),{data:r,setData:d}=b,t=async c=>{var o;try{await A.deleteEventReview(c);const h=await A.getEventReview({event_id:(o=r==null?void 0:r.search_params)==null?void 0:o.event_id});d(h),Q("delete event review success")}catch(h){P(h)}},m=w.exports.useMemo(()=>[g.accessor("id",{cell:c=>c.getValue(),header:l("label.no"),className:"w-[5%]"}),g.accessor("text",{className:"w-[20%] whitespace-normal",header:l("label.text"),cell:c=>R(c.getValue())}),g.accessor("event_id",{header:l("label.event_id")}),g.accessor("course_id",{header:l("label.course_id")}),g.accessor("rating",{header:l("label.rating")}),g.accessor("image",{header:l("label.image"),className:"w-[10%]",cell:({row:c})=>e("img",{src:c.original.image})}),g.accessor("action",{header:l("label.action"),className:"w-[15%]",cell:({row:c})=>(c.original,e("div",{className:"flex",children:e(z,{onConfirmDelete:()=>t(c.original.id)})}))})]);return e(S,{isShowPagination:!0,columns:m,...r,data:r==null?void 0:r.event_reviews})},oe=C.memo(ce),ue=b=>{const[l,{setTrue:r,setFalse:d}]=L(!1),[t,m]=w.exports.useState([]),c=async y=>{var n,f;try{const u=await A.getEventReview({event_id:y});m(u),r()}catch(u){P((f=(n=u==null?void 0:u.response)==null?void 0:n.data)==null?void 0:f.error_message)}},o=()=>{d()},h=w.exports.useCallback(()=>e(O,{open:l,handleClose:o,dialogTitle:"\u30A4\u30D9\u30F3\u30C8\u30EC\u30D3\u30E5\u30FC",maxWidth:"lg",dialogContent:e(oe,{data:t,setData:m})}),[l,JSON.stringify(t)]);return{handleOpen:c,handleClose:o,renderEventReview:h}},de=(b,l=",")=>b?b.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,`$1${l}`):0,me=b=>{var d,t,m,c;const{data:l}=b,{t:r}=B(F.event);return a(X,{className:"w-full",sx:{"& tr":{borderWidth:1},"& td":{borderWidth:1,py:"12px",px:"16px"}},children:[a("colgroup",{children:[e("col",{className:"w-1/4"}),e("col",{className:"w-1/4"}),e("col",{className:"w-1/4"}),e("col",{className:"w-1/4"})]}),a(Z,{children:[a(N,{children:[e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.title")})}),e(i,{children:R(l==null?void 0:l.title)}),e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.type")})}),e(i,{children:l==null?void 0:l.type})]}),a(N,{children:[e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.venue")})}),e(i,{children:l==null?void 0:l.venue}),e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.author")})}),e(i,{children:l==null?void 0:l.author})]}),a(N,{children:[e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.event_start")})}),e(i,{children:l==null?void 0:l.event_start}),e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.event_end")})}),e(i,{children:l==null?void 0:l.event_end})]}),a(N,{children:[e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.reception_start_edit")})}),e(i,{children:l==null?void 0:l.reception_start}),e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.reception_end")})}),e(i,{children:l==null?void 0:l.reception_end})]}),a(N,{children:[e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.entry_fee")})}),a(i,{children:[de(l==null?void 0:l.entry_fee),"\xA5"]}),e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.publish")})}),e(i,{children:l!=null&&l.publish?r("label.publish"):r("label.unpublish")})]}),a(N,{children:[e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.summary")})}),e(i,{children:l==null?void 0:l.summary}),e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.sos_info")})}),e(i,{children:l==null?void 0:l.sos_info})]}),a(N,{children:[e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.tag")})}),e(i,{colSpan:3,children:((d=l==null?void 0:l.tag)==null?void 0:d.length)>0&&Array.isArray(l==null?void 0:l.tag)?(t=l==null?void 0:l.tag)==null?void 0:t.map((o,h)=>e("span",{className:"bg-grey-300 p-4 rounded-4",children:o},h)):r("label.none")})]}),a(N,{children:[e(i,{children:e(p,{color:"primary",variant:"subtitle1",children:r("label.category")})}),e(i,{colSpan:3,children:((m=l==null?void 0:l.category)==null?void 0:m.length)>0&&Array.isArray(l==null?void 0:l.category)?(c=l==null?void 0:l.category)==null?void 0:c.map((o,h)=>e("span",{className:"bg-grey-300 p-4 rounded-4",children:o},h)):r("label.none")})]})]})]})},he=C.memo(me),pe=b=>{const[l,{setTrue:r,setFalse:d}]=L(!1),[t,m]=w.exports.useState([]),c=y=>{m(y),r()},o=()=>{d()},h=w.exports.useCallback(()=>e(O,{open:l,handleClose:o,dialogTitle:"\u30A4\u30D9\u30F3\u30C8\u8A73\u7D30",maxWidth:"lg",dialogContent:e(he,{data:t})}),[l,JSON.stringify(t)]);return{handleOpenEventDetail:c,handleCloseEventDetail:o,renderEventDetail:h}},ge=b=>{const{t:l,eventTableHandler:r,handleDeleteEvent:d}=T(),{handleOpen:t,handleClose:m,renderEventReview:c}=ue(),{handleOpenEventDetail:o,handleCloseEventDetail:h,renderEventDetail:y}=pe(),n=V(),f=w.exports.useMemo(()=>[g.accessor("id",{cell:u=>u.getValue(),header:l("label.no"),className:"w-[5%]"}),g.accessor("title",{className:"w-[20%] whitespace-normal",header:l("label.title"),cell:u=>R(u.getValue())}),g.accessor("venue",{header:l("label.venue")}),g.accessor("event_start",{header:l("label.event_start")}),g.accessor("reception_start",{header:l("label.reception_start")}),g.accessor("tag",{header:l("label.tag"),className:"w-[10%]",cell:({row:u})=>{var v,Y;return(Y=(v=u==null?void 0:u.original)==null?void 0:v.tag)==null?void 0:Y.map((j,I)=>e("span",{className:"mb-4 bg-grey-300 p-4 rounded-4 m-4",children:j},I))}}),g.accessor("publish",{header:l("label.status"),cell:({row:u})=>{var v;return((v=u==null?void 0:u.original)==null?void 0:v.publish)===1?l("label.publish"):l("label.unpublish")}}),g.accessor("action",{header:l("label.action"),className:"w-[15%]",cell:({row:u})=>{const v=u.original;return a("div",{className:"flex",children:[e(ee,{onClick:()=>t(v==null?void 0:v.id)}),e(le,{onClick:()=>n($.event.list+`/${v.id}`,{state:v})}),e(z,{onConfirmDelete:()=>d(v.id)})]})}})]);return a(s,{children:[e(te,{}),e(S,{isShowPagination:!0,columns:f,...r,data:r==null?void 0:r.events}),c(),y()]})},be=C.memo(ge),ve=b=>{const{t:l}=B(F.event),r=V();return w.exports.useEffect(()=>{document.title="\u30A8\u30D9\u30F3\u30C8"},[]),e(re,{t:l,children:e(ne,{pageTitle:l("title.event"),content:a(ae,{children:[e(be,{}),e(k,{className:"my-40 mr-20 text-right",children:e(E,{variant:"contained",color:"primary",onClick:()=>r($.event.list+"/new"),className:"bg-blue h-32",children:l("common:btn.add")})})]})})})},_e=C.memo(ve);export{_e as default};
