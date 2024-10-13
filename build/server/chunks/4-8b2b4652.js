import { P as PHX_ENDPOINT } from './constants-d8ea950c.js';

async function load() {
  console.log(PHX_ENDPOINT);
  return { endpoint: PHX_ENDPOINT };
}

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-bc5701a5.js')).default;
const universal_id = "src/routes/(main)/camera/+page.js";
const imports = ["_app/immutable/nodes/4.63722cbc.js","_app/immutable/chunks/constants.387862d7.js","_app/immutable/chunks/scheduler.f417f79b.js","_app/immutable/chunks/index.8ede18d1.js","_app/immutable/chunks/phoenix.4c184a8e.js","_app/immutable/chunks/Button.6dee57fd.js","_app/immutable/chunks/Indicator.svelte_svelte_type_style_lang.7922a51a.js","_app/immutable/chunks/Input.2343a75c.js","_app/immutable/chunks/Tabs.90c08209.js","_app/immutable/chunks/index.485c1d57.js"];
const stylesheets = ["_app/immutable/assets/Indicator.1d121e74.css"];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-8b2b4652.js.map
