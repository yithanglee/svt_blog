import { c as create_ssr_component, v as validate_component } from './ssr-7737bd8a.js';
import { D as Datatable } from './Datatable-37632c73.js';
import './utils-7800a155.js';
import './DataCell-1442c3dc.js';
import 'tailwind-merge';
import './Wrapper-37e83181.js';
import './Input-9756bc1a.js';
import './index2-c4ed6e43.js';
import './Icon-792bdce9.js';
import '@floating-ui/dom';
import 'js-cookie';
import './constants-b9e4be83.js';
import './index3-3243cbac.js';
import './toast-d4caa2f7.js';
import './stores-33060568.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let inputs = data.inputs;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Datatable, "Datatable").$$render(
    $$result,
    {
      data: {
        showNew: true,
        inputs,
        search_queries: null,
        model: "AppRoute",
        preloads: [],
        customCols: [
          {
            title: "General",
            list: [
              { label: "name", expose: true },
              { label: "icon", expose: true },
              { label: "route", expose: true },
              "id",
              { label: "can_get", boolean: true },
              { label: "can_post", boolean: true }
            ]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          { label: "Name", data: "name" },
          { label: "Icon", data: "icon" },
          { label: "Route", data: "route" },
          {
            label: "HTTP GET",
            data: "can_get",
            isBadge: true,
            color: [{ key: false, value: "yellow" }, { key: true, value: "green" }]
          },
          {
            label: "HTTP POST",
            data: "can_post",
            isBadge: true,
            color: [{ key: false, value: "yellow" }, { key: true, value: "green" }]
          }
        ]
        // { label: 'Code', data: 'member_code', isBadge: true },
        // { label: 'Role', data: 'name', through: ['role'] }
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-cd0682bd.js.map
