import{g as r}from"../chunks/index.0132ad10.js";import{b as s,c as i}from"../chunks/js.cookie.c4425e19.js";import{s as m,N as u}from"../chunks/scheduler.a278e30b.js";import{S as c,i as p,b as d,d as _,m as f,a as b,t as g,e as h}from"../chunks/index.bc19f21f.js";import{D as O}from"../chunks/Datatable.7d61f8f1.js";async function P(){let t=s+i;return{module:"User",inputs:await r(t,"User")}}const S=Object.freeze(Object.defineProperty({__proto__:null,load:P},Symbol.toStringTag,{value:"Module"}));function $(t){let a,n;return a=new O({props:{data:{showNew:!0,inputs:t[0],search_queries:null,model:"Staff",preloads:["role","organization"],customCols:[{title:"General",list:[{label:"name",expose:!0},{label:"username",expose:!0},{label:"password",expose:!0},{label:"role_id",selection:"Role",module:"Role",customCols:null,search_queries:["a.name"],newData:"name",title_key:"name"},{label:"organization_id",selection:"Organization",module:"Organization",customCols:null,search_queries:["a.name"],newData:"name",title_key:"name"},{label:"desc",editor2:!0},"phone","email","id"]}],columns:[{label:"ID",data:"id"},{label:"Username",data:"name"},{label:"Phone",data:"phone"},{label:"Email",data:"email"},{label:"Role",data:"name",through:["role"]}]}}}),{c(){d(a.$$.fragment)},l(e){_(a.$$.fragment,e)},m(e,o){f(a,e,o),n=!0},p:u,i(e){n||(b(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){h(a,e)}}}function w(t,a,n){let{data:e}=a,o=e.inputs;return t.$$set=l=>{"data"in l&&n(1,e=l.data)},[o,e]}class T extends c{constructor(a){super(),p(this,a,w,$,m,{data:1})}}export{T as component,S as universal};
