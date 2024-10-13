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
        appendQueries: { product_id: data.product_id },
        inputs,
        search_queries: null,
        model: "ProductStock",
        preloads: ["product", "stock"],
        customCols: [
          {
            title: "General",
            list: [
              "id",
              {
                label: "Stock",
                selection: "Stock",
                multiSelection: true,
                dataList: dataList.stocks,
                module: "Stock",
                parentId: data.product_id,
                parent_module: "ProductStock"
              },
              { label: "qty", expose: true }
            ]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          {
            label: "Product",
            data: "name",
            through: ["product"]
          },
          {
            label: "Stock",
            data: "name",
            through: ["stock"]
          },
          { label: "Qty", data: "qty" }
        ]
        // { label: 'URL', data: 'route', through: ['app_route'] }
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-db79cd82.js.map
