import { a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';
import 'js-cookie';

const load = async ({ fetch, params, parent }) => {
  let url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
  console.log(url);
  const fetchDevice = fetch(url + "/svt_api/webhook?scope=get_device&id=" + params["id"], {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const fetchWifiLogs = fetch(url + "/svt_api/webhook?scope=get_wifi_logs&id=" + params["id"], {
    headers: {
      "Content-Type": "application/json"
    }
  });
  const [response1, response2] = await Promise.all([fetchDevice, fetchWifiLogs]);
  let deviceData = null;
  if (response1.ok) {
    deviceData = await response1.json();
    console.log(deviceData);
  }
  let wifiLogsData = null;
  if (response2.ok) {
    wifiLogsData = await response2.json();
    console.log(wifiLogsData);
  }
  return {
    id: params["id"],
    device: deviceData,
    wifi_time_logs: wifiLogsData
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-34a7c503.js')).default;
const universal_id = "src/routes/(main)/devices/[id]/+page.js";
const imports = ["_app/immutable/nodes/14.1d9c6156.js","_app/immutable/chunks/singletons.c44d92ae.js","_app/immutable/chunks/scheduler.a278e30b.js","_app/immutable/chunks/js.cookie.c4425e19.js","_app/immutable/chunks/index.bc19f21f.js","_app/immutable/chunks/DataCell.49b25c64.js","_app/immutable/chunks/Icon.c81b812b.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7922a51a.js","_app/immutable/chunks/Button.4181d088.js","_app/immutable/chunks/Input.c1ff2188.js","_app/immutable/chunks/Wrapper.d471eaa8.js","_app/immutable/chunks/DropdownItem.5e6dc328.js","_app/immutable/chunks/index.0132ad10.js","_app/immutable/chunks/SimpleTable.05b48a41.js","_app/immutable/chunks/stores.398c5acc.js","_app/immutable/chunks/Datatable.7d61f8f1.js"];
const stylesheets = ["_app/immutable/assets/14.a15f40e3.css","_app/immutable/assets/DataCell.5a08ab41.css","_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=14-2e9f6a1f.js.map
