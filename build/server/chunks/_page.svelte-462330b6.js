import { c as create_ssr_component, g as add_attribute, k as escape, v as validate_component, l as each } from './ssr-5d41fc77.js';
import { P as PHX_ENDPOINT } from './constants-d8ea950c.js';
import { B as Button } from './Button-74bd8bb2.js';
import { C as Card } from './Card-d675457a.js';
import { L as Label, I as Input } from './Input-dfaf8a23.js';
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from './TableHeadCell-5608f57a.js';
import './names-11b10067.js';
import 'tailwind-merge';
import './Frame-27df8d5f.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imageUrl = "http://" + PHX_ENDPOINT + "/mjpeg_stream_6.mp4";
  let { data } = $$props;
  let items = [{ key: "id", value: "int" }], module = "", title = "";
  var url = "http://" + PHX_ENDPOINT;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<img${add_attribute("src", imageUrl, 0)}> <div class="grid grid-cols-12"><div class="col-span-8 mx-4"><h1 class="my-4 dark:text-white">Model: ${escape(title)}</h1> ${validate_component(Table, "Table").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Key`;
              }
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `Value`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, { class: "divide-y" }, {}, {
          default: () => {
            return `${items.length > 0 ? `${each(items, (item) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.key)}`;
                    }
                  })} ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${escape(item.value)}`;
                    }
                  })} `;
                }
              })}`;
            })}` : ``}`;
          }
        })}`;
      }
    })}</div> <div class="col-span-4 mx-4">${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md " }, {}, {
      default: () => {
        return `<form class="flex flex-col space-y-6" action="javascript:void(0);"><h3 class="text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-rb0rem">Model Columns Info</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
          default: () => {
            return `<span data-svelte-h="svelte-4232dx">Url</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "text",
                name: "url",
                placeholder: "User",
                required: true,
                value: url
              },
              {
                value: ($$value) => {
                  url = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
          default: () => {
            return `<span data-svelte-h="svelte-1m5u4hd">Model</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "text",
                name: "module",
                placeholder: "User",
                required: true,
                value: module
              },
              {
                value: ($$value) => {
                  module = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
          default: () => {
            return `Check`;
          }
        })}</form>`;
      }
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-462330b6.js.map
