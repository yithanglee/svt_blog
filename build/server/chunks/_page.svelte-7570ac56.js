import { c as create_ssr_component, v as validate_component, a as compute_rest_props, h as getContext, d as spread, f as escape_attribute_value, e as escape_object, g as add_attribute, i as compute_slots } from './ssr-5d41fc77.js';
import { B as Button } from './Button-74bd8bb2.js';
import { C as Card } from './Card-d675457a.js';
import { twMerge } from 'tailwind-merge';
import { L as Label, I as Input } from './Input-dfaf8a23.js';
import 'js-cookie';
import './names-11b10067.js';
import './Frame-27df8d5f.js';

const colorClasses = {
  primary: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600",
  secondary: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600",
  red: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600",
  green: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600",
  purple: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",
  teal: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",
  yellow: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",
  orange: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",
  blue: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
};
const labelClass = (inline, extraClass) => twMerge(inline ? "inline-flex" : "flex", "items-center", extraClass);
let spacing = "mr-2";
const inputClass = (custom, color, rounded, tinted, extraClass) => twMerge(
  "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",
  spacing,
  tinted ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600",
  custom && "sr-only peer",
  rounded && "rounded",
  colorClasses[color],
  extraClass
);
const Checkbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "custom", "inline", "group", "value", "checked", "spacing"]);
  let $$slots = compute_slots(slots);
  let { color = "primary" } = $$props;
  let { custom = false } = $$props;
  let { inline = false } = $$props;
  let { group = [] } = $$props;
  let { value = "on" } = $$props;
  let { checked = void 0 } = $$props;
  let { spacing: spacing2 = "mr-2" } = $$props;
  let background = getContext("background");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing2 !== void 0)
    $$bindings.spacing(spacing2);
  return `${validate_component(Label, "Label").$$render(
    $$result,
    {
      class: labelClass(inline, $$props.class),
      show: $$slots.default
    },
    {},
    {
      default: () => {
        return `<input${spread(
          [
            { type: "checkbox" },
            { value: escape_attribute_value(value) },
            escape_object($$restProps),
            {
              class: escape_attribute_value(twMerge(spacing2, inputClass(custom, color, true, background, $$slots.default || $$props.class)))
            }
          ],
          {}
        )}${add_attribute("checked", checked, 1)}> ${slots.default ? slots.default({}) : ``}`;
      }
    }
  )} `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><form class="flex justify-center">${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md" }, {}, {
    default: () => {
      return `<div class="flex flex-col space-y-6"><h3 class="text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-wwn3rw">Sign in to our platform</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1bg9cgq">Email</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "email",
              value: "d@1.com",
              name: "email",
              placeholder: "name@company.com",
              required: true
            },
            {},
            {}
          )}`;
        }
      })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
        default: () => {
          return `<span data-svelte-h="svelte-1nyqqaq">Your password</span> ${validate_component(Input, "Input").$$render(
            $$result,
            {
              type: "password",
              value: "123",
              name: "password",
              placeholder: "•••••",
              required: true
            },
            {},
            {}
          )}`;
        }
      })} <div class="flex items-start">${validate_component(Checkbox, "Checkbox").$$render($$result, {}, {}, {
        default: () => {
          return `Remember me`;
        }
      })} <a href="/" class="ml-auto text-sm text-primary-700 hover:underline dark:text-primary-500" data-svelte-h="svelte-1relpkp">Lost password?</a></div> ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
        default: () => {
          return `Login to your account`;
        }
      })} <div class="text-sm font-medium text-gray-500 dark:text-gray-300" data-svelte-h="svelte-53bb0x">Not registered? <a href="/" class="text-primary-700 hover:underline dark:text-primary-500">Create account</a></div></div>`;
    }
  })}</form></main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-7570ac56.js.map
