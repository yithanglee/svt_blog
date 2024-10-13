import { c as create_ssr_component, j as subscribe, o as onDestroy, v as validate_component, l as each, k as escape, a as compute_rest_props, b as createEventDispatcher, g as add_attribute, s as setContext, i as compute_slots, h as getContext } from './ssr-5d41fc77.js';
import { B as Button } from './Button-74bd8bb2.js';
import { twMerge } from 'tailwind-merge';
import { F as Frame } from './Frame-27df8d5f.js';
import { C as CloseButton, f as fade } from './CloseButton-7ff9a9d2.js';
import { T as Tabs, a as TabItem } from './Tabs-c22d3c72.js';
import { w as writable } from './index-eae86eb8.js';
import { L as Label, I as Input } from './Input-dfaf8a23.js';
import { I as Icon } from './Icon-783b139c.js';
import { P as PHX_ENDPOINT } from './constants-d8ea950c.js';
import { b as buildQueryString } from './index2-f7f05ac4.js';
import { p as page } from './stores-6aed4ed7.js';
import { i as is_void } from './names-11b10067.js';
import { T as Table, a as TableHead, b as TableHeadCell, c as TableBody, d as TableBodyRow, e as TableBodyCell } from './TableHeadCell-5608f57a.js';

const baseClass = "font-medium inline-flex items-center justify-center px-2.5 py-0.5";
const Badge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "large", "dismissable"]);
  let { color = "primary" } = $$props;
  let { large = false } = $$props;
  let { dismissable = false } = $$props;
  const colors = {
    primary: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    gray: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    red: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
    purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    pink: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
    none: ""
  };
  const borderedColors = {
    primary: "bg-primary-100 text-primary-800 dark:bg-gray-700 dark:text-primary-400 border-primary-400 dark:border-primary-400",
    blue: "bg-blue-100 text-blue-800 dark:bg-gray-700 dark:text-blue-400 border-blue-400 dark:border-blue-400",
    dark: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border-gray-500 dark:border-gray-500",
    red: "bg-red-100 text-red-800 dark:bg-gray-700 dark:text-red-400 border-red-400 dark:border-red-400",
    green: "bg-green-100 text-green-800 dark:bg-gray-700 dark:text-green-400 border-green-400 dark:border-green-400",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-gray-700 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300",
    indigo: "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400",
    purple: "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border-purple-400 dark:border-purple-400",
    pink: "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border-pink-400 dark:border-pink-400",
    none: ""
  };
  const hoverColors = {
    primary: "hover:bg-primary-200",
    blue: "hover:bg-blue-200",
    dark: "hover:bg-gray-200",
    red: "hover:bg-red-200",
    green: "hover:bg-green-200",
    yellow: "hover:bg-yellow-200",
    indigo: "hover:bg-indigo-200",
    purple: "hover:bg-purple-200",
    pink: "hover:bg-pink-200",
    none: ""
  };
  let badgeClass;
  let open = true;
  const dispatch = createEventDispatcher();
  const close = (e) => {
    e.stopPropagation();
    open = false;
    dispatch("dismiss");
  };
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  {
    {
      if (dismissable)
        $$restProps.transition = $$restProps.transition ?? fade;
    }
  }
  badgeClass = twMerge(
    baseClass,
    large ? "text-sm" : "text-xs",
    $$restProps.border ? `border ${borderedColors[color]}` : colors[color],
    $$restProps.href && hoverColors[color],
    $$restProps.rounded ? "rounded-full" : "rounded",
    $$props.class
  );
  return `${open ? `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: badgeClass }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``} ${dismissable ? `${slots["close-button"] ? slots["close-button"]({ close }) : ` ${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          color,
          size: large ? "sm" : "xs",
          name: "Remove badge",
          class: "ml-1.5 -mr-1.5"
        },
        {},
        {}
      )} `}` : ``}`;
    }
  })}` : ``} `;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "open",
    "title",
    "size",
    "placement",
    "autoclose",
    "permanent",
    "backdropClass",
    "defaultClass",
    "outsideclose"
  ]);
  let $$slots = compute_slots(slots);
  let { open = false } = $$props;
  let { title = "" } = $$props;
  let { size = "md" } = $$props;
  let { placement = "center" } = $$props;
  let { autoclose = false } = $$props;
  let { permanent = false } = $$props;
  let { backdropClass = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80" } = $$props;
  let { defaultClass = "relative flex flex-col mx-auto" } = $$props;
  let { outsideclose = false } = $$props;
  const dispatch = createEventDispatcher();
  const getPlacementClasses = () => {
    switch (placement) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  let frameClass;
  let backdropCls = twMerge(backdropClass, $$props.classBackdrop);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.autoclose === void 0 && $$bindings.autoclose && autoclose !== void 0)
    $$bindings.autoclose(autoclose);
  if ($$props.permanent === void 0 && $$bindings.permanent && permanent !== void 0)
    $$bindings.permanent(permanent);
  if ($$props.backdropClass === void 0 && $$bindings.backdropClass && backdropClass !== void 0)
    $$bindings.backdropClass(backdropClass);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.outsideclose === void 0 && $$bindings.outsideclose && outsideclose !== void 0)
    $$bindings.outsideclose(outsideclose);
  {
    dispatch(open ? "open" : "hide");
  }
  frameClass = twMerge(defaultClass, "w-full", $$props.class);
  return `${open ? ` <div${add_attribute("class", twMerge("fixed inset-0 z-40", backdropCls), 0)}></div>   <div${add_attribute("class", twMerge("fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex", ...getPlacementClasses()), 0)} tabindex="-1" aria-modal="true" role="dialog"><div class="${"flex relative " + escape(sizes[size], true) + " w-full max-h-full"}"> ${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { shadow: true }, $$restProps, { class: frameClass }), {}, {
    default: () => {
      return ` ${$$slots.header || title ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex justify-between items-center p-4 rounded-t border-b"
        },
        {},
        {
          default: () => {
            return `${slots.header ? slots.header({}) : ` <h3 class="${"text-xl font-semibold " + escape($$restProps.color ? "" : "text-gray-900 dark:text-white", true) + " p-0"}">${escape(title)}</h3> `} ${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
              $$result,
              {
                name: "Close modal",
                color: $$restProps.color
              },
              {},
              {}
            )}` : ``}`;
          }
        }
      )}` : `${!permanent ? `${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          name: "Close modal",
          class: "absolute top-3 right-2.5",
          color: $$restProps.color
        },
        {},
        {}
      )}` : ``}`}  <div${add_attribute("class", twMerge("p-6 space-y-6 flex-1 overflow-y-auto overscroll-contain", $$props.bodyClass), 0)} role="document">${slots.default ? slots.default({}) : ``}</div>  ${$$slots.footer ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          color: $$restProps.color,
          class: "flex items-center p-6 space-x-2 rounded-b border-t"
        },
        {},
        {
          default: () => {
            return `${slots.footer ? slots.footer({}) : ``}`;
          }
        }
      )}` : ``}`;
    }
  })}</div></div>` : ``} `;
});
const PaginationItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = void 0 } = $$props;
  let { active = false } = $$props;
  let { activeClass = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  let { large = false } = $$props;
  const group = getContext("group");
  const table = getContext("table");
  let defaultClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0)
    $$bindings.normalClass(normalClass);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  defaultClass = twMerge(
    "flex items-center font-medium",
    large ? "h-10 px-4 text-base" : "h-8 px-3 text-sm",
    group ? "" : table ? "rounded" : "rounded-lg",
    // table || 'border border-gray-300 dark:border-gray-700 dark:bg-gray-800',
    table ? "" : "border",
    active ? activeClass : normalClass,
    $$props.class
  );
  return ` ${((tag) => {
    return tag ? `<${href ? "a" : "button"}${add_attribute("href", href, 0)}${add_attribute("class", defaultClass, 0)}${add_attribute("role", href ? "button" : void 0, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "button")} `;
});
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pages = [] } = $$props;
  let { activeClass = "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white" } = $$props;
  let { normalClass = "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" } = $$props;
  let { ulClass = "inline-flex -space-x-px items-center" } = $$props;
  let { table = false } = $$props;
  let { large = false } = $$props;
  createEventDispatcher();
  setContext("group", true);
  setContext("table", table);
  if ($$props.pages === void 0 && $$bindings.pages && pages !== void 0)
    $$bindings.pages(pages);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.normalClass === void 0 && $$bindings.normalClass && normalClass !== void 0)
    $$bindings.normalClass(normalClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.table === void 0 && $$bindings.table && table !== void 0)
    $$bindings.table(table);
  if ($$props.large === void 0 && $$bindings.large && large !== void 0)
    $$bindings.large(large);
  return `<nav aria-label="Page navigation"><ul${add_attribute("class", twMerge(ulClass, table && "divide-x dark divide-gray-700 dark:divide-gray-700", $$props.class), 0)}><li>${validate_component(PaginationItem, "PaginationItem").$$render(
    $$result,
    {
      large,
      normalClass,
      class: table ? "rounded-l" : "rounded-l-lg"
    },
    {},
    {
      default: () => {
        return `${slots.prev ? slots.prev({}) : `Previous`}`;
      }
    }
  )}</li> ${each(pages, ({ name, href, active }) => {
    return `<li>${validate_component(PaginationItem, "PaginationItem").$$render(
      $$result,
      {
        large,
        active,
        activeClass,
        normalClass,
        href
      },
      {},
      {
        default: () => {
          return `${escape(name)} `;
        }
      }
    )} </li>`;
  })} <li>${validate_component(PaginationItem, "PaginationItem").$$render(
    $$result,
    {
      large,
      normalClass,
      class: table ? "rounded-r" : "rounded-r-lg"
    },
    {},
    {
      default: () => {
        return `${slots.next ? slots.next({}) : `Next`}`;
      }
    }
  )}</li></ul></nav> `;
});
const isModalOpen = writable(false);
const FormInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { input, key } = $$props;
  let { data } = $$props;
  console.log(key);
  console.log(input);
  console.log(data);
  if (input == null) {
    input = { key: key.label, value: "id" };
    console.log(input);
  }
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.key === void 0 && $$bindings.key && key !== void 0)
    $$bindings.key(key);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${input != null ? `${key.expose != null ? `<div class="w-full sm:w-1/3 mx-4 my-2">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
      default: () => {
        return `<span class="capitalize">${escape(input.key.replace("_", " "))}</span> ${validate_component(Input, "Input").$$render(
          $$result,
          { type: "text", value: data[input.key] },
          {
            value: ($$value) => {
              data[input.key] = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div>` : `${input.value == "id" ? `${validate_component(Input, "Input").$$render(
      $$result,
      { type: "hidden", value: data[input.key] },
      {
        value: ($$value) => {
          data[input.key] = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `<div class="w-full sm:w-1/3 mx-4 my-2">${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
      default: () => {
        return `<span class="capitalize">${escape(input.key.replace("_", " "))}</span> ${validate_component(Input, "Input").$$render(
          $$result,
          { type: "text", value: data[input.key] },
          {
            value: ($$value) => {
              data[input.key] = $$value;
              $$settled = false;
            }
          },
          {}
        )}`;
      }
    })}</div>`}`}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const DataForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data, inputs, customCols, module, postFn } = $$props;
  console.log("customCols");
  console.log(customCols);
  let formModal = false, keys = [];
  let unsub = isModalOpen.subscribe((v) => {
    formModal = v;
  });
  function filteredInput(key) {
    let res = inputs.filter((v, i) => {
      return v.key == key;
    });
    if (res) {
      return res[0];
    } else {
      return null;
    }
  }
  onDestroy(() => {
    unsub();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.inputs === void 0 && $$bindings.inputs && inputs !== void 0)
    $$bindings.inputs(inputs);
  if ($$props.customCols === void 0 && $$bindings.customCols && customCols !== void 0)
    $$bindings.customCols(customCols);
  if ($$props.module === void 0 && $$bindings.module && module !== void 0)
    $$bindings.module(module);
  if ($$props.postFn === void 0 && $$bindings.postFn && postFn !== void 0)
    $$bindings.postFn(postFn);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Button, "Button").$$render($$result, { class: "" }, {}, {
      default: () => {
        return `New`;
      }
    })} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "lg",
        autoclose: false,
        class: "w-full",
        outsideclose: true,
        open: formModal
      },
      {
        open: ($$value) => {
          formModal = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Submit`;
            }
          })} `;
        },
        default: () => {
          return `<form class="flex flex-col space-y-6" action="#"><h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">${escape(module)} Form</h3> ${customCols.length > 0 ? `${validate_component(Tabs, "Tabs").$$render($$result, { style: "underline" }, {}, {
            default: () => {
              return `${each(customCols, (customCol) => {
                return `${customCols[0].title == customCol.title ? `${validate_component(TabItem, "TabItem").$$render($$result, { open: true }, {}, {
                  title: () => {
                    return `<div slot="title" class="flex items-center gap-2">${validate_component(Icon, "Icon").$$render($$result, { name: "grid-solid", size: "sm" }, {}, {})} ${escape(customCol.title)} </div>`;
                  },
                  default: () => {
                    return `<div class="flex flex-wrap w-full gap-2">${each(customCol.list, (key) => {
                      return `${validate_component(FormInput, "FormInput").$$render($$result, { key, data, input: filteredInput(key) }, {}, {})}`;
                    })}</div> `;
                  }
                })}` : `${validate_component(TabItem, "TabItem").$$render($$result, {}, {}, {
                  title: () => {
                    return `<div slot="title" class="flex items-center gap-2">${validate_component(Icon, "Icon").$$render($$result, { name: "grid-solid", size: "sm" }, {}, {})} ${escape(customCol.title)} </div>`;
                  },
                  default: () => {
                    return `<div class="flex flex-wrap w-full gap-2">${each(customCol.list, (key) => {
                      return `${validate_component(FormInput, "FormInput").$$render($$result, { key, data, input: filteredInput(key) }, {}, {})}`;
                    })}</div> `;
                  }
                })}`}`;
              })}`;
            }
          })}` : `<div class="flex flex-wrap w-full gap-2"> ${each(keys, (key) => {
            return `${validate_component(FormInput, "FormInput").$$render($$result, { key, data, input: filteredInput(key) }, {}, {})}`;
          })}</div>`}</form>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
function badgeColor(value, conditionList) {
  var resultList = conditionList.filter((v, i) => {
    return v.key == value;
  });
  if (resultList.length > 0) {
    return resultList[0].value;
  } else {
    return "pink";
  }
}
function checkAssoc(data, val, through) {
  console.log(val);
  console.log(through);
  try {
    if (data[through[0]]) {
      return data[through[0]][val];
    } else {
      return "";
    }
  } catch (e) {
    return "";
  }
}
const DataCell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { item } = $$props;
  let { col } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.col === void 0 && $$bindings.col && col !== void 0)
    $$bindings.col(col);
  return `${col.subtitle != null ? `${escape(item[col.data])} <br> <small class="font-extralight dark:text-white">${escape(item[col.subtitle.data])}</small>` : `${col.through != null ? `${escape(checkAssoc(item, col.data, col.through))}` : `${col.color != null ? `${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      class: "capitalize",
      color: badgeColor(item[col.data], col.color)
    },
    {},
    {
      default: () => {
        return `${escape(item[col.data].split("_").map((v, i) => {
          return v;
        }).join(" "))}`;
      }
    }
  )}` : `${col.isBadge ? `${validate_component(Badge, "Badge").$$render($$result, { class: "capitalize", color: "pink" }, {}, {
    default: () => {
      return `${escape(item[col.data] == null ? "" : item[col.data].split("_").map((v, i) => {
        return v;
      }).join(" "))}`;
    }
  })}` : `${escape(item[col.data] == null ? "" : item[col.data])}`}`}`}`}`;
});
const itemsPerPage = 10;
const Datatable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let customCols = data.customCols, query, confirmModal = false, inputs = data.inputs, items = [], columns = data.columns, pages = [], selectedData = {}, cac_url = "http://" + PHX_ENDPOINT, model = data.model;
  async function fetchData(pageNumber) {
    const apiData = {
      search: {
        regex: "false",
        value: query != null ? query.trim() : ""
      },
      additional_join_statements: data.join_statements,
      additional_search_queries: data.search_queries,
      draw: "1",
      length: itemsPerPage,
      model: data.model,
      columns: { 0: { data: "id", name: "id" } },
      order: { 0: { column: 0, dir: "desc" } },
      preloads: JSON.stringify(data.preloads),
      start: ((pageNumber == null ? 1 : pageNumber) - 1) * itemsPerPage
    };
    const queryString = buildQueryString(apiData);
    try {
      const response = await fetch(cac_url + "/api/" + model + `?${queryString}`, {
        headers: { "Content-Type": "application/json" }
      });
      if (response.ok) {
        let dataList = await response.json();
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
    )} <div class="flex gap-4 items-center">${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "default-input",
        placeholder: "type query here",
        value: query
      },
      {
        value: ($$value) => {
          query = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(Button, "Button").$$render($$result, {}, {}, {
      default: () => {
        return `Search`;
      }
    })} ${validate_component(DataForm, "DataForm").$$render(
      $$result,
      {
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
                      return `<a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500" data-svelte-h="svelte-1d926kp">Edit</a>
					|
					<a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500" data-svelte-h="svelte-1tzl7fw">Delete</a> `;
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
              return `Delete`;
            }
          })} `;
        },
        default: () => {
          return `<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400" data-svelte-h="svelte-dznz2i">Are you sure you want to delete?</p>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});

export { Datatable as D };
//# sourceMappingURL=Datatable-a9f803d4.js.map
