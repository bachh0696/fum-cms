import{R as _,E as R,ap as T,a5 as j,Q as B,v as y,r as E,u as O,b as S,t as v,H as z,c as e,j as a,i,C as o,a as A,I as P,T as C}from"./index.0dd042c3.js";import{n as N,L}from"./ListNotificationProvider.8cefa432.js";import{m as c}from"./moment.8f337bb1.js";const H=w=>{var f,p;const u=R(),{state:h}=T(),{id:d}=j(),{data:F,run:M}=B(N.detail,{manual:!0,onError:(t,n)=>{var r,m;n?mutate({data:[]}):y((m=(r=t==null?void 0:t.response)==null?void 0:r.data)==null?void 0:m.error_message)},onSuccess:t=>{var n,r,m,b,g,x;t&&t.information&&D({id:(n=t==null?void 0:t.information)==null?void 0:n.id,title:(r=t==null?void 0:t.information)==null?void 0:r.title,category:(b=(m=t==null?void 0:t.information)==null?void 0:m.category)!=null?b:null,summary:(g=t==null?void 0:t.information.summary)!=null?g:"",publish_start:t.information.publish_start?c(t.information.publish_start).format("YYYY/MM/DD hh:mm"):"",publish_end:t.information.publish_end?c(t.information.publish_end).format("YYYY/MM/DD hh:mm"):"",display:t==null?void 0:t.information.display,author:(x=t==null?void 0:t.information)==null?void 0:x.author}),console.log(t)}});E.exports.useEffect(()=>{d&&M(d)},[]);const{t:l,notificationTableHandler:J}=O(),{control:s,handleSubmit:Y,watch:Q,reset:D,formState:{isSubmitting:U,isDirty:V}}=S({mode:"onTouched",defaultValues:{id:(p=(f=h==null?void 0:h.data)==null?void 0:f.id)!=null?p:"",title:"",category:null,summary:"",publish_start:"",publish_end:"",display:0,author:""}}),I=Y(async t=>{try{t.publish_start=c(t.publish_start).format("YYYY-MM-DD hh:mm:ss"),t.publish_end=c(t.publish_end).format("YYYY-MM-DD hh:mm:ss"),t.author=t.author?t.author:"James",await N.save(t),v("submit success!..."),u(z.notification.list)}catch(n){y(n,"submit failed!...")}});return e("form",{onSubmit:I,children:a(i,{className:"p-16",children:[a(i,{className:"flex justify-center",children:[a(i,{className:"flex w-1/2 items-center h-[54px]",children:[e(i,{className:"w-[20%] p-8 bg-grey-300 flex items-center h-full text-14",children:l("edit.form.label.from_date")}),e(o,{control:s,name:"publish_start",size:"small",className:"w-[80%] h-full",readOnly:!0,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]}),a(i,{className:"flex w-1/2 items-center h-[54px]",children:[e(i,{className:"w-[20%] p-8 bg-grey-300 flex items-center h-full text-14",children:l("edit.form.label.status")}),e(o,{control:s,name:"category",size:"small",className:"w-[80%] h-full",readOnly:!0,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]})]}),a(i,{className:"flex justify-center",children:[a(i,{className:"flex w-1/2 items-center h-60",children:[e(i,{className:"w-[20%] p-8 bg-grey-300 flex items-center h-full text-14",children:l("edit.form.label.published_date")}),e(o,{control:s,name:"publish_end",size:"small",className:"w-[80%] h-full",readOnly:!0,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]}),a(i,{className:"flex w-1/2 items-center h-60",children:[e(i,{className:"w-[20%] p-8 bg-grey-300 flex items-center h-full text-14",children:l("edit.form.label.published_date")}),e(o,{control:s,name:"publish_end",size:"small",className:"w-[80%] h-full",readOnly:!0,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]})]}),e(i,{className:"flex justify-start",children:a(i,{className:"flex w-full items-center h-136",children:[e(i,{className:"w-[10%] p-8 bg-grey-300 border-r-1 border-grey-300 h-full text-14",children:l("edit.form.label.content")}),e(o,{control:s,name:"title",size:"small",className:"w-[90%] h-full",readOnly:!0,multiline:!0,sx:{"& .MuiInputBase-root":{height:"100%",padding:"10px",borderRadius:"0"}},inputProps:{style:{height:"100%"}}})]})}),e(i,{className:"flex justify-start",children:a(i,{className:"flex w-full items-center h-[472px]",children:[e(i,{className:"w-[10%] p-8 bg-grey-300 border-r-1 border-grey-300 h-full text-14",children:l("edit.form.label.content")}),e(o,{control:s,name:"title",size:"small",className:"w-[90%] h-full",readOnly:!0,multiline:!0,sx:{"& .MuiInputBase-root":{height:"100%",padding:"10px",borderRadius:"0"}},inputProps:{style:{height:"100%"}}})]})})]})})},$=_.memo(H),q=w=>{const{t:u}=A(C.notification);return e(L,{t:u,children:e(P,{pageTitle:u("title.detail_notification"),content:e($,{})})})},W=_.memo(q);export{W as default};
