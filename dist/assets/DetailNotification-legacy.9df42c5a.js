System.register(["./index-legacy.3b965e17.js","./ListNotificationProvider-legacy.5c2af7f1.js","./moment-legacy.dc96cdf4.js"],(function(e,t){"use strict";var l,a,s,i,r,n,o,m,c,u,d,h,f,p,b,y,g,x,N,w,_;return{setters:[e=>{l=e.R,a=e.E,s=e.ap,i=e.a5,r=e.Q,n=e.v,o=e.r,m=e.u,c=e.b,u=e.t,d=e.H,h=e.c,f=e.j,p=e.i,b=e.C,y=e.a,g=e.I,x=e.T},e=>{N=e.n,w=e.L},e=>{_=e.m}],execute:function(){const t=l.memo((e=>{const t=a(),{state:l}=s(),{id:y}=i(),{data:g,run:x}=r(N.detail,{manual:!0,onError:(e,t)=>{t?mutate({data:[]}):n(e?.response?.data?.error_message)},onSuccess:e=>{e&&e.information&&I({id:e?.information?.id,title:e?.information?.title,category:e?.information?.category??null,summary:e?.information.summary??"",publish_start:e.information.publish_start?_(e.information.publish_start).format("YYYY/MM/DD hh:mm"):"",publish_end:e.information.publish_end?_(e.information.publish_end).format("YYYY/MM/DD hh:mm"):"",display:e?.information.display,author:e?.information?.author}),console.log(e)}});o.exports.useEffect((()=>{y&&x(y)}),[]);const{t:w,notificationTableHandler:Y}=m(),{control:M,handleSubmit:D,watch:j,reset:I,formState:{isSubmitting:R,isDirty:z}}=c({mode:"onTouched",defaultValues:{id:l?.data?.id??"",title:"",category:null,summary:"",publish_start:"",publish_end:"",display:0,author:""}}),B=D((async e=>{try{e.publish_start=_(e.publish_start).format("YYYY-MM-DD hh:mm:ss"),e.publish_end=_(e.publish_end).format("YYYY-MM-DD hh:mm:ss"),e.author=e.author?e.author:"James",await N.save(e),u("submit success!..."),t(d.notification.list)}catch(l){n(l,"submit failed!...")}}));return h("form",{onSubmit:B,children:f(p,{className:"p-16",children:[f(p,{className:"flex justify-center",children:[f(p,{className:"flex w-1/2 items-center h-[54px]",children:[h(p,{className:"w-[20%] p-8 bg-grey-300 flex items-center h-full text-14",children:w("edit.form.label.from_date")}),h(b,{control:M,name:"publish_start",size:"small",className:"w-[80%] h-full",readOnly:!0,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]}),f(p,{className:"flex w-1/2 items-center h-[54px]",children:[h(p,{className:"w-[20%] p-8 bg-grey-300 flex items-center h-full text-14",children:w("edit.form.label.status")}),h(b,{control:M,name:"category",size:"small",className:"w-[80%] h-full",readOnly:!0,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]})]}),f(p,{className:"flex justify-center",children:[f(p,{className:"flex w-1/2 items-center h-60",children:[h(p,{className:"w-[20%] p-8 bg-grey-300 flex items-center h-full text-14",children:w("edit.form.label.published_date")}),h(b,{control:M,name:"publish_end",size:"small",className:"w-[80%] h-full",readOnly:!0,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]}),f(p,{className:"flex w-1/2 items-center h-60",children:[h(p,{className:"w-[20%] p-8 bg-grey-300 flex items-center h-full text-14",children:w("edit.form.label.published_date")}),h(b,{control:M,name:"publish_end",size:"small",className:"w-[80%] h-full",readOnly:!0,sx:{"& .MuiInputBase-root":{height:"100%",borderRadius:"0"}}})]})]}),h(p,{className:"flex justify-start",children:f(p,{className:"flex w-full items-center h-136",children:[h(p,{className:"w-[10%] p-8 bg-grey-300 border-r-1 border-grey-300 h-full text-14",children:w("edit.form.label.content")}),h(b,{control:M,name:"title",size:"small",className:"w-[90%] h-full",readOnly:!0,multiline:!0,sx:{"& .MuiInputBase-root":{height:"100%",padding:"10px",borderRadius:"0"}},inputProps:{style:{height:"100%"}}})]})}),h(p,{className:"flex justify-start",children:f(p,{className:"flex w-full items-center h-[472px]",children:[h(p,{className:"w-[10%] p-8 bg-grey-300 border-r-1 border-grey-300 h-full text-14",children:w("edit.form.label.content")}),h(b,{control:M,name:"title",size:"small",className:"w-[90%] h-full",readOnly:!0,multiline:!0,sx:{"& .MuiInputBase-root":{height:"100%",padding:"10px",borderRadius:"0"}},inputProps:{style:{height:"100%"}}})]})})]})})}));e("default",l.memo((e=>{const{t:l}=y(x.notification);return h(w,{t:l,children:h(g,{pageTitle:l("title.detail_notification"),content:h(t,{})})})})))}}}));
