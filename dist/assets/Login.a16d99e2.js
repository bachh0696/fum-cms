import{E as N,r as a,Q as A,as as m,b as S,$ as y,a0 as n,at as D,H as p,c as e,j as r,af as v,i as x,d as F,C as f,au as R,a9 as _}from"./index.98e8622b.js";import{A as q,d as I,a as T}from"./VisibilityOffRounded.b7cd5553.js";const L=({variant:o="h1",title:u=""})=>e(F,{className:"text-[30px]",variant:o,children:u}),O=()=>r(x,{children:[e(L,{variant:"h2",title:"\u30ED\u30B0\u30A4\u30F3"}),e(F,{className:"mt-7 text-16",children:" \u30ED\u30B0\u30A4\u30F3\u3057\u3066\u304F\u3060\u3055\u3044"})]}),H=()=>{const o=N(),[u,i]=a.exports.useState(!0),[l,h]=a.exports.useState(null),{data:j,run:g,loading:z}=A(m.csrf,{manual:!0});a.exports.useEffect(()=>{g()},[]);const{control:c,handleSubmit:C,watch:M,formState:{isSubmitting:E}}=S({mode:"onTouched",defaultValues:{username:"",password:""},resolver:y(n.object({username:n.string().required().trim().email("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u5F62\u5F0F\u304C\u6B63\u3057\u304F\u3042\u308A\u307E\u305B\u3093").min(3),password:n.string().required().min(8)}))}),w=C(async d=>{try{const t={mail:d.username,password:d.password},s=await m.login(t);await D.set("CMS_ACCOUNT_INFO",JSON.stringify(s==null?void 0:s.account_info)),await o(p.facility)}catch(t){h(s=>t.response.data.error_message?t.response.data.error_message:t.message),console.log("============= e",t)}}),b=()=>e(_,{loading:E,variant:"contained",className:"text-18 py-8 px-20 rounded-4 font-bold bg-[#007bff] w-full mt-20",type:"submit",children:"\u30ED\u30B0\u30A4\u30F3"}),B=()=>r("form",{onSubmit:w,className:"text-center px-10 pt-10",children:[e(f,{className:"py-10 flex-col",control:c,name:"username",label:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",labelStyle:"mb-8",required:!0,showTextRequired:!1,placeholder:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"}),e(f,{className:"py-10 flex-col",type:u?"password":"text",control:c,name:"password",label:"\u30D1\u30B9\u30EF\u30FC\u30C9",labelStyle:"mb-8",required:!0,showTextRequired:!1,placeholder:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",InputProps:{endAdornment:u?e(I,{onClick:i.bind(void 0,!u),className:"z-999 cursor-pointer absolute right-10",fontSize:"small",color:"info"}):e(T,{onClick:i.bind(void 0,!u),className:"z-999 cursor-pointer absolute right-10",fontSize:"small",color:"info"})},sx:{"& .css-i7ffd1-MuiInputBase-root-MuiOutlinedInput-root":{paddingRight:0}}}),b(),e(x,{className:"mt-24 font-400 text-[#00A0E9]",children:e(R,{to:p.auth.forgot_password,children:"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u304A\u5FD8\u308C\u306E\u5834\u5408\u306F\u3053\u3061\u3089"})})]});return a.exports.useEffect(()=>{document.title="\u30ED\u30B0\u30A4\u30F3"},[]),e("div",{children:r("div",{className:"text-center flex items-center flex-col pt-40",children:[l?e(q,{icon:!1,className:"min-w-[400px] sm:min-w-[600px] mb-28",color:"error",children:l}):null,r(v,{className:"min-w-[400px] sm:min-w-[600px] p-32 m-12 shadow-1",children:[O(),B()]})]})})};export{H as default};
