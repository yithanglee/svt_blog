import{g as n}from"../chunks/index.0132ad10.js";import{b as r,c as s}from"../chunks/js.cookie.c4425e19.js";import{s as u}from"../chunks/scheduler.a278e30b.js";import{S as d,i as m,b,d as p,m as c,a as _,t as f,e as g}from"../chunks/index.bc19f21f.js";import"../chunks/singletons.c44d92ae.js";import{D as y}from"../chunks/Datatable.7d61f8f1.js";const k=async({fetch:l,params:a,parent:t})=>{var e=await t();let o=r+s;return{module:"Outlet",inputs:await n(o,"Outlet"),organization_id:e.user.organization_id}},$=Object.freeze(Object.defineProperty({__proto__:null,load:k},Symbol.toStringTag,{value:"Module"}));function z(l){let a,t;return a=new y({props:{data:{appendQueries:{organization_id:l[0].organization_id},showNew:!0,canDelete:!0,inputs:l[1],search_queries:["a.id"],model:"Outlet",preloads:["organization"],buttons:[],customCols:[{title:"General",list:["id","name",{label:"organization_id",hidden:!0,value:l[0].organization_id},{label:"price_per_minutes",alt_name:"Price/Minute",expose:!0},{label:"subdomain",expose:!0},{label:"uid",expose:!0},{label:"mcode",expose:!0},{label:"mkey",expose:!0},{label:"payment_gateway",selection:["RM","ipay88","fiuu"]},{label:"address",editor2:!0},"block_reason",{label:"is_blocked",boolean:!0}]}],columns:[{label:"ID",data:"id"},{label:"Name",data:"name",subtitle:{label:"address",data:"address"}},{label:"Subdomain",data:"subdomain"},{label:"Ref",data:"uid"},{label:"Timestamp",data:"inserted_at",formatDateTime:!0,offset:8},{label:"Blocked?",data:"is_blocked",isBadge:!0,color:[{key:!0,value:"red"},{key:!1,value:"green"}]}]}}}),{c(){b(a.$$.fragment)},l(e){p(a.$$.fragment,e)},m(e,o){c(a,e,o),t=!0},p(e,[o]){const i={};o&1&&(i.data={appendQueries:{organization_id:e[0].organization_id},showNew:!0,canDelete:!0,inputs:e[1],search_queries:["a.id"],model:"Outlet",preloads:["organization"],buttons:[],customCols:[{title:"General",list:["id","name",{label:"organization_id",hidden:!0,value:e[0].organization_id},{label:"price_per_minutes",alt_name:"Price/Minute",expose:!0},{label:"subdomain",expose:!0},{label:"uid",expose:!0},{label:"mcode",expose:!0},{label:"mkey",expose:!0},{label:"payment_gateway",selection:["RM","ipay88","fiuu"]},{label:"address",editor2:!0},"block_reason",{label:"is_blocked",boolean:!0}]}],columns:[{label:"ID",data:"id"},{label:"Name",data:"name",subtitle:{label:"address",data:"address"}},{label:"Subdomain",data:"subdomain"},{label:"Ref",data:"uid"},{label:"Timestamp",data:"inserted_at",formatDateTime:!0,offset:8},{label:"Blocked?",data:"is_blocked",isBadge:!0,color:[{key:!0,value:"red"},{key:!1,value:"green"}]}]}),a.$set(i)},i(e){t||(_(a.$$.fragment,e),t=!0)},o(e){f(a.$$.fragment,e),t=!1},d(e){g(a,e)}}}function v(l,a,t){let{data:e}=a,o=e.inputs;return l.$$set=i=>{"data"in i&&t(0,e=i.data)},[e,o]}class x extends d{constructor(a){super(),m(this,a,v,z,u,{data:0})}}export{x as component,$ as universal};