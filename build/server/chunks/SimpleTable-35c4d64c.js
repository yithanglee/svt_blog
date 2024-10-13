import { d as subscribe } from './utils-7800a155.js';
import { c as create_ssr_component, o as onDestroy, v as validate_component, e as escape, a as each } from './ssr-7737bd8a.js';
import { i as isModalOpen, T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell, f as DataCell, P as Pagination, M as Modal } from './DataCell-1442c3dc.js';
import 'js-cookie';
import { p as page } from './stores-33060568.js';
import { L as Label, B as Button } from './Input-9756bc1a.js';

/* empty css                                         */const SimpleTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { data, title, description } = $$props;
  data.apiData;
  data.scope;
  let columns = data.columns, confirmModal = false, items = [], pages = [];
  let unsub = isModalOpen.subscribe((v) => {
    console.log(v);
  });
  onDestroy(unsub);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="mb-6 flex flex items-center"><div class="hidden">${validate_component(Label, "Label").$$render(
      $$result,
      {
        for: "default-input",
        class: "block mb-2"
      },
      {},
      {
        default: () => {
          return `Search`;
        }
      }
    )} <div class="flex gap-4 items-center">${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Search`;
      }
    })}</div></div> <div class="flex flex-col">${title ? `<h1 class="text-lg font-bold dark:text-white">${escape(title)}</h1>` : ``} ${description ? `<p class="dark:text-white"><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p>` : ``}</div></div> <div class="flex flex-col items-center justify-center gap-2 mb-4"></div> ${validate_component(Table, "Table").$$render($$result, { shadow: true, hoverable: true }, {}, {
      default: () => {
        return `${validate_component(TableHead, "TableHead").$$render($$result, {}, {}, {
          default: () => {
            return `${each(columns, (col) => {
              return `${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(col.label)}`;
                }
              })}`;
            })} ${validate_component(TableHeadCell, "TableHeadCell").$$render($$result, {}, {}, {
              default: () => {
                return `<span class="sr-only" data-svelte-h="svelte-hzngtx">Action</span>`;
              }
            })}`;
          }
        })} ${validate_component(TableBody, "TableBody").$$render($$result, { class: "divide-y" }, {}, {
          default: () => {
            return `${each(items, (item) => {
              return `${validate_component(TableBodyRow, "TableBodyRow").$$render($$result, {}, {}, {
                default: () => {
                  return `${each(columns, (col) => {
                    return `${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, { class: "font-light dark:text-white" }, {}, {
                      default: () => {
                        return `${validate_component(DataCell, "DataCell").$$render($$result, { item, col }, {}, {})} `;
                      }
                    })}`;
                  })}  ${validate_component(TableBodyCell, "TableBodyCell").$$render($$result, {}, {}, {
                    default: () => {
                      return `${data.buttons != null ? `${data.buttons != [] ? `${each(data.buttons, (button) => {
                        return `<a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">${escape(button.name)}</a> <span class="mx-1" data-svelte-h="svelte-fv9428">|</span>`;
                      })}` : ``}` : ``} `;
                    }
                  })} `;
                }
              })}`;
            })}`;
          }
        })}`;
      }
    })} <div class="flex flex-col items-center justify-center gap-2 mt-4">${validate_component(Pagination, "Pagination").$$render($$result, { pages }, {}, {})}</div> ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        title: "Confirm?",
        autoclose: true,
        outsideclose: true,
        open: confirmModal
      },
      {
        open: ($$value) => {
          confirmModal = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `${validate_component(Button, "Button").$$render($$result, { color: "red" }, {}, {
            default: () => {
              return `Confirm`;
            }
          })} `;
        },
        default: () => {
          return `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">${`Are you sure you want to perform this action?`}</p>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { SimpleTable as S };
//# sourceMappingURL=SimpleTable-35c4d64c.js.map
