import { g as genInputs } from './index3-3243cbac.js';
import { a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';
import './toast-d4caa2f7.js';
import './index2-c4ed6e43.js';
import './utils-7800a155.js';
import 'js-cookie';

const load = async ({ fetch, params, parent }) => {
  var map = await parent();
  let url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
  var columns = [
    { label: "Year", data: "year" },
    { label: "Outlet", data: "outlet" },
    { label: "Transactions", data: "transactions" },
    { label: "Amount (RM)", data: "amount" },
    { label: "Device", data: "device", subtitle: { label: "Long", data: "device_long" } }
  ];
  function getDaysInCurrentMonth() {
    var now4 = /* @__PURE__ */ new Date();
    return new Date(now4.getFullYear(), now4.getMonth() + 1, 0).getDate();
  }
  getDaysInCurrentMonth();
  for (var day = 1; day <= 31; day++) {
    var dayLabel = "Day " + day;
    var dayData = "day_" + day;
    columns.push({ label: dayLabel, data: dayData });
  }
  var now = /* @__PURE__ */ new Date();
  var year = now.getFullYear();
  var month = String(now.getMonth() + 1).padStart(2, "0");
  var now2 = /* @__PURE__ */ new Date();
  var pyear = now2.getFullYear();
  var pmonth = String(now2.getMonth()).padStart(2, "0");
  var now3 = /* @__PURE__ */ new Date();
  var ppyear = now3.getFullYear();
  var ppmonth = String(now3.getMonth() - 1).padStart(2, "0");
  var yearMonth = year + "-" + month;
  var prevYearMonth = pyear + "-" + pmonth;
  var prevYear2Month = ppyear + "-" + ppmonth;
  console.log(yearMonth);
  let inputs = await genInputs(url, "Device");
  return {
    module: "Device",
    inputs,
    organization_id: map.user.organization_id,
    columns,
    yearMonth,
    prevYearMonth,
    prevYear2Month
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 13;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-124da364.js')).default;
const universal_id = "src/routes/(main)/devices/+page.js";
const imports = ["_app/immutable/nodes/13.25036bde.js","_app/immutable/chunks/index.0132ad10.js","_app/immutable/chunks/js.cookie.c4425e19.js","_app/immutable/chunks/singletons.c44d92ae.js","_app/immutable/chunks/scheduler.a278e30b.js","_app/immutable/chunks/index.bc19f21f.js","_app/immutable/chunks/Datatable.7d61f8f1.js","_app/immutable/chunks/Icon.c81b812b.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7922a51a.js","_app/immutable/chunks/DataCell.49b25c64.js","_app/immutable/chunks/Button.4181d088.js","_app/immutable/chunks/Input.c1ff2188.js","_app/immutable/chunks/Wrapper.d471eaa8.js","_app/immutable/chunks/DropdownItem.5e6dc328.js","_app/immutable/chunks/stores.398c5acc.js","_app/immutable/chunks/SimpleTable.05b48a41.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css","_app/immutable/assets/DataCell.5a08ab41.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=13-4c6a18c3.js.map
