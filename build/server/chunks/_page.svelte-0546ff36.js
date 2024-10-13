import { c as create_ssr_component, v as validate_component, d as spread, f as escape_object, g as escape_attribute_value, e as escape, a as each, h as add_attribute } from './ssr-7737bd8a.js';
import { L as Label, I as Input, B as Button } from './Input-9756bc1a.js';
import { C as Card } from './Card-9e4302f9.js';
import { c as compute_rest_props } from './utils-7800a155.js';
import { twMerge } from 'tailwind-merge';
import 'js-cookie';
import { D as Datatable } from './Datatable-37632c73.js';
import './Wrapper-37e83181.js';
import './DataCell-1442c3dc.js';
import './index2-c4ed6e43.js';
import './Icon-792bdce9.js';
import '@floating-ui/dom';
import './constants-b9e4be83.js';
import './index3-3243cbac.js';
import './toast-d4caa2f7.js';
import './stores-33060568.js';

const common = "block w-full";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  let { items = [] } = $$props;
  let { value = void 0 } = $$props;
  let { placeholder = "Choose option ..." } = $$props;
  let { underline = false } = $$props;
  let { size = "md" } = $$props;
  let { defaultClass = "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" } = $$props;
  let { underlineClass = "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" } = $$props;
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.underlineClass === void 0 && $$bindings.underlineClass && underlineClass !== void 0)
    $$bindings.underlineClass(underlineClass);
  selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && "!px-0", $$props.class);
  return `<select${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(selectClass)
      }
    ],
    {}
  )}>${placeholder ? `<option disabled selected value="">${escape(placeholder)}</option>` : ``}${items.length ? each(items, ({ value: value2, name }) => {
    return `<option${add_attribute("value", value2, 0)}>${escape(name)}</option>`;
  }) : `${slots.default ? slots.default({}) : ``}`}</select> `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let positions = [{ value: "left", name: "Left" }, { value: "right", name: "Right" }];
  let { data } = $$props;
  let inputs = data.inputs;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex sm:grid grid-cols-12 flex-col-reverse"><div class="col-span-12 sm:col-span-9 mx-4 p-4">${validate_component(Datatable, "Datatable").$$render(
    $$result,
    {
      data: {
        inputs,
        search_queries: ["a.username|a.phone"],
        model: "User",
        preloads: ["rank"],
        customCols: [
          {
            title: "General",
            list: [
              "id",
              "username",
              "fullname",
              {
                label: "rank_id",
                selection: "Rank",
                customCols: null,
                search_queries: ["a.name"],
                newData: "name",
                title_key: "name"
              },
              { label: "is_stockist", boolean: true }
            ]
          },
          {
            title: "Personal Info",
            list: [
              "phone",
              "email",
              "rank_name",
              "ic_no",
              { label: "password", expose: true },
              "bank_account_holder",
              "bank_account_no",
              "bank_name"
            ]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          {
            label: "Stockist?",
            data: "is_stockist",
            isBadge: true,
            color: [{ key: false, value: "yellow" }, { key: true, value: "green" }]
          },
          { label: "Username", data: "username" },
          {
            label: "Phone/Email",
            data: "phone",
            subtitle: { data: "email" }
          },
          {
            label: "Rank",
            data: "name",
            through: ["rank"]
          }
        ]
      }
    },
    {},
    {}
  )}</div> <div class="col-span-12 sm:col-span-3 mr-4 py-4">${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md " }, {}, {
    default: () => {
      return `<form id="currentForm3" class="flex flex-col space-y-6" action="javascript:void(0);"><h3 class="text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1n93zuv">Modify referral</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-9difb2">Username</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              name: "username",
              placeholder: ""
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-tscp5o">Under Username</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              name: "to_new_placement_username",
              placeholder: ""
            },
            {},
            {}
          )}`;
        }
      })} ${`${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
        default: () => {
          return `Create`;
        }
      })}`}</form>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md " }, {}, {
    default: () => {
      return `<form id="currentForm2" class="flex flex-col space-y-6" action="javascript:void(0);"><h3 class="text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-1tzvjdx">Modify placement</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-9difb2">Username</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              name: "username",
              placeholder: ""
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-tscp5o">Under Username</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              name: "to_new_placement_username",
              placeholder: ""
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1d9pcsl">Position</span> ${validate_component(Select, "Select").$$render(
            $$result,
            {
              class: "mt-2",
              name: "position",
              items: positions
            },
            {},
            {}
          )}`;
        }
      })} ${`${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
        default: () => {
          return `Create`;
        }
      })}`}</form>`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md " }, {}, {
    default: () => {
      return `<form id="currentForm" class="flex flex-col space-y-6" action="javascript:void(0);"><h3 class="text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-k64l9e">Register Member Without Products</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-s8qnxs">Sponsor</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              name: "user[sponsor]",
              placeholder: ""
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-9difb2">Username</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              name: "user[username]",
              placeholder: ""
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-2y41nv">IC Name</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              name: "user[fullname]",
              placeholder: ""
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1d9pcsl">Position</span> ${validate_component(Select, "Select").$$render(
            $$result,
            {
              class: "mt-2",
              name: "user[placement][position]",
              items: positions
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1kvjhoz">Password</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              name: "user[password]",
              placeholder: ""
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-4i1gye">Phone</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              name: "user[phone]",
              placeholder: ""
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "text",
              name: "user[email]",
              placeholder: ""
            },
            {},
            {}
          )}`;
        }
      })} ${`${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
        default: () => {
          return `Create`;
        }
      })}`}</form>`;
    }
  })}</div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0546ff36.js.map
