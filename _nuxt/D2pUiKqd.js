const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CMLa0yv9.js","./DDV8MkC4.js","./entry.CBgqjE00.css","./CJ2pcGLP.js","./DuT0JJ6D.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{u as m}from"./DN49tXE9.js";import{Q as v,R as l,y as d,k as g,S as y,j as h,T as _,U as w,G as C,I as p}from"./DDV8MkC4.js";import{h as f,u as P}from"./DuT0JJ6D.js";import{q as $,w as c,e as x,s as N,j as T,u as j}from"./CJ2pcGLP.js";import{_ as E}from"./Cly01Tha.js";const S="$s";function R(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,o]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=S+n,r=v(),i=l(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(d(s))return r.payload.state[a]=s,s;i.value=s}return i}const b=async t=>{const{content:e}=g().public;typeof(t==null?void 0:t.params)!="function"&&(t=$(t));const n=t.params(),o=e.experimental.stripQueryParameters?c(`/navigation/${`${f(n)}.${e.integrity}`}/${x(n)}.json`):c(`/navigation/${f(n)}.${e.integrity}.json`);if(N())return(await y(()=>import("./CMLa0yv9.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(i=>i.generateNavigation))(n);const a=await $fetch(o,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:T(n),previewToken:P().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},D=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=_(t),n=w(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&R("dd-navigation").value){const{navigation:a}=j();return{navigation:a}}const{data:o}=await m(`content-navigation-${f(n.value)}`,()=>b(n.value));return{navigation:o}},render(t){const e=C(),{navigation:n}=t,o=i=>p(E,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):r(n)}}),G=D;export{G as default};
