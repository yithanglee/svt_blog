import { c as create_ssr_component, o as onDestroy, v as validate_component, k as escape, a as compute_rest_props, d as spread, e as escape_object } from './ssr-5d41fc77.js';
import 'phoenix';
import { B as Button } from './Button-74bd8bb2.js';
import { L as Label, I as Input } from './Input-dfaf8a23.js';
import { twMerge } from 'tailwind-merge';
import { T as Tabs, a as TabItem } from './Tabs-c22d3c72.js';
import './names-11b10067.js';
import './index-eae86eb8.js';

const Fileupload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["value", "files", "inputClass"]);
  let { value = "" } = $$props;
  let { files = void 0 } = $$props;
  let { inputClass = "border !p-0 dark:text-gray-400" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.inputClass === void 0 && $$bindings.inputClass && inputClass !== void 0)
    $$bindings.inputClass(inputClass);
  return `${validate_component(Input, "Input").$$render(
    $$result,
    Object.assign({}, $$restProps, {
      class: twMerge(inputClass, $$props.class)
    }),
    {},
    {
      default: ({ props }) => {
        return `<input${spread([{ type: "file" }, escape_object(props)], {})}>`;
      }
    }
  )} `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let value;
  document.getElementById("videoInput");
  document.getElementById("localMusicVideo");
  new MediaStream();
  onDestroy(() => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Tabs, "Tabs").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true, title: "Remote" }, {}, {
          default: () => {
            return `<video style="width: 100%;" id="remote-stream" controls autoplay></video> <video style="width: 100%;" id="local-stream" autoplay muted></video> <video style="width: 100%;" id="localMusicVideo" controls autoplay></video> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2 mb-2" }, {}, {
              default: () => {
                return `<span data-svelte-h="svelte-ann0ip">Upload file</span> ${validate_component(Fileupload, "Fileupload").$$render(
                  $$result,
                  { id: "videoInput", value },
                  {
                    value: ($$value) => {
                      value = $$value;
                      $$settled = false;
                    }
                  },
                  {}
                )}`;
              }
            })} ${validate_component(Label, "Label").$$render($$result, {}, {}, {
              default: () => {
                return `File: ${escape(value)}`;
              }
            })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `Play`;
              }
            })}`;
          }
        })}`;
      }
    })} <section>${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Guest Connect`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Call`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Connect`;
      }
    })} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Disconnect`;
      }
    })}</section>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-bc5701a5.js.map
