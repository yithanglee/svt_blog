import{s as ee,f as P,a as T,l as N,g as S,c as I,h as B,m as q,d as m,U as te,j as M,i as g,G as E,n as O,E as U,H as le,Z as ae,e as H,p as F,_ as Q,X as se}from"../chunks/scheduler.f417f79b.js";import{S as ne,i as re,b as v,d as w,m as k,a as d,t as h,e as y,g as Z,c as J,h as W}from"../chunks/index.8ede18d1.js";import{e as V}from"../chunks/each.e59479a4.js";import{P as A}from"../chunks/constants.387862d7.js";import{B as oe}from"../chunks/Button.6dee57fd.js";import{C as fe}from"../chunks/Card.7c289071.js";import"../chunks/Indicator.svelte_svelte_type_style_lang.7922a51a.js";import{L,I as Y}from"../chunks/Input.2343a75c.js";import{T as ue,a as $e,b as ce,c as ie,d as G,e as pe,f as K}from"../chunks/index.1e982a02.js";async function me(){return{}}const Oe=Object.freeze(Object.defineProperty({__proto__:null,load:me},Symbol.toStringTag,{value:"Module"}));function R(u,e,n){const t=u.slice();return t[10]=e[n],t}function _e(u){let e;return{c(){e=N("Key")},l(n){e=q(n,"Key")},m(n,t){g(n,e,t)},d(n){n&&m(e)}}}function de(u){let e;return{c(){e=N("Value")},l(n){e=q(n,"Value")},m(n,t){g(n,e,t)},d(n){n&&m(e)}}}function ge(u){let e,n,t,l;return e=new G({props:{$$slots:{default:[_e]},$$scope:{ctx:u}}}),t=new G({props:{$$slots:{default:[de]},$$scope:{ctx:u}}}),{c(){v(e.$$.fragment),n=T(),v(t.$$.fragment)},l(s){w(e.$$.fragment,s),n=I(s),w(t.$$.fragment,s)},m(s,a){k(e,s,a),g(s,n,a),k(t,s,a),l=!0},p(s,a){const o={};a&8192&&(o.$$scope={dirty:a,ctx:s}),e.$set(o);const f={};a&8192&&(f.$$scope={dirty:a,ctx:s}),t.$set(f)},i(s){l||(d(e.$$.fragment,s),d(t.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),h(t.$$.fragment,s),l=!1},d(s){s&&m(n),y(e,s),y(t,s)}}}function X(u){let e,n,t=V(u[0]),l=[];for(let a=0;a<t.length;a+=1)l[a]=z(R(u,t,a));const s=a=>h(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=H()},l(a){for(let o=0;o<l.length;o+=1)l[o].l(a);e=H()},m(a,o){for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(a,o);g(a,e,o),n=!0},p(a,o){if(o&1){t=V(a[0]);let f;for(f=0;f<t.length;f+=1){const r=R(a,t,f);l[f]?(l[f].p(r,o),d(l[f],1)):(l[f]=z(r),l[f].c(),d(l[f],1),l[f].m(e.parentNode,e))}for(Z(),f=t.length;f<l.length;f+=1)s(f);J()}},i(a){if(!n){for(let o=0;o<t.length;o+=1)d(l[o]);n=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)h(l[o]);n=!1},d(a){a&&m(e),se(l,a)}}}function he(u){let e=u[10].key+"",n;return{c(){n=N(e)},l(t){n=q(t,e)},m(t,l){g(t,n,l)},p(t,l){l&1&&e!==(e=t[10].key+"")&&O(n,e)},d(t){t&&m(n)}}}function be(u){let e=u[10].value+"",n;return{c(){n=N(e)},l(t){n=q(t,e)},m(t,l){g(t,n,l)},p(t,l){l&1&&e!==(e=t[10].value+"")&&O(n,e)},d(t){t&&m(n)}}}function ve(u){let e,n,t,l,s;return e=new K({props:{$$slots:{default:[he]},$$scope:{ctx:u}}}),t=new K({props:{$$slots:{default:[be]},$$scope:{ctx:u}}}),{c(){v(e.$$.fragment),n=T(),v(t.$$.fragment),l=T()},l(a){w(e.$$.fragment,a),n=I(a),w(t.$$.fragment,a),l=I(a)},m(a,o){k(e,a,o),g(a,n,o),k(t,a,o),g(a,l,o),s=!0},p(a,o){const f={};o&8193&&(f.$$scope={dirty:o,ctx:a}),e.$set(f);const r={};o&8193&&(r.$$scope={dirty:o,ctx:a}),t.$set(r)},i(a){s||(d(e.$$.fragment,a),d(t.$$.fragment,a),s=!0)},o(a){h(e.$$.fragment,a),h(t.$$.fragment,a),s=!1},d(a){a&&(m(n),m(l)),y(e,a),y(t,a)}}}function z(u){let e,n;return e=new pe({props:{$$slots:{default:[ve]},$$scope:{ctx:u}}}),{c(){v(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,l){k(e,t,l),n=!0},p(t,l){const s={};l&8193&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){h(e.$$.fragment,t),n=!1},d(t){y(e,t)}}}function we(u){let e,n,t=u[0].length>0&&X(u);return{c(){t&&t.c(),e=H()},l(l){t&&t.l(l),e=H()},m(l,s){t&&t.m(l,s),g(l,e,s),n=!0},p(l,s){l[0].length>0?t?(t.p(l,s),s&1&&d(t,1)):(t=X(l),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(Z(),h(t,1,1,()=>{t=null}),J())},i(l){n||(d(t),n=!0)},o(l){h(t),n=!1},d(l){l&&m(e),t&&t.d(l)}}}function ke(u){let e,n,t,l;return e=new $e({props:{$$slots:{default:[ge]},$$scope:{ctx:u}}}),t=new ce({props:{class:"divide-y",$$slots:{default:[we]},$$scope:{ctx:u}}}),{c(){v(e.$$.fragment),n=T(),v(t.$$.fragment)},l(s){w(e.$$.fragment,s),n=I(s),w(t.$$.fragment,s)},m(s,a){k(e,s,a),g(s,n,a),k(t,s,a),l=!0},p(s,a){const o={};a&8192&&(o.$$scope={dirty:a,ctx:s}),e.$set(o);const f={};a&8193&&(f.$$scope={dirty:a,ctx:s}),t.$set(f)},i(s){l||(d(e.$$.fragment,s),d(t.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),h(t.$$.fragment,s),l=!1},d(s){s&&m(n),y(e,s),y(t,s)}}}function ye(u){let e,n="Url",t,l,s,a;function o(r){u[7](r)}let f={type:"text",name:"url",placeholder:"User",required:!0};return u[3]!==void 0&&(f.value=u[3]),l=new Y({props:f}),F.push(()=>W(l,"value",o)),{c(){e=P("span"),e.textContent=n,t=T(),v(l.$$.fragment)},l(r){e=S(r,"SPAN",{"data-svelte-h":!0}),U(e)!=="svelte-4232dx"&&(e.textContent=n),t=I(r),w(l.$$.fragment,r)},m(r,c){g(r,e,c),g(r,t,c),k(l,r,c),a=!0},p(r,c){const b={};!s&&c&8&&(s=!0,b.value=r[3],Q(()=>s=!1)),l.$set(b)},i(r){a||(d(l.$$.fragment,r),a=!0)},o(r){h(l.$$.fragment,r),a=!1},d(r){r&&(m(e),m(t)),y(l,r)}}}function Ce(u){let e,n="Model",t,l,s,a;function o(r){u[8](r)}let f={type:"text",name:"module",placeholder:"User",required:!0};return u[1]!==void 0&&(f.value=u[1]),l=new Y({props:f}),F.push(()=>W(l,"value",o)),{c(){e=P("span"),e.textContent=n,t=T(),v(l.$$.fragment)},l(r){e=S(r,"SPAN",{"data-svelte-h":!0}),U(e)!=="svelte-1m5u4hd"&&(e.textContent=n),t=I(r),w(l.$$.fragment,r)},m(r,c){g(r,e,c),g(r,t,c),k(l,r,c),a=!0},p(r,c){const b={};!s&&c&2&&(s=!0,b.value=r[1],Q(()=>s=!1)),l.$set(b)},i(r){a||(d(l.$$.fragment,r),a=!0)},o(r){h(l.$$.fragment,r),a=!1},d(r){r&&(m(e),m(t)),y(l,r)}}}function Te(u){let e;return{c(){e=N("Check")},l(n){e=q(n,"Check")},m(n,t){g(n,e,t)},d(n){n&&m(e)}}}function Ie(u){let e,n,t="Model Columns Info",l,s,a,o,f,r,c,b,j;return s=new L({props:{class:"space-y-2",$$slots:{default:[ye]},$$scope:{ctx:u}}}),o=new L({props:{class:"space-y-2",$$slots:{default:[Ce]},$$scope:{ctx:u}}}),r=new oe({props:{type:"submit",class:"w-full",$$slots:{default:[Te]},$$scope:{ctx:u}}}),{c(){e=P("form"),n=P("h3"),n.textContent=t,l=T(),v(s.$$.fragment),a=T(),v(o.$$.fragment),f=T(),v(r.$$.fragment),this.h()},l($){e=S($,"FORM",{class:!0,action:!0});var i=B(e);n=S(i,"H3",{class:!0,"data-svelte-h":!0}),U(n)!=="svelte-rb0rem"&&(n.textContent=t),l=I(i),w(s.$$.fragment,i),a=I(i),w(o.$$.fragment,i),f=I(i),w(r.$$.fragment,i),i.forEach(m),this.h()},h(){M(n,"class","text-xl font-medium text-gray-900 dark:text-white"),M(e,"class","flex flex-col space-y-6"),M(e,"action","javascript:void(0);")},m($,i){g($,e,i),E(e,n),E(e,l),k(s,e,null),E(e,a),k(o,e,null),E(e,f),k(r,e,null),c=!0,b||(j=le(e,"submit",ae(u[5])),b=!0)},p($,i){const p={};i&8200&&(p.$$scope={dirty:i,ctx:$}),s.$set(p);const _={};i&8194&&(_.$$scope={dirty:i,ctx:$}),o.$set(_);const C={};i&8192&&(C.$$scope={dirty:i,ctx:$}),r.$set(C)},i($){c||(d(s.$$.fragment,$),d(o.$$.fragment,$),d(r.$$.fragment,$),c=!0)},o($){h(s.$$.fragment,$),h(o.$$.fragment,$),h(r.$$.fragment,$),c=!1},d($){$&&m(e),y(s),y(o),y(r),b=!1,j()}}}function je(u){let e,n,t,l,s,a,o,f,r,c,b,j,$,i;return c=new ue({props:{$$slots:{default:[ke]},$$scope:{ctx:u}}}),$=new fe({props:{class:"w-full max-w-md ",$$slots:{default:[Ie]},$$scope:{ctx:u}}}),{c(){e=P("img"),t=T(),l=P("div"),s=P("div"),a=P("h1"),o=N("Model: "),f=N(u[2]),r=T(),v(c.$$.fragment),b=T(),j=P("div"),v($.$$.fragment),this.h()},l(p){e=S(p,"IMG",{src:!0}),t=I(p),l=S(p,"DIV",{class:!0});var _=B(l);s=S(_,"DIV",{class:!0});var C=B(s);a=S(C,"H1",{class:!0});var D=B(a);o=q(D,"Model: "),f=q(D,u[2]),D.forEach(m),r=I(C),w(c.$$.fragment,C),C.forEach(m),b=I(_),j=S(_,"DIV",{class:!0});var x=B(j);w($.$$.fragment,x),x.forEach(m),_.forEach(m),this.h()},h(){te(e.src,n=u[4])||M(e,"src",n),M(a,"class","my-4 dark:text-white"),M(s,"class","col-span-8 mx-4"),M(j,"class","col-span-4 mx-4"),M(l,"class","grid grid-cols-12")},m(p,_){g(p,e,_),g(p,t,_),g(p,l,_),E(l,s),E(s,a),E(a,o),E(a,f),E(s,r),k(c,s,null),E(l,b),E(l,j),k($,j,null),i=!0},p(p,[_]){(!i||_&4)&&O(f,p[2]);const C={};_&8193&&(C.$$scope={dirty:_,ctx:p}),c.$set(C);const D={};_&8202&&(D.$$scope={dirty:_,ctx:p}),$.$set(D)},i(p){i||(d(c.$$.fragment,p),d($.$$.fragment,p),i=!0)},o(p){h(c.$$.fragment,p),h($.$$.fragment,p),i=!1},d(p){p&&(m(e),m(t),m(l)),y(c),y($)}}}function De(u,e,n){let t="http://"+A+"/mjpeg_stream_6.mp4",{data:l}=e,s=[{key:"id",value:"int"}],a="",o="";var f="http://"+A;function r($){n(0,s=[...s,$])}async function c(){n(2,o=a),n(0,s=[]);const i=ie({scope:"gen_inputs",module:a}),p=await fetch(f+`/api/webhook?${i}`,{headers:{"Content-Type":"application/json"}});if(p.ok){let _=await p.json(),C=Object.keys(_);C.sort((D,x)=>D.localeCompare(x)),C.forEach((D,x)=>{r({key:D,value:_[D]})}),console.log(s),n(1,a="")}else n(2,o="Not available"),console.error("API request failed")}function b($){f=$,n(3,f)}function j($){a=$,n(1,a)}return u.$$set=$=>{"data"in $&&n(6,l=$.data)},[s,a,o,f,t,c,l,b,j]}class Ue extends ne{constructor(e){super(),re(this,e,De,je,ee,{data:6})}}export{Ue as component,Oe as universal};
