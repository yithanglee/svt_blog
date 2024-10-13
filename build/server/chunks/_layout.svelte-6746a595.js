import { c as create_ssr_component, o as onDestroy, v as validate_component, e as escape, a as each, b as createEventDispatcher, d as spread, f as escape_object, g as escape_attribute_value, h as add_attribute, i as getContext, s as setContext } from './ssr-7737bd8a.js';
import { c as compute_rest_props, a as compute_slots } from './utils-7800a155.js';
import { twMerge } from 'tailwind-merge';
import { I as Icon, D as Dropdown, a as DropdownItem, f as fade, C as CloseButton, T as ToolbarButton } from './Icon-792bdce9.js';
import { F as Frame, i as is_void } from './Wrapper-37e83181.js';
import { M as MENUS } from './constants-b9e4be83.js';
import { s as session } from './session-513d96fb.js';
import { i as isToastOpen } from './toast-d4caa2f7.js';
import 'js-cookie';
import '@floating-ui/dom';
import './index2-c4ed6e43.js';

function quintOut(t) {
  return --t * t * t * t * t + 1;
}
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["dismissable", "defaultClass"]);
  let $$slots = compute_slots(slots);
  let { dismissable = false } = $$props;
  let { defaultClass = "p-4 gap-3 text-sm" } = $$props;
  const dispatch = createEventDispatcher();
  let open = true;
  const close = () => {
    open = false;
    dispatch("close");
  };
  let divClass;
  if ($$props.dismissable === void 0 && $$bindings.dismissable && dismissable !== void 0)
    $$bindings.dismissable(dismissable);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  divClass = twMerge(defaultClass, ($$slots.icon || dismissable) && "flex items-center", $$props.class);
  {
    {
      $$restProps.color = $$restProps.color ?? "primary";
      $$restProps.rounded = $$restProps.rounded ?? true;
      if (dismissable)
        $$restProps.transition = $$restProps.transition ?? fade;
    }
  }
  return `${open ? `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, $$restProps, { class: divClass }, { role: "alert" }), {}, {
    default: () => {
      return `${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : ``} ${$$slots.icon || dismissable ? `<div>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`} ${dismissable ? `${slots["close-button"] ? slots["close-button"]({ close }) : ` ${validate_component(CloseButton, "CloseButton").$$render(
        $$result,
        {
          class: "-my-1.5 dark:hover:bg-gray-700",
          color: $$restProps.color
        },
        {},
        {}
      )} `}` : ``}`;
    }
  })}` : ``} `;
});
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "size"]);
  let { btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `${$$result.head += `<!-- HEAD_svelte-1pa505f_START --><script data-svelte-h="svelte-mp99qu">if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
    }<\/script><!-- HEAD_svelte-1pa505f_END -->`, ""} <button${spread(
    [
      { "aria-label": "Dark mode" },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(btnClass, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> `}</span> <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> `}</span></button> `;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["navClass", "navDivClass", "fluid"]);
  let { navClass = "px-2 sm:px-4 py-2.5 w-full" } = $$props;
  let { navDivClass = "mx-auto flex flex-wrap justify-between items-center " } = $$props;
  let { fluid = false } = $$props;
  let hidden = true;
  let toggle = () => {
    hidden = !hidden;
  };
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.navDivClass === void 0 && $$bindings.navDivClass && navDivClass !== void 0)
    $$bindings.navDivClass(navDivClass);
  if ($$props.fluid === void 0 && $$bindings.fluid && fluid !== void 0)
    $$bindings.fluid(fluid);
  {
    {
      $$restProps.color = $$restProps.color ?? "navbar";
    }
  }
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: "nav" }, $$restProps, { class: twMerge(navClass, $$props.class) }), {}, {
    default: () => {
      return `<div${add_attribute("class", twMerge(navDivClass, $$props.classNavDiv, fluid && "w-full" || "container"), 0)}>${slots.default ? slots.default({ hidden, toggle }) : ``}</div>`;
    }
  })} `;
});
const NavBrand = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href"]);
  let { href = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<a${spread(
    [
      { href: escape_attribute_value(href) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge("flex items-center", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</a> `;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let { ariaLabel = "bars 3" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { role: "button" },
      { tabindex: "0" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg> `;
});
const NavHamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "menuClass"]);
  let { btnClass = "ml-3 md:hidden" } = $$props;
  let { menuClass = "h-6 w-6 shrink-0" } = $$props;
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass !== void 0)
    $$bindings.btnClass(btnClass);
  if ($$props.menuClass === void 0 && $$bindings.menuClass && menuClass !== void 0)
    $$bindings.menuClass(menuClass);
  return `${validate_component(ToolbarButton, "ToolbarButton").$$render($$result, Object.assign({}, { name: "Open main menu" }, $$restProps, { class: twMerge(btnClass, $$props.class) }), {}, {
    default: () => {
      return `${validate_component(Menu, "Menu").$$render(
        $$result,
        {
          class: twMerge(menuClass, $$props.classMenu)
        },
        {},
        {}
      )}`;
    }
  })} `;
});
const NavLi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "active", "activeClass", "nonActiveClass"]);
  let { href = "" } = $$props;
  let { active = false } = $$props;
  let { activeClass = void 0 } = $$props;
  let { nonActiveClass = void 0 } = $$props;
  const context = getContext("navbar") ?? {};
  let liClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  liClass = twMerge(
    "block py-2 pr-4 pl-3 md:p-0 rounded md:border-0",
    active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass,
    $$props.class
  );
  return `<li>${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        {
          role: escape_attribute_value(href ? void 0 : "link")
        },
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        { class: escape_attribute_value(liClass) }
      ],
      {}
    )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}</li> `;
});
const NavUl = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["divClass", "ulClass", "hidden", "slideParams", "activeClass", "nonActiveClass"]);
  let { divClass = "w-full md:block md:w-auto" } = $$props;
  let { ulClass = "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" } = $$props;
  let { hidden = true } = $$props;
  let { slideParams = {
    delay: 250,
    duration: 500,
    easing: quintOut
  } } = $$props;
  let { activeClass = "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent" } = $$props;
  let { nonActiveClass = "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" } = $$props;
  setContext("navbar", { activeClass, nonActiveClass });
  let _divClass;
  let _ulClass;
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.ulClass === void 0 && $$bindings.ulClass && ulClass !== void 0)
    $$bindings.ulClass(ulClass);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.slideParams === void 0 && $$bindings.slideParams && slideParams !== void 0)
    $$bindings.slideParams(slideParams);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.nonActiveClass === void 0 && $$bindings.nonActiveClass && nonActiveClass !== void 0)
    $$bindings.nonActiveClass(nonActiveClass);
  _divClass = twMerge(divClass, $$props.class);
  _ulClass = twMerge(
    ulClass,
    // 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
    $$props.classUl
  );
  return `${!hidden ? `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { role: "button" },
      { tabindex: "0" }
    ],
    {}
  )}>${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}</div>` : `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(_divClass) },
      { hidden: hidden || null }
    ],
    {}
  )}><ul${add_attribute("class", _ulClass, 0)}>${slots.default ? slots.default({}) : ``}</ul></div>`} `;
});
const clsBtnExtraClass = "-mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 focus:!ring-gray-300 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-700";
const Toast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "simple",
    "color",
    "position",
    "open",
    "divClass",
    "defaultIconClass",
    "contentClass",
    "align"
  ]);
  let $$slots = compute_slots(slots);
  let { simple = false } = $$props;
  let { color = "primary" } = $$props;
  let { position = "none" } = $$props;
  let { open = true } = $$props;
  let { divClass = "w-full max-w-xs p-4 text-gray-500 bg-white shadow dark:text-gray-400 dark:bg-gray-800 gap-3" } = $$props;
  let { defaultIconClass = "w-8 h-8" } = $$props;
  let { contentClass = "w-full text-sm font-normal" } = $$props;
  let { align = true } = $$props;
  const positions = {
    "top-left": "absolute top-5 left-5",
    "top-right": "absolute top-5 right-5",
    "bottom-left": "absolute bottom-5 left-5",
    "bottom-right": "absolute bottom-5 right-5",
    none: ""
  };
  let finalDivClass;
  const colors = {
    primary: "text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200",
    gray: "text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200",
    red: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
    yellow: "text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200",
    green: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
    blue: "text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200",
    indigo: "text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200",
    purple: "text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200",
    orange: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200",
    none: ""
  };
  let iconClass;
  if ($$props.simple === void 0 && $$bindings.simple && simple !== void 0)
    $$bindings.simple(simple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  if ($$props.defaultIconClass === void 0 && $$bindings.defaultIconClass && defaultIconClass !== void 0)
    $$bindings.defaultIconClass(defaultIconClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0)
    $$bindings.contentClass(contentClass);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  finalDivClass = twMerge("flex", align ? "items-center" : "items-start", divClass, positions[position], $$props.class);
  iconClass = twMerge("inline-flex items-center justify-center shrink-0", colors[color], defaultIconClass);
  return `${open ? `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { rounded: true }, { transition: fade }, { color: "none" }, $$restProps, { class: finalDivClass }, { role: "alert" }), {}, {
    default: () => {
      return `${$$slots.icon ? `${validate_component(Frame, "Frame").$$render(
        $$result,
        {
          rounded: true,
          color: "none",
          class: iconClass
        },
        {},
        {
          default: () => {
            return `${slots.icon ? slots.icon({}) : ``}`;
          }
        }
      )}` : ``} <div${add_attribute("class", contentClass, 0)}>${slots.default ? slots.default({}) : ``}</div> ${!simple ? `${validate_component(CloseButton, "CloseButton").$$render($$result, { class: clsBtnExtraClass }, {}, {})}` : ``}`;
    }
  })}` : ``} `;
});
function appendClass(existing_class) {
  return "cursor-pointer " + existing_class;
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let open = true, username = "Svelte Admin", toastMessage = "", nav_class = "hidden", app_routes = [];
  session.subscribe((value) => {
    if (value && value.loggedIn) {
      nav_class = "";
      app_routes = value.user.role_app_routes;
      username = value.user.username;
    }
    if (value.loggedIn == false) {
      nav_class = "hidden";
    }
  });
  let unsub = isToastOpen.subscribe((v) => {
    open = v.open;
    toastMessage = v.message;
  });
  onDestroy(() => {
    unsub();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="fixed w-full">${validate_component(Toast, "Toast").$$render(
      $$result,
      {
        color: "green",
        position: "top-right",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        icon: () => {
          return `${validate_component(Icon, "Icon").$$render(
            $$result,
            {
              slot: "icon",
              name: "check-circle-solid",
              class: "w-5 h-5 text-green-500 transition duration-75 dark:text-green-400 group-hover:text-green-900 dark:group-hover:text-white"
            },
            {},
            {}
          )}`;
        },
        default: () => {
          return `${escape(toastMessage)}`;
        }
      }
    )}</div> ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {
      default: ({ hidden, toggle }) => {
        return `${validate_component(NavBrand, "NavBrand").$$render($$result, { href: "/" }, {}, {
          default: () => {
            return `<img src="/images/2damienslab.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">${escape(username)}</span>`;
          }
        })} <div class="flex md:order-2">${validate_component(DarkMode, "DarkMode").$$render($$result, {}, {}, {})} ${validate_component(NavHamburger, "NavHamburger").$$render($$result, {}, {}, {})}</div> ${validate_component(NavUl, "NavUl").$$render($$result, { hidden }, {}, {
          default: () => {
            return `${validate_component(NavLi, "NavLi").$$render($$result, { class: nav_class, href: "/dashboard" }, {}, {
              default: () => {
                return `Dashboard`;
              }
            })} ${each(MENUS, (menu) => {
              return `${!menu.hidden ? `${menu.children ? `${app_routes.some((app_route) => app_route.name === menu.title) ? `${validate_component(NavLi, "NavLi").$$render(
                $$result,
                {
                  class: appendClass(nav_class),
                  id: menu.title
                },
                {},
                {
                  default: () => {
                    return `${escape(menu.title)}`;
                  }
                }
              )} ${validate_component(Dropdown, "Dropdown").$$render(
                $$result,
                {
                  triggeredBy: "#" + menu.title,
                  class: "w-44 z-20"
                },
                {},
                {
                  default: () => {
                    return `${each(menu.children, (child) => {
                      return `${app_routes.some((app_route) => app_route.route === child.path) ? `${validate_component(DropdownItem, "DropdownItem").$$render($$result, { href: child.path }, {}, {
                        default: () => {
                          return `${escape(child.title)} `;
                        }
                      })}` : ``}`;
                    })} `;
                  }
                }
              )}` : ``}` : `${app_routes.some((app_route) => app_route.route === menu.path) ? `${validate_component(NavLi, "NavLi").$$render(
                $$result,
                {
                  class: nav_class,
                  id: menu.title,
                  href: menu.path
                },
                {},
                {
                  default: () => {
                    return `${escape(menu.title)} `;
                  }
                }
              )}` : ``}`}` : ``}`;
            })} ${validate_component(NavLi, "NavLi").$$render(
              $$result,
              {
                class: nav_class,
                href: "javascript:void(0);"
              },
              {},
              {
                default: () => {
                  return `Logout`;
                }
              }
            )}`;
          }
        })}`;
      }
    })} <div id="alert" class="p-8 hidden">${validate_component(Alert, "Alert").$$render($$result, {}, {}, {
      default: () => {
        return `<span class="font-medium" data-svelte-h="svelte-1ffo80p">Info alert!</span>
		Change a few things up and try submitting again.`;
      }
    })}</div> ${slots.default ? slots.default({}) : ``}`;
  } while (!$$settled);
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-6746a595.js.map
