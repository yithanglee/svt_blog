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
        appendQueries: { organization_id: data.organization_id },
        showNew: true,
        canDelete: true,
        inputs,
        // join_statements: JSON.stringify([{ user: 'user' }]),
        search_queries: ["a.id"],
        model: "Outlet",
        preloads: ["organization"],
        buttons: [],
        customCols: [
          {
            title: "General",
            list: [
              "id",
              "name",
              {
                label: "organization_id",
                hidden: true,
                value: data.organization_id
              },
              {
                label: "price_per_minutes",
                alt_name: "Price/Minute",
                expose: true
              },
              { label: "subdomain", expose: true },
              { label: "uid", expose: true },
              { label: "mcode", expose: true },
              { label: "mkey", expose: true },
              {
                label: "payment_gateway",
                selection: ["RM", "ipay88", "fiuu"]
              },
              // {
              // 	label: 'organization_id',
              // 	selection: 'Organization',
              //     module: 'Organization',
              // 	customCols: null,
              // 	search_queries: ['a.name'],
              // 	newData: 'name',
              // 	title_key: 'name'
              // },
              { label: "address", editor2: true },
              "block_reason",
              { label: "is_blocked", boolean: true }
            ]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          {
            label: "Name",
            data: "name",
            subtitle: { label: "address", data: "address" }
          },
          { label: "Subdomain", data: "subdomain" },
          { label: "Ref", data: "uid" },
          {
            label: "Timestamp",
            data: "inserted_at",
            formatDateTime: true,
            offset: 8
          },
          {
            label: "Blocked?",
            data: "is_blocked",
            isBadge: true,
            color: [{ key: true, value: "red" }, { key: false, value: "green" }]
          }
        ]
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a9a1e6ed.js.map
