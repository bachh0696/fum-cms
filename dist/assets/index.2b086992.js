import{r as g}from"./index.da767aa3.js";var h=globalThis&&globalThis.__read||function(r,i){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var n=e.call(r),t,s=[],o;try{for(;(i===void 0||i-- >0)&&!(t=n.next()).done;)s.push(t.value)}catch(a){o={error:a}}finally{try{t&&!t.done&&(e=n.return)&&e.call(n)}finally{if(o)throw o.error}}return s};function y(r,i){r===void 0&&(r=!1);var e=h(g.exports.useState(r),2),n=e[0],t=e[1],s=g.exports.useMemo(function(){var o=i===void 0?!r:i,a=function(){return t(function(v){return v===r?o:r})},f=function(v){return t(v)},u=function(){return t(r)},l=function(){return t(o)};return{toggle:a,set:f,setLeft:u,setRight:l}},[]);return[n,s]}var _=globalThis&&globalThis.__read||function(r,i){var e=typeof Symbol=="function"&&r[Symbol.iterator];if(!e)return r;var n=e.call(r),t,s=[],o;try{for(;(i===void 0||i-- >0)&&!(t=n.next()).done;)s.push(t.value)}catch(a){o={error:a}}finally{try{t&&!t.done&&(e=n.return)&&e.call(n)}finally{if(o)throw o.error}}return s};function b(r){r===void 0&&(r=!1);var i=_(y(r),2),e=i[0],n=i[1],t=n.toggle,s=n.set,o=g.exports.useMemo(function(){var a=function(){return s(!0)},f=function(){return s(!1)};return{toggle:t,set:function(l){return s(!!l)},setTrue:a,setFalse:f}},[]);return[e,o]}export{b as u};
