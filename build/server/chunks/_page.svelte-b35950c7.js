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
  let module = data.module, inputs = data.inputs;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Datatable, "Datatable").$$render(
    $$result,
    {
      data: {
        showNew: true,
        canDelete: true,
        inputs,
        search_queries: null,
        model: module,
        preloads: ["stored_medias", "category"],
        customCols: [
          {
            title: "General",
            list: [
              "id",
              "title",
              "excerpt",
              { label: "thumbnail_img", upload: true },
              { label: "img_url", upload: true }
            ]
          },
          {
            title: "Content",
            list: [
              {
                label: "category_id",
                selection: "Category",
                customCols: null,
                search_queries: ["a.name"],
                newData: "name",
                title_key: "name"
              },
              { label: "content", editor: true },
              {
                label: "stored_medias",
                gallery: true,
                child: "url"
              }
            ]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          { label: "Title", data: "title" },
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
//# sourceMappingURL=_page.svelte-b35950c7.js.map
