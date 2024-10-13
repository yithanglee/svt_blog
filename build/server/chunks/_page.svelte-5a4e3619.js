import { c as create_ssr_component, v as validate_component } from './ssr-7737bd8a.js';
import { a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';
import 'js-cookie';
import { s as session } from './session-513d96fb.js';
import { S as SimpleTable } from './SimpleTable-35c4d64c.js';
import 'chart.js/auto';
import { D as DataForm } from './DataCell-1442c3dc.js';
import './utils-7800a155.js';
import './index2-c4ed6e43.js';
import './stores-33060568.js';
import './Input-9756bc1a.js';
import './Wrapper-37e83181.js';
import 'tailwind-merge';
import './Icon-792bdce9.js';
import '@floating-ui/dom';

function refreshPage() {
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  data.chartData;
  var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
  let staff;
  session.subscribe((value) => {
    console.log("subscribed session!");
    console.log(value);
    if (value && value.loggedIn) {
      staff = value.user;
    }
  });
  let showNew = false, customCols = [
    {
      title: "General",
      list: [
        "id",
        { label: "username", expose: true },
        { label: "password", expose: true }
      ]
    }
  ], selectedData = staff, inputs = data.inputs, cac_url = url, model = "Staff";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="flex sm:grid grid-cols-12 flex-col-reverse"><div class="col-span-8 mx-4" data-svelte-h="svelte-1pi7nhv"><canvas id="myChart"></canvas></div> <div class="col-span-4 p-4 mx-4">${validate_component(DataForm, "DataForm").$$render(
    $$result,
    {
      style: "show",
      showNew,
      customCols,
      data: selectedData,
      inputs,
      url: cac_url,
      module: model,
      postFn: refreshPage
    },
    {},
    {}
  )}</div></div> <div class="mt-4">${validate_component(SimpleTable, "SimpleTable").$$render(
    $$result,
    {
      title: "Monthly Outlet Transactions (RM)",
      description: "",
      data: {
        apiData: {
          id: data.id,
          organization_id: data.organization_id
        },
        buttons: [],
        scope: "current_month_outlet_trx_only_rp",
        columns: [
          { label: "Year", data: "year" },
          { label: "Outlet", data: "outlet" },
          {
            label: "Transactions",
            data: "transactions"
          },
          { label: "Amount (RM)", data: "amount" },
          {
            label: "Device",
            data: "device",
            subtitle: { label: "Long", data: "device_long" }
          },
          { label: "Jan", data: "jan" },
          { label: "Feb", data: "feb" },
          { label: "Mar", data: "mar" },
          { label: "Apr", data: "apr" },
          { label: "May", data: "may" },
          { label: "Jun", data: "jun" },
          { label: "Jul", data: "jul" },
          { label: "Aug", data: "aug" },
          { label: "Sep", data: "sep" },
          { label: "Oct", data: "oct" },
          { label: "Nov", data: "nov" },
          { label: "Dec", data: "dec" },
          {
            label: "Organization",
            data: "organization"
          }
        ]
      }
    },
    {},
    {}
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-5a4e3619.js.map
