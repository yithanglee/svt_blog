import { c as create_ssr_component, v as validate_component } from './ssr-7737bd8a.js';
import { D as Datatable } from './Datatable-37632c73.js';
import { a as goto } from './index3-3243cbac.js';
import 'js-cookie';
import './utils-7800a155.js';
import './DataCell-1442c3dc.js';
import 'tailwind-merge';
import './Wrapper-37e83181.js';
import './Input-9756bc1a.js';
import './index2-c4ed6e43.js';
import './Icon-792bdce9.js';
import '@floating-ui/dom';
import './constants-b9e4be83.js';
import './stores-33060568.js';
import './toast-d4caa2f7.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let inputs = data.inputs;
  function viewTransfer(data2) {
    console.log(data2);
    console.log("transfer approved!");
    goto("/admin/role/" + data2.id + "/app_routes2");
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Datatable, "Datatable").$$render(
    $$result,
    {
      data: {
        showNew: true,
        inputs,
        search_queries: null,
        model: "Role",
        preloads: [],
        customCols: [
          {
            title: "General",
            list: [
              { label: "name", expose: true },
              { label: "desc", expose: true },
              "id"
            ]
          }
        ],
        buttons: [{ name: "View", onclickFn: viewTransfer }],
        columns: [
          { label: "ID", data: "id" },
          { label: "Role", data: "name" },
          { label: "Desc", data: "desc" }
        ]
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-1bfdd7b7.js.map
