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

function viewDO(data, checkPage, confirmModal) {
}
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
        canDelete: true,
        inputs,
        search_queries: ["a.remarks"],
        model: "Slide",
        preloads: [],
        buttons: [{ name: "Preview", onclickFn: viewDO }],
        customCols: [
          {
            title: "Order",
            list: [
              "id",
              "order",
              "remarks",
              "class_list",
              { label: "content", editor2: true },
              { label: "mobile_img_url", upload: true },
              { label: "img_url", upload: true },
              { label: "is_show", boolean: true },
              { label: "is_banner", boolean: true }
            ]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          { label: "Sequence", data: "order" },
          {
            label: "Mobile",
            data: "mobile_img_url",
            showImg: true
          },
          {
            label: "Desktop",
            data: "img_url",
            showImg: true
          },
          {
            label: "Timestamp",
            data: "inserted_at",
            formatDateTime: true,
            offset: 8
          },
          { label: "Remarks", data: "remarks" },
          {
            label: "Banner Type?",
            data: "is_banner",
            isBadge: true,
            color: [{ key: false, value: "pink" }, { key: true, value: "green" }]
          },
          {
            label: "Status",
            data: "is_show",
            isBadge: true,
            color: [{ key: false, value: "pink" }, { key: true, value: "green" }]
          }
        ]
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-817abca5.js.map
