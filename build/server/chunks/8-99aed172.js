import { P as PHX_ENDPOINT } from './constants-d8ea950c.js';

async function load() {
  console.log(PHX_ENDPOINT);
  return { endpoint: PHX_ENDPOINT };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-774aa749.js')).default;
const universal_id = "src/routes/(main)/plate/+page.js";
const imports = ["_app/immutable/nodes/8.91ba3c25.js","_app/immutable/chunks/constants.387862d7.js","_app/immutable/chunks/scheduler.f417f79b.js","_app/immutable/chunks/index.8ede18d1.js","_app/immutable/chunks/phoenix.4c184a8e.js","_app/immutable/chunks/Button.6dee57fd.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7922a51a.js","_app/immutable/chunks/Tabs.90c08209.js","_app/immutable/chunks/index.485c1d57.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=8-99aed172.js.map
