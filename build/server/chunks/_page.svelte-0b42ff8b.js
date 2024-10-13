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
  let module = data.module, inputs = data.inputs;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Datatable, "Datatable").$$render(
    $$result,
    {
      data: {
        canDelete: true,
        showNew: true,
        inputs,
        search_queries: null,
        model: module,
        preloads: ["brand", "category"],
        customCols: [
          {
            title: "General",
            list: [
              "id",
              "name",
              { label: "short_desc", editor2: true },
              { label: "desc", editor2: true },
              {
                label: "brand_id",
                selection: "Brand",
                customCols: null,
                search_queries: ["a.name"],
                newData: "name",
                title_key: "name"
              },
              {
                label: "category_id",
                selection: "Category",
                customCols: null,
                search_queries: ["a.name"],
                newData: "name",
                title_key: "name"
              },
              { label: "img_url", upload: true },
              { label: "img_url2", upload: true },
              { label: "img_url3", upload: true },
              { label: "img_url4", upload: true },
              { label: "img_url5", upload: true },
              { label: "img_url6", upload: true }
            ]
          }
        ],
        buttons: [],
        columns: [
          { label: "ID", data: "id" },
          { label: "Name", data: "name" },
          {
            label: "Images",
            data: "img_url",
            showImg: true
          },
          {
            label: "1",
            data: "img_url2",
            showImg: true
          },
          {
            label: "2",
            data: "img_url3",
            showImg: true
          },
          {
            label: "3",
            data: "img_url4",
            showImg: true
          },
          {
            label: "4",
            data: "img_url5",
            showImg: true
          },
          {
            label: "5",
            data: "img_url6",
            showImg: true
          },
          {
            label: "Brand",
            data: "name",
            through: ["brand"]
          },
          {
            label: "Category",
            data: "name",
            through: ["category"]
          }
        ]
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-0b42ff8b.js.map
