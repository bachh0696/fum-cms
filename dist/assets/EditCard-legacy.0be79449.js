System.register(["./index-legacy.352fe715.js","./CardProvider-legacy.f781b382.js"],(function(e,a){"use strict";var l,r,m,c,s,t,n,i,o,d,b,u,p,y,g,h,f,x,N,w,v,_,k,z,S;return{setters:[e=>{l=e.R,r=e.a,m=e.T,c=e.u,s=e.E,t=e.b,n=e.$,i=e.a0,o=e.H,d=e.t,b=e.v,u=e.c,p=e.j,y=e.B,g=e.a2,h=e.d,f=e.g,x=e.ar,N=e.h,w=e.a9,v=e.ap,_=e.a5,k=e.I},e=>{z=e.c,S=e.C}],execute:function(){const a=l.memo((e=>{const{t:a}=r(m.card),{cardData:l,isEdit:v}=c(),_=s(),{control:k,watch:S,formState:{isSubmitting:q,isDirty:j},handleSubmit:D}=t({mode:"onTouched",defaultValues:{id:l?.id??"",name:l?.name??"",category:l?.category??"タグ種別",description:l?.description??"タグ説明",card_number:l?.card_number??"タグ番号",display:l?.display??"",tag_creator:l?.tag_creator??"タグ作成者",app_currency_id:l?.app_currency_id??null,image:""},resolver:n(i.object({name:i.string().required().min(3),app_currency_id:i.number().nullable().required(),image:i.string().required().min(1)}))}),E=D((async e=>{try{const l={...e,image:e?.image?.name};await z.save(l),_(o.card.list),d(a(v?"common:message.edit_success":"common:message.create_success"))}catch(l){b(l)}}));return u("form",{onSubmit:E,children:p(y,{className:"max-w-2xl mx-8 sm:mx-auto border-1 border-[#00A0E9] rounded-4 p-14",children:[u(g,{control:k,name:"id",label:"タグID",placeholder:"デフォルト入力",size:"small",readOnly:!0,classNameField:"bg-grey-300",className:"mb-16 sm:mb-20"}),u(g,{control:k,label:"タグ名称",name:"name",placeholder:"デフォルト入力",className:"mb-16 sm:mb-20",size:"small",required:!0}),p(y,{className:"flex mb-20",children:[u(y,{className:"w-full sm:w-[50%] mt-12 mb-8 sm:mb-0",children:p(h,{variant:"h3",color:"primary",className:"self-center flex items-center w-full py-10 sm:py-0",children:[u(h,{className:"text-black py-4 px-16 rounded-4 bg-yellow mx-8",children:"必須"})," ","アプリ通貨"]})}),u(y,{className:"border-grey-400 border-1 rounded-4 w-full",children:u(f,{control:k,name:"category",className:"ml-10",options:[{key:"1",value:1,label:"イベント"},{key:"2",value:2,label:"コース"},{key:"3",value:3,label:"スポット"}],row:!0,sx:{"& .MuiSvgIcon-root":{fontSize:17}}})})]}),u(g,{control:k,name:"description",label:"タグ説明",placeholder:"デフォルト入力",size:"small",multiline:!0,className:"mb-16 sm:mb-20"}),u(g,{control:k,label:"タグ番号",name:"card_number",placeholder:"デフォルト入力",className:"mb-16 sm:mb-20",size:"small",required:!0}),u(g,{control:k,label:"よく使われるタグ",name:"name",placeholder:"よく使われるタグ",className:"mb-16 sm:mb-20",size:"small"}),p(y,{className:"flex flex-wrap sm:flex-nowrap mb-20",children:[u(y,{className:"w-full sm:w-[50%] mt-12 mb-8 sm:mb-0",children:p(h,{variant:"h3",color:"primary",className:"self-center flex items-center w-full py-10 sm:py-0",children:[u(h,{className:"text-black py-4 px-16 rounded-4 bg-yellow mx-8",children:"必須"})," ","表示・非表示"]})}),u(y,{className:"w-full sm:flex",children:u(x,{control:k,name:"display",options:[{key:"1",value:1,label:"表示"},{key:"2",value:2,label:"非表示"}],row:!0})})]}),u(g,{control:k,name:"tag_creator",label:"タグ作成者",placeholder:"デフォルト入力",size:"small",readOnly:!0,classNameField:"bg-grey-300",className:"mb-16 sm:mb-20"}),p(y,{className:"text-right",children:[u(N,{variant:"contained",color:"error",onClick:()=>_(o.card.list),className:"ml-auto",children:a("common:btn.delete")}),u(w,{type:"submit",variant:"contained",color:"primary",className:"ml-[10px] bg-blue text-white",children:a("common:btn.new")})]})]})})}));e("default",l.memo((e=>{const{t:l}=r(m.card),c=v(),{id:s}=_(),t="new"!==s;return console.log(m.card),u(S,{t:l,cardData:c?.state,isEdit:t,children:u(k,{pageTitle:l("title.detail_card"),content:u(a,{})})})})))}}}));
