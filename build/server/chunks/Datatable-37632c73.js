import { d as subscribe } from './utils-7800a155.js';
import { c as create_ssr_component, o as onDestroy, v as validate_component, a as each, e as escape, h as add_attribute } from './ssr-7737bd8a.js';
import { i as isModalOpen, D as DataForm, T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell, f as DataCell, P as Pagination, M as Modal } from './DataCell-1442c3dc.js';
import { a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';
import { b as buildQueryString } from './index3-3243cbac.js';
import { w as writable } from './index2-c4ed6e43.js';
import { p as page } from './stores-33060568.js';
import { L as Label, I as Input, B as Button } from './Input-9756bc1a.js';

/* empty css                                         */function createReload() {
  var map = {
    open: false
  };
  const { subscribe: subscribe2, set, update } = writable(map);
  return {
    subscribe: subscribe2,
    activate: () => {
      update((n) => {
        console.log(n);
        return { ...n, open: true };
      });
      setTimeout(() => {
        update(
          (n) => {
            console.log(n);
            return { ...n, open: false };
          }
        );
      }, 3500);
    },
    open: () => {
      return map.open;
    }
  };
}
const isTableReloaded = createReload();
const itemsPerPage = 100;
const Datatable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  isTableReloaded.subscribe((v) => {
    if (v.open) {
      fetchData(1);
    }
  });
  let showNew = data.showNew != null ? data.showNew : false, canDelete = data.canDelete != null ? data.canDelete : false, customCols = data.customCols, appendQueries = data.appendQueries, query = {}, confirmModal = false, inputs = data.inputs, items = [], columns = data.columns, pages = [], selectedData = {}, cac_url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT, model = data.model;
  let apiData = {
    search: {
      regex: "false",
      value: query != null ? query : ""
    },
    additional_join_statements: data.join_statements,
    additional_search_queries: data.search_queries,
    draw: "1",
    length: itemsPerPage,
    model: data.model,
    columns: { 0: { data: "id", name: "id" } },
    order: { 0: { column: 0, dir: "desc" } },
    preloads: JSON.stringify(data.preloads),
    start: null
  };
  function buildSearchString(query2) {
    var slist = [];
    var keys = Object.keys(query2);
    if (keys.length > 0) {
      try {
        console.log(keys);
        keys.forEach((v, i) => {
          if (query2[v]) {
            slist.push(v + "=" + query2[v]);
          }
        });
        return slist.join("|");
      } catch (e) {
        console.log(e);
        return data.search_queries;
      }
    } else {
      return data.search_queries;
    }
  }
  async function fetchData(pageNumber) {
    apiData.additional_search_queries = buildSearchString(query);
    apiData.start = ((pageNumber == null ? 1 : pageNumber) - 1) * itemsPerPage;
    const queryString = buildQueryString({ ...apiData, ...appendQueries });
    console.log(queryString);
    try {
      let blog_url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
      const response = await fetch(blog_url + "/api/" + model + `?${queryString}`, {
        headers: { "content-type": "application/json" }
      });
      if (response.ok) {
        let dataList = await response.json();
        console.log(dataList);
        items = dataList.data;
        var totalPages = Math.ceil(dataList.recordsFiltered / itemsPerPage);
        pages = [];
        for (var i = 0; i < totalPages; i++) {
          pages.push({ name: i + 1, href: `?page=` + (i + 1) });
        }
      } else {
        console.error("API request failed");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  }
  async function checkPage() {
    setTimeout(
      () => {
        console.log($page.url.searchParams.get("page"));
        fetchData($page.url.searchParams.get("page"));
      },
      200
    );
  }
  let unsub = isModalOpen.subscribe((v) => {
    console.log(v);
  });
  onDestroy(unsub);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="mb-6 flex flex items-center"><div class="">${validate_component(Label, "Label").$$render(
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
    )} <div class="flex gap-4 items-center">${data.search_queries != null ? `${data.search_queries != [] ? `${each(data.search_queries, (search_query) => {
      return `${each(search_query.split("|"), (single_query) => {
        return `${validate_component(Input, "Input").$$render(
          $$result,
          {
            id: "default-input",
            placeholder: single_query.split(".")[1],
            value: query["" + single_query]
          },
          {
            value: ($$value) => {
              query["" + single_query] = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      })}`;
    })}` : ``}` : ``} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Search`;
      }
    })} ${validate_component(DataForm, "DataForm").$$render(
      $$result,
      {
        showNew,
        customCols,
        data: selectedData,
        inputs,
        url: cac_url,
        module: data.model,
        postFn: checkPage
      },
      {},
      {}
    )}</div></div></div> <div class="flex flex-col items-center justify-center gap-2 mb-4"></div> ${validate_component(Table, "Table").$$render($$result, { shadow: true, hoverable: true }, {}, {
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
                      return `<a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500" data-svelte-h="svelte-1d926kp">Edit</a> ${data.buttons != null ? `${data.buttons != [] ? `${each(data.buttons, (button) => {
                        return `${button.showCondition != null ? `${button.showCondition(item) ? `|
										<a${add_attribute("href", button.href == null ? "#" : button.href(item) || "#", 0)} class="font-medium text-primary-600 hover:underline dark:text-primary-500">${escape(button.name)}</a>` : ``}` : `|
									<a${add_attribute("href", button.href == null ? "#" : button.href(item) || "#", 0)} class="font-medium text-primary-600 hover:underline dark:text-primary-500">${escape(button.name)}</a>`}`;
                      })}` : ``}` : ``} ${canDelete ? `|
						<a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500" data-svelte-h="svelte-pcqvlw">Delete</a>` : ``} `;
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
          return `${``} <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">${`Are you sure you want to delete?`}</p>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Datatable as D };
//# sourceMappingURL=Datatable-37632c73.js.map
