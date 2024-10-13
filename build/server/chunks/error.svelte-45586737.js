import { d as subscribe } from './utils-7800a155.js';
import { c as create_ssr_component, e as escape } from './ssr-7737bd8a.js';
import { p as page } from './stores-33060568.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-45586737.js.map
