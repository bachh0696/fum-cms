import{Y as e,R as L,a as N,r as o,Z as _,c as r,i as v,j as A,J as B,O,W as S,_ as W,X as w}from"./index.da767aa3.js";const n=u=>{var c;const{className:d,control:x,name:h,label:m,placeholder:p,fileType:J,InputLabelProps:f,inputProps:P,InputProps:b,required:g,helperText:I,accept:T,isPreview:X=!1,multiple:Y,...y}=u,{t:a}=N("common"),i=o.exports.useRef(),{field:{onChange:C,value:s,ref:j},fieldState:{error:l}}=_({name:h,control:x}),[Z,R]=o.exports.useState(null),k=o.exports.useCallback(async F=>{const{files:t}=F.target;console.log("============= file",t[0]),t[0]&&(R(t[0]),C(t[0]))},[a]),q=()=>{i.current.click()};return r(v,{className:d,children:A(B,{children:[r(O,{fullWidth:!0,label:m,placeholder:p||a("form.input_file_empty"),value:(c=s==null?void 0:s.name)!=null?c:null,inputRef:j,error:!!l,helperText:l&&l.message||I||void 0,InputLabelProps:{shrink:p?!0:void 0,required:g,...f},inputProps:{...P},InputProps:{endAdornment:r(S,{position:"end",children:r(W,{color:"primary",onClick:q,children:r(w,{children:"cloud_upload"})})}),readOnly:!0,...b},...y}),r("input",{type:"file",accept:T,ref:i,onChange:k,className:"hidden"})]})})};n.defaultProps={className:null,label:null,placeholder:null,InputLabelProps:null,inputProps:null,InputProps:null,required:!1,helperText:null,accept:null};n.propTypes={className:e.exports.string,control:e.exports.object.isRequired,name:e.exports.string.isRequired,label:e.exports.string,placeholder:e.exports.string,InputLabelProps:e.exports.object,inputProps:e.exports.object,InputProps:e.exports.object,required:e.exports.bool,helperText:e.exports.string,accept:e.exports.string};L.memo(n);
