import { c as create_ssr_component, j as subscribe, o as onDestroy, v as validate_component, l as each, a as compute_rest_props, d as spread, e as escape_object, f as escape_attribute_value, g as add_attribute, k as escape, i as compute_slots } from './ssr-5d41fc77.js';
import { p as page } from './stores-6aed4ed7.js';
import { twMerge } from 'tailwind-merge';
import { I as Icon } from './Icon-783b139c.js';
import 'js-cookie';

const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["asideClass"]);
  let { asideClass = "w-64" } = $$props;
  if ($$props.asideClass === void 0 && $$bindings.asideClass && asideClass !== void 0)
    $$bindings.asideClass(asideClass);
  return `<aside${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(asideClass, $$props.class))
      },
      { "aria-label": "Sidebar" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</aside> `;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["aClass", "href", "label", "spanClass", "activeClass", "active"]);
  let $$slots = compute_slots(slots);
  let { aClass = "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { href = "" } = $$props;
  let { label = "" } = $$props;
  let { spanClass = "ml-3" } = $$props;
  let { activeClass = "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" } = $$props;
  let { active = false } = $$props;
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0)
    $$bindings.aClass(aClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  return `<li><a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      {
        class: escape_attribute_value(twMerge(active ? activeClass : aClass, $$props.class))
      }
    ],
    {}
  )}>${slots.icon ? slots.icon({}) : ``} <span${add_attribute("class", spanClass, 0)}>${escape(label)}</span> ${$$slots.subtext ? `${slots.subtext ? slots.subtext({}) : ``}` : ``}</a></li> `;
});
const SidebarGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["ulClass", "borderClass", "border"]);
  let { ulClass = "space-y-2" } = $$props;
  let { borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700" } = $$props;
  let { border = false } = $$props;
  if (border) {
    ulClass += " " + borderClass;
  }
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  return `<ul${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(ulClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul> `;
});
const SidebarWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass"]);
  let { divClass = "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800" } = $$props;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(divClass, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div> `;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let spanClass = "flex-1 ml-3 whitespace-nowrap";
  let menus = [
    {
      path: "/plate",
      title: "Car Plate",
      icon: "camera-foto-solid"
    },
    {
      path: "/camera",
      title: "Camera",
      icon: "camera-foto-solid"
    },
    {
      path: "/users",
      title: "Users",
      icon: null
    },
    {
      path: "/customers",
      title: "Customers",
      icon: null
    },
    {
      path: "/customer_orders",
      title: "Orders",
      icon: "receipt-solid"
    }
  ];
  let user = { username: "Guest" };
  onDestroy(() => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $page.url.pathname;
  $$unsubscribe_page();
  return `<div class="mx-auto flex flex-wrap justify-between items-center container"><div class="w-full grid grid-cols-12"><div class="col-span-12 sm:col-span-3">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(SidebarWrapper, "SidebarWrapper").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(SidebarGroup, "SidebarGroup").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Good day, " + user.username }, {}, {
                icon: () => {
                  return `${validate_component(Icon, "Icon").$$render(
                    $$result,
                    {
                      name: "user-solid",
                      class: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    },
                    {},
                    {}
                  )}`;
                }
              })} ${validate_component(SidebarItem, "SidebarItem").$$render($$result, { label: "Dashboard", href: "/dashboard" }, {}, {
                icon: () => {
                  return `${validate_component(Icon, "Icon").$$render(
                    $$result,
                    {
                      name: "chart-pie-solid",
                      class: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    },
                    {},
                    {}
                  )}`;
                }
              })} ${each(menus, (menu) => {
                return `${validate_component(SidebarItem, "SidebarItem").$$render(
                  $$result,
                  {
                    label: menu.title,
                    spanClass,
                    href: menu.path
                  },
                  {},
                  {
                    icon: () => {
                      return `${validate_component(Icon, "Icon").$$render(
                        $$result,
                        {
                          name: menu.icon == null ? "users-solid" : menu.icon,
                          class: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        },
                        {},
                        {}
                      )} `;
                    }
                  }
                )}`;
              })} ${validate_component(SidebarItem, "SidebarItem").$$render(
                $$result,
                {
                  label: "Sign In",
                  href: "#"
                },
                {},
                {
                  icon: () => {
                    return `${validate_component(Icon, "Icon").$$render(
                      $$result,
                      {
                        name: "arrow-right-to-bracket-solid",
                        class: "w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      },
                      {},
                      {}
                    )}`;
                  }
                }
              )}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div> <div class="col-span-12 sm:col-span-8 py-4 sm:py-0">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-3189f5f2.js.map
