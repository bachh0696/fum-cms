System.register(["./index-legacy.ef50d871.js"],(function(e,r){"use strict";var l,t,n,o,s,p,i,a,c,u,d,m,x;return{setters:[e=>{l=e.Y,t=e.R,n=e.a,o=e.r,s=e.Z,p=e.c,i=e.i,a=e.j,c=e.J,u=e.O,d=e.W,m=e._,x=e.X}],execute:function(){const e=e=>{const{className:r,control:l,name:t,label:h,placeholder:f,fileType:b,InputLabelProps:P,inputProps:g,InputProps:y,required:I,helperText:j,accept:q,isPreview:v=!1,multiple:T,...N}=e,{t:R}=n("common"),k=o.exports.useRef(),{field:{onChange:C,value:L,ref:_},fieldState:{error:S}}=s({name:t,control:l}),[O,W]=o.exports.useState(null),w=o.exports.useCallback((async e=>{const{files:r}=e.target;console.log("============= file",r[0]),r[0]&&(W(r[0]),C(r[0]))}),[R]);return p(i,{className:r,children:a(c,{children:[p(u,{fullWidth:!0,label:h,placeholder:f||R("form.input_file_empty"),value:L?.name??null,inputRef:_,error:!!S,helperText:S&&S.message||j||void 0,InputLabelProps:{shrink:!!f||void 0,required:I,...P},inputProps:{...g},InputProps:{endAdornment:p(d,{position:"end",children:p(m,{color:"primary",onClick:()=>{k.current.click()},children:p(x,{children:"cloud_upload"})})}),readOnly:!0,...y},...N}),p("input",{type:"file",accept:q,ref:k,onChange:w,className:"hidden"})]})})};e.defaultProps={className:null,label:null,placeholder:null,InputLabelProps:null,inputProps:null,InputProps:null,required:!1,helperText:null,accept:null},e.propTypes={className:l.exports.string,control:l.exports.object.isRequired,name:l.exports.string.isRequired,label:l.exports.string,placeholder:l.exports.string,InputLabelProps:l.exports.object,inputProps:l.exports.object,InputProps:l.exports.object,required:l.exports.bool,helperText:l.exports.string,accept:l.exports.string},t.memo(e)}}}));
