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
        inputs,
        join_statements: JSON.stringify([]),
        // { corporate_account: 'corporate_account' },
        // { user: 'user' }
        search_queries: ["a.author"],
        model: module,
        preloads: [],
        customCols: [
          {
            title: "General",
            list: ["id", "author", "category", "title", "subtitle"]
          },
          {
            title: "Content",
            list: [
              { label: "img_url", upload: true },
              { label: "content", editor2: true }
            ]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          { label: "Title", data: "title" },
          { label: "Subtitle", data: "subtitle" },
          { label: "Category", data: "category" },
          { label: "Author", data: "author" }
        ]
      }
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-469f8d96.js.map
