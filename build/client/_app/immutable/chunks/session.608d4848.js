import{w as l}from"./singletons.c44d92ae.js";function t(){var r={user:null,loggedIn:!1,token:null};const{subscribe:o,set:u,update:s}=l(r);return{subscribe:o,set:u,login:e=>s(n=>(console.log(n),{...n,loggedIn:!0,user:e})),logout:()=>s(e=>({...e,loggedIn:!1,user:null})),user:()=>r.user}}const g=t();export{g as s};