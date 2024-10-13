import { c as create_ssr_component, v as validate_component } from './ssr-5d41fc77.js';
import { D as Datatable } from './Datatable-a9f803d4.js';
import './Button-74bd8bb2.js';
import './names-11b10067.js';
import 'tailwind-merge';
import './Frame-27df8d5f.js';
import './CloseButton-7ff9a9d2.js';
import './Tabs-c22d3c72.js';
import './index-eae86eb8.js';
import './Input-dfaf8a23.js';
import './Icon-783b139c.js';
import './constants-d8ea950c.js';
import './index2-f7f05ac4.js';
import './stores-6aed4ed7.js';
import './TableHeadCell-5608f57a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let inputs = data.inputs;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Datatable, "Datatable").$$render(
    $$result,
    {
      data: {
        inputs,
        search_queries: ["a.phone", "a.name", "a.email"],
        model: "Customer",
        preloads: [],
        customCols: [
          {
            title: "General",
            list: ["id", "username", "name", "email", "phone"]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          { label: "Username", data: "username" },
          // { label: 'Full', data: 'full_name' },
          { label: "Name", data: "name" },
          { label: "Email", data: "email" },
          { label: "Code", data: "member_code" },
          { label: "Phone", data: "phone" }
        ]
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1a7ee9d4.js.map
