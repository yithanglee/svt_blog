import{g as s,b as i}from"../chunks/index.0132ad10.js";import{b as d,c as l}from"../chunks/js.cookie.c4425e19.js";import{s as c}from"../chunks/scheduler.a278e30b.js";import{S as p,i as m,b as _,d as y,m as f,a as b,t as g,e as C}from"../chunks/index.bc19f21f.js";import{D as h}from"../chunks/Datatable.7d61f8f1.js";const P=async({fetch:o,params:e,parent:a})=>{let t=d+l,r=await s(t,"ProductCountry");const n=i({scope:"get_product_countries",id:e.product_id}),u=await o(t+"/svt_api/webhook?"+n,{headers:{"Content-Type":"application/json"}});if(u.ok)return{dataList:await u.json(),product_id:e.product_id,module:"ProductCountry",inputs:r}},j=Object.freeze(Object.defineProperty({__proto__:null,load:P},Symbol.toStringTag,{value:"Module"}));function w(o){let e,a;return e=new h({props:{data:{showNew:!0,canDelete:!0,appendQueries:{product_id:o[0].product_id},inputs:o[1],search_queries:null,model:"ProductCountry",preloads:["product","country"],customCols:[{title:"General",list:["id",{label:"Country",selection:"Country",multiSelection:!0,dataList:o[2].countries,module:"Country",parentId:o[0].product_id,parent_module:"ProductCountry"}]}],columns:[{label:"ID",data:"id"},{label:"Product",data:"name",through:["product"]},{label:"Country",data:"name",through:["country"]}]}}}),{c(){_(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,r){f(e,t,r),a=!0},p(t,[r]){const n={};r&1&&(n.data={showNew:!0,canDelete:!0,appendQueries:{product_id:t[0].product_id},inputs:t[1],search_queries:null,model:"ProductCountry",preloads:["product","country"],customCols:[{title:"General",list:["id",{label:"Country",selection:"Country",multiSelection:!0,dataList:t[2].countries,module:"Country",parentId:t[0].product_id,parent_module:"ProductCountry"}]}],columns:[{label:"ID",data:"id"},{label:"Product",data:"name",through:["product"]},{label:"Country",data:"name",through:["country"]}]}),e.$set(n)},i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){C(e,t)}}}function $(o,e,a){let{data:t}=e,r=t.inputs,n=t.dataList;return o.$$set=u=>{"data"in u&&a(0,t=u.data)},[t,r,n]}class q extends p{constructor(e){super(),m(this,e,$,w,c,{data:0})}}export{q as component,j as universal};
