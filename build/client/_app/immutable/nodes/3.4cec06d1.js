import{s as X,r as Q,u as me,O as de,w as G,x as U,z as ge,f as w,a as L,g as $,c as q,F as Z,i as x,Y as pe,H as _,T as he,A as _e,B as ke,C as be,d as k,Q as ye,y as b,h as Y,j as M,G as y,Z as ve,E as D,N as ee,l as te,m as ne}from"../chunks/scheduler.f417f79b.js";import{S as se,i as ae,b as T,d as E,m as P,a as N,t as S,e as A}from"../chunks/index.8ede18d1.js";import{a as Ce,s as we,g as $e}from"../chunks/js.cookie.6efd98c7.js";import{B as xe}from"../chunks/Button.6dee57fd.js";import{C as Ie}from"../chunks/Card.7c289071.js";import{t as z,g as Le}from"../chunks/Indicator.svelte_svelte_type_style_lang.7922a51a.js";import{L as J,I as re}from"../chunks/Input.2343a75c.js";const qe={primary:"text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600",secondary:"text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600",red:"text-red-600 focus:ring-red-500 dark:focus:ring-red-600",green:"text-green-600 focus:ring-green-500 dark:focus:ring-green-600",purple:"text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",teal:"text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",yellow:"text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",orange:"text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",blue:"text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"},K=(n,e)=>z(n?"inline-flex":"flex","items-center",e);let Ne="mr-2";const W=(n,e,t,s,o)=>z("w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",Ne,s?"dark:bg-gray-600 dark:border-gray-500":"dark:bg-gray-700 dark:border-gray-600",n&&"sr-only peer",t&&"rounded",qe[e],o);function Se(n){let e,t,s,o,u,l,i,p=[{type:"checkbox"},{__value:n[5]},n[12],{class:t=z(n[6],W(n[3],n[2],!0,n[7],n[11].default||n[10].class))}],d={};for(let a=0;a<p.length;a+=1)d=G(d,p[a]);const h=n[13].default,c=ge(h,n,n[26],null);return{c(){e=w("input"),o=L(),c&&c.c(),this.h()},l(a){e=$(a,"INPUT",{type:!0,class:!0}),o=q(a),c&&c.l(a),this.h()},h(){Z(e,d)},m(a,f){x(a,e,f),e.autofocus&&e.focus(),e.checked=n[1],x(a,o,f),c&&c.m(a,f),u=!0,l||(i=[pe(s=n[8].call(null,e,n[0])),_(e,"change",n[25]),_(e,"keyup",n[14]),_(e,"keydown",n[15]),_(e,"keypress",n[16]),_(e,"focus",n[17]),_(e,"blur",n[18]),_(e,"click",n[19]),_(e,"mouseover",n[20]),_(e,"mouseenter",n[21]),_(e,"mouseleave",n[22]),_(e,"paste",n[23]),_(e,"change",n[9]),_(e,"change",n[24])],l=!0)},p(a,f){Z(e,d=Le(p,[{type:"checkbox"},(!u||f&32)&&{__value:a[5]},f&4096&&a[12],(!u||f&3148&&t!==(t=z(a[6],W(a[3],a[2],!0,a[7],a[11].default||a[10].class))))&&{class:t}])),s&&he(s.update)&&f&1&&s.update.call(null,a[0]),f&2&&(e.checked=a[1]),c&&c.p&&(!u||f&67108864)&&_e(c,h,a,a[26],u?be(h,a[26],f,null):ke(a[26]),null)},i(a){u||(N(c,a),u=!0)},o(a){S(c,a),u=!1},d(a){a&&(k(e),k(o)),c&&c.d(a),l=!1,ye(i)}}}function Te(n){let e,t;return e=new J({props:{class:K(n[4],n[10].class),show:n[11].default,$$slots:{default:[Se]},$$scope:{ctx:n}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,o){P(e,s,o),t=!0},p(s,[o]){const u={};o&1040&&(u.class=K(s[4],s[10].class)),o&2048&&(u.show=s[11].default),o&67116143&&(u.$$scope={dirty:o,ctx:s}),e.$set(u)},i(s){t||(N(e.$$.fragment,s),t=!0)},o(s){S(e.$$.fragment,s),t=!1},d(s){A(e,s)}}}function Ee(n,e,t){const s=["color","custom","inline","group","value","checked","spacing"];let o=Q(e,s),{$$slots:u={},$$scope:l}=e;const i=me(u);let{color:p="primary"}=e,{custom:d=!1}=e,{inline:h=!1}=e,{group:c=[]}=e,{value:a="on"}=e,{checked:f=void 0}=e,{spacing:H="mr-2"}=e,v=de("background");function B(r,ce){return f===void 0&&t(1,f=ce.includes(a)),C(),{update(fe){t(1,f=fe.includes(a))}}}function C(){const r=c.indexOf(a);f===void 0&&t(1,f=r>=0),f?r<0&&(c.push(a),t(0,c)):r>=0&&(c.splice(r,1),t(0,c))}function R(r){b.call(this,n,r)}function O(r){b.call(this,n,r)}function g(r){b.call(this,n,r)}function m(r){b.call(this,n,r)}function I(r){b.call(this,n,r)}function V(r){b.call(this,n,r)}function j(r){b.call(this,n,r)}function F(r){b.call(this,n,r)}function le(r){b.call(this,n,r)}function oe(r){b.call(this,n,r)}function ue(r){b.call(this,n,r)}function ie(){f=this.checked,t(1,f)}return n.$$set=r=>{t(10,e=G(G({},e),U(r))),t(12,o=Q(e,s)),"color"in r&&t(2,p=r.color),"custom"in r&&t(3,d=r.custom),"inline"in r&&t(4,h=r.inline),"group"in r&&t(0,c=r.group),"value"in r&&t(5,a=r.value),"checked"in r&&t(1,f=r.checked),"spacing"in r&&t(6,H=r.spacing),"$$scope"in r&&t(26,l=r.$$scope)},e=U(e),[c,f,p,d,h,a,H,v,B,C,e,i,o,u,R,O,g,m,I,V,j,F,le,oe,ue,ie,l]}class Pe extends se{constructor(e){super(),ae(this,e,Ee,Te,X,{color:2,custom:3,inline:4,group:0,value:5,checked:1,spacing:6})}}function Ae(n){let e,t="Email",s,o,u;return o=new re({props:{type:"email",value:"d@1.com",name:"email",placeholder:"name@company.com",required:!0}}),{c(){e=w("span"),e.textContent=t,s=L(),T(o.$$.fragment)},l(l){e=$(l,"SPAN",{"data-svelte-h":!0}),D(e)!=="svelte-1bg9cgq"&&(e.textContent=t),s=q(l),E(o.$$.fragment,l)},m(l,i){x(l,e,i),x(l,s,i),P(o,l,i),u=!0},p:ee,i(l){u||(N(o.$$.fragment,l),u=!0)},o(l){S(o.$$.fragment,l),u=!1},d(l){l&&(k(e),k(s)),A(o,l)}}}function Me(n){let e,t="Your password",s,o,u;return o=new re({props:{type:"password",value:"123",name:"password",placeholder:"•••••",required:!0}}),{c(){e=w("span"),e.textContent=t,s=L(),T(o.$$.fragment)},l(l){e=$(l,"SPAN",{"data-svelte-h":!0}),D(e)!=="svelte-1nyqqaq"&&(e.textContent=t),s=q(l),E(o.$$.fragment,l)},m(l,i){x(l,e,i),x(l,s,i),P(o,l,i),u=!0},p:ee,i(l){u||(N(o.$$.fragment,l),u=!0)},o(l){S(o.$$.fragment,l),u=!1},d(l){l&&(k(e),k(s)),A(o,l)}}}function He(n){let e;return{c(){e=te("Remember me")},l(t){e=ne(t,"Remember me")},m(t,s){x(t,e,s)},d(t){t&&k(e)}}}function Oe(n){let e;return{c(){e=te("Login to your account")},l(t){e=ne(t,"Login to your account")},m(t,s){x(t,e,s)},d(t){t&&k(e)}}}function Be(n){let e,t,s="Sign in to our platform",o,u,l,i,p,d,h,c,a,f="Lost password?",H,v,B,C,R='Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a>',O;return u=new J({props:{class:"space-y-2",$$slots:{default:[Ae]},$$scope:{ctx:n}}}),i=new J({props:{class:"space-y-2",$$slots:{default:[Me]},$$scope:{ctx:n}}}),h=new Pe({props:{$$slots:{default:[He]},$$scope:{ctx:n}}}),v=new xe({props:{type:"submit",class:"w-full",$$slots:{default:[Oe]},$$scope:{ctx:n}}}),{c(){e=w("div"),t=w("h3"),t.textContent=s,o=L(),T(u.$$.fragment),l=L(),T(i.$$.fragment),p=L(),d=w("div"),T(h.$$.fragment),c=L(),a=w("a"),a.textContent=f,H=L(),T(v.$$.fragment),B=L(),C=w("div"),C.innerHTML=R,this.h()},l(g){e=$(g,"DIV",{class:!0});var m=Y(e);t=$(m,"H3",{class:!0,"data-svelte-h":!0}),D(t)!=="svelte-wwn3rw"&&(t.textContent=s),o=q(m),E(u.$$.fragment,m),l=q(m),E(i.$$.fragment,m),p=q(m),d=$(m,"DIV",{class:!0});var I=Y(d);E(h.$$.fragment,I),c=q(I),a=$(I,"A",{href:!0,class:!0,"data-svelte-h":!0}),D(a)!=="svelte-1relpkp"&&(a.textContent=f),I.forEach(k),H=q(m),E(v.$$.fragment,m),B=q(m),C=$(m,"DIV",{class:!0,"data-svelte-h":!0}),D(C)!=="svelte-53bb0x"&&(C.innerHTML=R),m.forEach(k),this.h()},h(){M(t,"class","text-xl font-medium text-gray-900 dark:text-white"),M(a,"href","/"),M(a,"class","ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500"),M(d,"class","flex items-start"),M(C,"class","text-sm font-medium text-gray-500 dark:text-gray-300"),M(e,"class","flex flex-col space-y-6")},m(g,m){x(g,e,m),y(e,t),y(e,o),P(u,e,null),y(e,l),P(i,e,null),y(e,p),y(e,d),P(h,d,null),y(d,c),y(d,a),y(e,H),P(v,e,null),y(e,B),y(e,C),O=!0},p(g,m){const I={};m&2&&(I.$$scope={dirty:m,ctx:g}),u.$set(I);const V={};m&2&&(V.$$scope={dirty:m,ctx:g}),i.$set(V);const j={};m&2&&(j.$$scope={dirty:m,ctx:g}),h.$set(j);const F={};m&2&&(F.$$scope={dirty:m,ctx:g}),v.$set(F)},i(g){O||(N(u.$$.fragment,g),N(i.$$.fragment,g),N(h.$$.fragment,g),N(v.$$.fragment,g),O=!0)},o(g){S(u.$$.fragment,g),S(i.$$.fragment,g),S(h.$$.fragment,g),S(v.$$.fragment,g),O=!1},d(g){g&&k(e),A(u),A(i),A(h),A(v)}}}function De(n){let e,t,s,o,u,l;return s=new Ie({props:{class:"w-full max-w-md",$$slots:{default:[Be]},$$scope:{ctx:n}}}),{c(){e=w("main"),t=w("form"),T(s.$$.fragment),this.h()},l(i){e=$(i,"MAIN",{});var p=Y(e);t=$(p,"FORM",{class:!0});var d=Y(t);E(s.$$.fragment,d),d.forEach(k),p.forEach(k),this.h()},h(){M(t,"class","flex justify-center")},m(i,p){x(i,e,p),y(e,t),P(s,t,null),o=!0,u||(l=_(t,"submit",ve(n[0])),u=!0)},p(i,[p]){const d={};p&2&&(d.$$scope={dirty:p,ctx:i}),s.$set(d)},i(i){o||(N(s.$$.fragment,i),o=!0)},o(i){S(s.$$.fragment,i),o=!1},d(i){i&&k(e),A(s),u=!1,l()}}}function Re(n){async function e(){const t={id:1,username:"example_user"};await new Promise(s=>setTimeout(s,1e3)),localStorage.setItem("userToken","exampleToken"),Ce.set("user",JSON.stringify(t)),we.login(t),$e("/dashboard")}return[e]}class Qe extends se{constructor(e){super(),ae(this,e,Re,De,X,{})}}export{Qe as component};
