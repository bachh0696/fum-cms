System.register(["./index-legacy.86583ad0.js","./InquiryProvider-legacy.cf19cb9e.js"],(function(e,l){"use strict";var a,r,s,m,c,t,n,i,o,d,b,u,y,p,h,g,x,f,N,w,k,v,_,z;return{setters:[e=>{a=e.R,r=e.a,s=e.T,m=e.u,c=e.E,t=e.b,n=e.H,i=e.t,o=e.v,d=e.c,b=e.j,u=e.B,y=e.a2,p=e.d,h=e.g,g=e.ar,x=e.h,f=e.a9,N=e.aa,w=e.a5,k=e.ap,v=e.I},e=>{_=e.i,z=e.I}],execute:function(){const l=a.memo((e=>{const{t:l}=r(s.inquiry),{keyData:a,isEdit:w}=m(),k=c(),{control:v,watch:z,formState:{isSubmitting:S,isDirty:q},handleSubmit:I}=t({mode:"onTouched",defaultValues:{id:a?.id??"",name:a?.name??"",category:a?.category??"タグ種別",description:a?.description??"タグ説明",key_number:a?.key_number??"タグ番号",display:a?.display??"",tag_creator:a?.tag_creator??"タグ作成者",app_currency_id:a?.app_currency_id??null,image:""}}),D=I((async e=>{try{await _.save(e),k(n.key.list),i(l(w?"common:message.edit_success":"common:message.create_success"))}catch(a){o(a)}}));return console.log(q),d("form",{onSubmit:D,children:b(u,{className:"max-w-2xl mx-8 sm:mx-auto border-1 border-[#00A0E9] rounded-4 p-14",children:[d(y,{control:v,name:"id",label:"タグID",placeholder:"デフォルト入力",size:"small",readOnly:!0,classNameField:"bg-grey-300",className:"mb-16 sm:mb-20"}),d(y,{control:v,label:"タグ名称",name:"name",placeholder:"デフォルト入力",className:"mb-16 sm:mb-20",size:"small",required:!0}),b(u,{className:"flex mb-20",children:[d(u,{className:"w-full sm:w-[50%] mt-12 mb-8 sm:mb-0",children:b(p,{variant:"h3",color:"primary",className:"self-center flex items-center w-full py-10 sm:py-0",children:[d(p,{className:"text-black py-4 px-16 rounded-4 bg-yellow mx-8",children:"必須"})," ","アプリ通貨"]})}),d(u,{className:"border-grey-400 border-1 rounded-4 w-full",children:d(h,{control:v,name:"category",className:"ml-10",options:[{key:"1",value:1,label:"イベント"},{key:"2",value:2,label:"コース"},{key:"3",value:3,label:"スポット"}],row:!0,sx:{"& .MuiSvgIcon-root":{fontSize:17}}})})]}),d(y,{control:v,name:"description",label:"タグ説明",placeholder:"デフォルト入力",size:"small",multiline:!0,className:"mb-16 sm:mb-20"}),d(y,{control:v,label:"タグ番号",name:"key_number",placeholder:"デフォルト入力",className:"mb-16 sm:mb-20",size:"small",required:!0}),d(y,{control:v,label:"よく使われるタグ",name:"name",placeholder:"よく使われるタグ",className:"mb-16 sm:mb-20",size:"small"}),b(u,{className:"flex flex-wrap sm:flex-nowrap mb-20",children:[d(u,{className:"w-full sm:w-[50%] mt-12 mb-8 sm:mb-0",children:b(p,{variant:"h3",color:"primary",className:"self-center flex items-center w-full py-10 sm:py-0",children:[d(p,{className:"text-black py-4 px-16 rounded-4 bg-yellow mx-8",children:"必須"})," ","表示・非表示"]})}),d(u,{className:"w-full sm:flex",children:d(g,{control:v,name:"display",options:[{key:"1",value:1,label:"表示"},{key:"2",value:2,label:"非表示"}],row:!0})})]}),d(y,{control:v,name:"tag_creator",label:"タグ作成者",placeholder:"デフォルト入力",size:"small",readOnly:!0,classNameField:"bg-grey-300",className:"mb-16 sm:mb-20"}),b(u,{className:"text-right",children:[d(x,{variant:"contained",color:"error",onClick:()=>k(n.key.list),className:"ml-auto",children:l("common:btn.delete")}),d(f,{type:"submit",variant:"contained",color:"primary",className:N("ml-[10px] text-13 text-white",q?"bg-blue":"bg-gray-500"),loading:S,disabled:!q,children:l("common:btn.new")})]})]})})}));e("default",(()=>{const{t:e}=r(s.inquiry),{id:a}=w(),m=k();return d(z,{t:e,isEdit:"new"!==a,keyData:m?.state,children:d(v,{pageTitle:e("title.inquiry_detail"),content:d(l,{})})})}))}}}));
