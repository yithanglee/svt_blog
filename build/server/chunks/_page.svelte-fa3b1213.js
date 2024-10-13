import { c as create_ssr_component, v as validate_component } from './ssr-7737bd8a.js';
import { D as Datatable } from './Datatable-37632c73.js';
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
        canDelete: true,
        showNew: true,
        inputs,
        appendQueries: { organization_id: data.organization_id },
        //   join_statements: JSON.stringify([
        //     { user: 'user' }
        //   ]),
        search_queries: ["a.id"],
        model: "Item",
        preloads: ["outlet"],
        buttons: [],
        customCols: [
          {
            title: "General",
            list: [
              "id",
              "name",
              "short_name1",
              "short_name2",
              "price",
              "reps",
              "delay",
              {
                label: "organization_id",
                hidden: true,
                value: data.organization_id
              },
              {
                label: "outlet_id",
                selection: "Outlet",
                customCols: null,
                search_queries: ["a.name|a.organization_id=" + data.organization_id],
                newData: "name",
                title_key: "name"
              }
            ]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          { label: "Name", data: "name" },
          {
            label: "Short Name",
            data: "short_name1",
            subtitle: { label: "address", data: "short_name2" }
          },
          {
            label: "Outlet",
            data: "name",
            through: ["outlet"]
          },
          {
            label: "Price",
            data: "price",
            showFloat: true
          },
          { label: "Reps", data: "reps" },
          { label: "Interval Delay", data: "delay" },
          {
            label: "Timestamp",
            data: "inserted_at",
            formatDateTime: true,
            offset: 8
          }
        ]
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-fa3b1213.js.map
