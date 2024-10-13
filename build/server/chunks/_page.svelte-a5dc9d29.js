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
  let inputs = data.inputs, dataList = data.dataList;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Datatable, "Datatable").$$render(
    $$result,
    {
      data: {
        showNew: true,
        canDelete: true,
        appendQueries: { role_id: data.role_id },
        inputs,
        search_queries: null,
        model: "RoleAppRoute",
        preloads: ["role", "app_route"],
        customCols: [
          {
            title: "General",
            list: [
              "id",
              {
                label: "AppRoute",
                selection: "AppRoute",
                multiSelection: true,
                dataList: dataList.app_routes,
                module: "AppRoute",
                parentId: data.role_id,
                parent_module: "RoleAppRoute"
              }
            ]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          {
            label: "Role",
            data: "name",
            through: ["role"]
          },
          {
            label: "Scope",
            data: "name",
            through: ["app_route"]
          },
          {
            label: "URL",
            data: "route",
            through: ["app_route"]
          }
        ]
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a5dc9d29.js.map
