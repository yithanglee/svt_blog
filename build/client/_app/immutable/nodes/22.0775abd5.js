import{g as c,p as _}from"../chunks/index.0132ad10.js";import{b as s,c as u}from"../chunks/js.cookie.c4425e19.js";import{s as f}from"../chunks/scheduler.a278e30b.js";import{S as g,i as b,b as y,d as v,m as k,a as h,t as O,e as S}from"../chunks/index.bc19f21f.js";import{D as w}from"../chunks/Datatable.7d61f8f1.js";const D=async({fetch:a,params:t,parent:n})=>{var e=await n();let l=s+u;return{module:"Sale",inputs:await c(l,"Sale"),organization_id:e.user.organization_id}},R=Object.freeze(Object.defineProperty({__proto__:null,load:D},Symbol.toStringTag,{value:"Module"}));function T(a){let t,n;return t=new w({props:{data:{canDelete:!0,appendQueries:{organization_id:a[0].organization_id},inputs:a[1],join_statements:JSON.stringify([{device:"device"}]),search_queries:["a.id|b.name"],model:"Sale",preloads:["device","outlet"],buttons:[{name:"Manual Approve (R M)",onclickFn:a[2],showCondition:r}],customCols:[{title:"Order",list:["id",{label:"status",selection:["processing","sent","pending_delivery","complete","cancelled"]},"remarks"]},{title:"Others",list:["total_point_value",{label:"payment_webhook",editor2:!0}]}],columns:[{label:"ID",data:"id"},{label:"Outlet",data:"name",through:["outlet"]},{label:"Timestamp",data:"inserted_at",formatDateTime:!0,offset:8},{label:"Sale Date",data:"sales_date"},{label:"Ref",data:"payment_ref"},{label:"Amount",data:"amount"},{label:"Status",data:"status",isBadge:!0,color:[{key:"pending_payment",value:"yellow"},{key:"pending_confirmation",value:"yellow"},{key:"processing",value:"blue"},{key:"sent",value:"pink"},{key:"pending_delivery",value:"purple"},{key:"complete",value:"green"}]}]}}}),{c(){y(t.$$.fragment)},l(e){v(t.$$.fragment,e)},m(e,l){k(t,e,l),n=!0},p(e,[l]){const o={};l&1&&(o.data={canDelete:!0,appendQueries:{organization_id:e[0].organization_id},inputs:e[1],join_statements:JSON.stringify([{device:"device"}]),search_queries:["a.id|b.name"],model:"Sale",preloads:["device","outlet"],buttons:[{name:"Manual Approve (R M)",onclickFn:e[2],showCondition:r}],customCols:[{title:"Order",list:["id",{label:"status",selection:["processing","sent","pending_delivery","complete","cancelled"]},"remarks"]},{title:"Others",list:["total_point_value",{label:"payment_webhook",editor2:!0}]}],columns:[{label:"ID",data:"id"},{label:"Outlet",data:"name",through:["outlet"]},{label:"Timestamp",data:"inserted_at",formatDateTime:!0,offset:8},{label:"Sale Date",data:"sales_date"},{label:"Ref",data:"payment_ref"},{label:"Amount",data:"amount"},{label:"Status",data:"status",isBadge:!0,color:[{key:"pending_payment",value:"yellow"},{key:"pending_confirmation",value:"yellow"},{key:"processing",value:"blue"},{key:"sent",value:"pink"},{key:"pending_delivery",value:"purple"},{key:"complete",value:"green"}]}]}),t.$set(o)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){O(t.$$.fragment,e),n=!1},d(e){S(t,e)}}}function r(a){var t=!1;if(a.payment_webhook==null)return t;if(a.payment_ref!=null){if(a.status!="pending_payment")return!1;t=!0}return t}function $(a,t,n){let{data:e}=t,l=e.inputs;var o=s+u;function p(i,d,m){console.log(i),console.log("transfer approved!"),m(!0,"Are you sure to manually approve this sale?",()=>{_({scope:"manual_approve_fpx",id:i.payment_ref},{endpoint:o+"/svt_api/webhook",successCallback:()=>{d()}})})}return a.$$set=i=>{"data"in i&&n(0,e=i.data)},[e,l,p]}class j extends g{constructor(t){super(),b(this,t,$,T,f,{data:0})}}export{j as component,R as universal};