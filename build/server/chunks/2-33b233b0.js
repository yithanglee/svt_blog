import { s as session } from './session-513d96fb.js';
import Cookies from 'js-cookie';
import { P as PHX_COOKIE, a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';
import './index-d7f43214.js';
import { i as isToastOpen } from './toast-d4caa2f7.js';
import './index2-c4ed6e43.js';
import './utils-7800a155.js';

async function load({ locals }) {
  console.log("check if this load 1");
  console.log(locals);
  let app_routes = [], user = { username: "Guest" }, needLogin = false;
  function relogin() {
    session.logout();
    Cookies.remove("user");
    Cookies.remove(PHX_COOKIE);
    needLogin = true;
  }
  let cookieToken = await Cookies.get(PHX_COOKIE);
  console.log("from main layout js");
  console.log(cookieToken);
  console.log(session.user());
  if (cookieToken != null) {
    const response = await fetch(PHX_HTTP_PROTOCOL + PHX_ENDPOINT + "/svt_api/webhook?scope=get_cookie_user&cookie=" + cookieToken, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.ok) {
      let res = await response.json();
      console.log(res);
      if (res != null) {
        session.login({
          username: res.user.username,
          token: cookieToken,
          role_app_routes: res.user.role.app_routes,
          id: res.user_id
        });
        app_routes = res.user.role.app_routes;
        user = res.user;
      } else {
        relogin();
        isToastOpen.notify("Close this window and re login!");
      }
    } else {
      relogin();
      isToastOpen.notify("Close this window and re login!");
    }
  } else {
    relogin();
    isToastOpen.notify("Close this window and re login!");
  }
  return {
    app_routes,
    user,
    needLogin
  };
}

var _layout = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-b41dc442.js')).default;
const universal_id = "src/routes/(main)/+layout.js";
const imports = ["_app/immutable/nodes/2.99e89759.js","_app/immutable/chunks/session.608d4848.js","_app/immutable/chunks/singletons.c44d92ae.js","_app/immutable/chunks/scheduler.a278e30b.js","_app/immutable/chunks/js.cookie.c4425e19.js","_app/immutable/chunks/index.bc19f21f.js","_app/immutable/chunks/Icon.c81b812b.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7922a51a.js","_app/immutable/chunks/index.0132ad10.js","_app/immutable/chunks/stores.398c5acc.js","_app/immutable/chunks/pageTitle.95703803.js","_app/immutable/chunks/Button.4181d088.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _layout as universal, universal_id };
//# sourceMappingURL=2-33b233b0.js.map
