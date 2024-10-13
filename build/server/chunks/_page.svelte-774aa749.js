import { c as create_ssr_component, o as onDestroy, v as validate_component } from './ssr-5d41fc77.js';
import 'phoenix';
import { B as Button } from './Button-74bd8bb2.js';
import { T as Tabs, a as TabItem } from './Tabs-c22d3c72.js';
import './names-11b10067.js';
import 'tailwind-merge';
import './index-eae86eb8.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  document.getElementById("videoInput");
  document.getElementById("localMusicVideo");
  new MediaStream();
  onDestroy(() => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Local" }, {}, {
        default: () => {
          return `<video style="width: 100%;" id="local-stream" autoplay muted></video>`;
        }
      })}`;
    }
  })} <section>${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Connect`;
    }
  })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
    default: () => {
      return `Stop`;
    }
  })}</section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-774aa749.js.map
