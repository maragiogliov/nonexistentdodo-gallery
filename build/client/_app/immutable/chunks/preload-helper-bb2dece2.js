import{E as a,s as m}from"./index-c404bad3.js";const l=[];function E(n,s=a){let o;const i=new Set;function t(e){if(m(n,e)&&(n=e,o)){const u=!l.length;for(const r of i)r[1](),l.push(r,n);if(u){for(let r=0;r<l.length;r+=2)l[r][0](l[r+1]);l.length=0}}}function c(e){t(e(n))}function f(e,u=a){const r=[e,u];return i.add(r),i.size===1&&(o=s(t)||a),e(n),()=>{i.delete(r),i.size===0&&(o(),o=null)}}return{set:t,update:c,subscribe:f}}const h=function(){const s=document.createElement("link").relList;return s&&s.supports&&s.supports("modulepreload")?"modulepreload":"preload"}(),p=function(n){return"/"+n},d={},S=function(s,o,i){return!o||o.length===0?s():Promise.all(o.map(t=>{if(t=p(t),t in d)return;d[t]=!0;const c=t.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${f}`))return;const e=document.createElement("link");if(e.rel=c?"stylesheet":h,c||(e.as="script",e.crossOrigin=""),e.href=t,document.head.appendChild(e),c)return new Promise((u,r)=>{e.addEventListener("load",u),e.addEventListener("error",()=>r(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s())};export{S as _,E as w};
