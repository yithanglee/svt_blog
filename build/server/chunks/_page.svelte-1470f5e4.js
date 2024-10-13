import { c as create_ssr_component, v as validate_component } from './ssr-7737bd8a.js';
import 'js-cookie';
import { L as Label, I as Input, B as Button } from './Input-9756bc1a.js';
import { C as Card } from './Card-9e4302f9.js';
import './utils-7800a155.js';
import './Wrapper-37e83181.js';
import 'tailwind-merge';

/* empty css                                                    */const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "", password = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<main><form class="flex justify-center">${validate_component(Card, "Card").$$render($$result, { class: "w-full max-w-md" }, {}, {
      default: () => {
        return `<div class="flex flex-col space-y-6"><h3 class="text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-wwn3rw">Sign in to our platform</h3> ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
          default: () => {
            return `<span data-svelte-h="svelte-9difb2">Username</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "text",
                name: "username",
                placeholder: "administrator",
                required: true,
                value: username
              },
              {
                value: ($$value) => {
                  username = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} ${validate_component(Label, "Label").$$render($$result, { class: "space-y-2" }, {}, {
          default: () => {
            return `<span data-svelte-h="svelte-1nyqqaq">Your password</span> ${validate_component(Input, "Input").$$render(
              $$result,
              {
                type: "password",
                name: "password",
                placeholder: "•••••",
                required: true,
                value: password
              },
              {
                value: ($$value) => {
                  password = $$value;
                  $$settled = false;
                }
              },
              {}
            )}`;
          }
        })} ${validate_component(Button, "Button").$$render($$result, { type: "submit", class: "w-full" }, {}, {
          default: () => {
            return `Login to your account`;
          }
        })}</div>`;
      }
    })}</form></main>`;
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1470f5e4.js.map
