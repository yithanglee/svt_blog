import { g as genInputs } from './index2-f7f05ac4.js';
import { P as PHX_ENDPOINT } from './constants-d8ea950c.js';

async function load() {
  let url = "http://" + PHX_ENDPOINT;
  let inputs = await genInputs(url, "Customer");
  return {
    inputs
  };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-1a7ee9d4.js')).default;
const universal_id = "src/routes/(main)/customers/+page.js";
const imports = ["_app/immutable/nodes/6.4c9300c3.js","_app/immutable/chunks/index.1e982a02.js","_app/immutable/chunks/scheduler.f417f79b.js","_app/immutable/chunks/index.8ede18d1.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7922a51a.js","_app/immutable/chunks/constants.387862d7.js","_app/immutable/chunks/Datatable.1d403eff.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/Button.6dee57fd.js","_app/immutable/chunks/Frame.cbfd251f.js","_app/immutable/chunks/CloseButton.280caada.js","_app/immutable/chunks/Tabs.90c08209.js","_app/immutable/chunks/index.485c1d57.js","_app/immutable/chunks/Input.2343a75c.js","_app/immutable/chunks/Icon.dca1b721.js","_app/immutable/chunks/stores.215fb626.js","_app/immutable/chunks/singletons.a65e5d45.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=6-bf1190c9.js.map
