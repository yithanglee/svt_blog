import { d as subscribe } from './utils-7800a155.js';
import { c as create_ssr_component, o as onDestroy } from './ssr-7737bd8a.js';
import 'js-cookie';
import { p as page } from './stores-33060568.js';
import { w as writable } from './index2-c4ed6e43.js';

/* empty css                                                       */const pageTitle = writable("Commodities");
const pageHref = writable("CommoditiesHref");
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data } = $$props;
  onDestroy(() => {
  });
  pageTitle.subscribe((value) => {
  });
  pageHref.subscribe((value) => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${``}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-b41dc442.js.map
