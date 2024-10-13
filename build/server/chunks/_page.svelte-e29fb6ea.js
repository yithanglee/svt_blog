import { c as create_ssr_component } from './ssr-7737bd8a.js';
import 'js-cookie';
import './utils-7800a155.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="p-2" data-svelte-h="svelte-bnnkqb">Placement tree</div> <div class="text-center" style="height: 900px;width: 100vw;overflow: scroll;" data-svelte-h="svelte-15nnqdt"><canvas id="binaryTreeCanvas" width="1200" height="2600"></canvas></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-e29fb6ea.js.map
