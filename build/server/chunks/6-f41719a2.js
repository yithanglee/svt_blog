import { g as genInputs, b as buildQueryString } from './index3-3243cbac.js';
import { a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';
import './toast-d4caa2f7.js';
import './index2-c4ed6e43.js';
import './utils-7800a155.js';
import 'js-cookie';

const load = async ({ fetch, params, parent }) => {
  let url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
  let inputs = await genInputs(url, "RoleAppRoute");
  const queryString = buildQueryString({ scope: "get_role_app_routes", id: params["role_id"] });
  const response = await fetch(url + "/svt_api/webhook?" + queryString, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    let dataList = await response.json();
    return {
      dataList,
      role_id: params["role_id"],
      module: "RoleAppRoute",
      inputs
    };
  }
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-a5dc9d29.js')).default;
const universal_id = "src/routes/(main)/admin/role/[role_id]/app_routes2/+page.js";
const imports = ["_app/immutable/nodes/6.80866ffe.js","_app/immutable/chunks/index.0132ad10.js","_app/immutable/chunks/js.cookie.c4425e19.js","_app/immutable/chunks/singletons.c44d92ae.js","_app/immutable/chunks/scheduler.a278e30b.js","_app/immutable/chunks/index.bc19f21f.js","_app/immutable/chunks/Datatable.7d61f8f1.js","_app/immutable/chunks/Icon.c81b812b.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7922a51a.js","_app/immutable/chunks/DataCell.49b25c64.js","_app/immutable/chunks/Button.4181d088.js","_app/immutable/chunks/Input.c1ff2188.js","_app/immutable/chunks/Wrapper.d471eaa8.js","_app/immutable/chunks/DropdownItem.5e6dc328.js","_app/immutable/chunks/stores.398c5acc.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css","_app/immutable/assets/DataCell.5a08ab41.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-f41719a2.js.map
