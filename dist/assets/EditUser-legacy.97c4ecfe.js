System.register(["./index-legacy.07e396c7.js","./ListUserProvider-legacy.ae5fbfe8.js"],(function(e,l){"use strict";var a,r,s,m,t,n,i,o,c,d,u,b,h,f,g,x,p,N,w,v;return{setters:[e=>{a=e.b,r=e.$,s=e.a0,m=e.t,t=e.v,n=e.R,i=e.u,o=e.c,c=e.a1,d=e.j,u=e.B,b=e.a2,h=e.d,f=e.a3,g=e.a4,x=e.h,p=e.a,N=e.I,w=e.T},e=>{v=e.L}],execute:function(){const l=n.memo((e=>{const{t:l}=i(),{methodForm:n,onSubmit:p}=(()=>{const e=a({mode:"onTouched",defaultValues:{email:"",firstname:"",lastname:"",gender:"",address:"",image:""},resolver:r(s.object({email:s.string().required().email(),firstname:s.string().required(),lastname:s.string().required(),image:s.string().required()}))}),l=e.handleSubmit((async e=>{try{console.log("============= data",e),m("Create user successfully")}catch(l){t(l)}}),(e=>console.log("============= error",e)));return{methodForm:e,onSubmit:l}})(),{control:N}=n;return l("edit.form.check_box.label.express"),l("edit.form.check_box.label.representation"),o(c,{children:o("form",{onSubmit:p,children:d(u,{className:"max-w-lg mx-8 sm:mx-auto",children:[o(b,{label:l("title.email"),control:N,name:"email",placeholder:"デフォルト入力",className:"mb-16 sm:mb-20",size:"small",required:!0}),o(b,{label:"First Name",control:N,name:"firstname",placeholder:"デフォルト入力",className:"mb-16 sm:mb-20",size:"small",required:!0}),o(b,{label:"Last Name",control:N,name:"firstname",placeholder:"デフォルト入力",className:"mb-16 sm:mb-20",size:"small",required:!0}),d(u,{className:"flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20",children:[o(u,{className:"w-full sm:w-1/3 mt-12 mb-8 sm:mb-0",children:o(h,{variant:"h3",color:"primary",children:l("title.gender")})}),o(f,{control:N,size:"small",fullWidth:!0,variant:"outlined",placeholder:"選択する",name:"gender",className:"w-full sm:w-2/3"})]}),o(b,{label:"Address",control:N,name:"address",placeholder:"デフォルト入力",className:"mb-16 sm:mb-20",size:"small"}),o(g,{label:"Avatar upload",required:!0,control:N,name:"image",helperText:"Image size : 100x100"}),o(u,{className:"flex flex-wrap sm:flex-nowrap mb-16 sm:mb-20",children:d(u,{className:"w-full mt-12 mb-8 sm:mb-0 text-end",children:[o(x,{variant:"contained",color:"error",className:"mr-10",size:"small",children:"削除"}),o(x,{variant:"contained",color:"success",size:"small",type:"submit",children:"登録"})]})})]})})})}));e("default",n.memo((e=>{const{t:a}=p(w.user);return o(v,{t:a,children:o(N,{pageTitle:a("title.list_user"),content:o(l,{})})})})))}}}));
