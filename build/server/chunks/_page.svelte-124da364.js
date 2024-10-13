import { c as create_ssr_component, v as validate_component } from './ssr-7737bd8a.js';
import { a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';
import { a as goto, p as postData } from './index3-3243cbac.js';
import { D as Datatable } from './Datatable-37632c73.js';
import { S as SimpleTable } from './SimpleTable-35c4d64c.js';
import './utils-7800a155.js';
import './toast-d4caa2f7.js';
import './index2-c4ed6e43.js';
import 'js-cookie';
import './DataCell-1442c3dc.js';
import 'tailwind-merge';
import './Wrapper-37e83181.js';
import './Input-9756bc1a.js';
import './Icon-792bdce9.js';
import '@floating-ui/dom';
import './stores-33060568.js';

function showCondition2(data) {
  var bool = false;
  if (data.outlet != null) {
    if (data.outlet.payment_gateway == "fiuu") {
      return true;
    }
  }
  return bool;
}
function showCondition(data) {
  var bool = false;
  if (data.outlet != null) {
    return true;
  }
  return bool;
}
function websiteHref(data) {
  console.log(data);
  return "https://iot.djtech4u.com?d=" + data.name + "&location=" + (data.outlet == null ? "none" : data.outlet.subdomain || "none");
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let inputs = data.inputs;
  var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
  function showWebsite(data2, checkPage, confirmModal) {
    goto("https://iot.djtech4u.com?d=" + data2.name + "&location=" + data2.outlet.subdomain);
  }
  function controlDevice(data2, checkPage, confirmModal) {
    goto("/devices/" + data2.id);
  }
  function regenQr(data2, checkPage, confirmModal) {
    console.log(data2);
    console.log("transfer approved!");
    confirmModal(
      true,
      `

        <span class="">Are you sure to regenerate QR?</span>`,
      () => {
        postData(
          {
            scope: "gen_static_qr",
            id: data2.id,
            name: data2.name
          },
          {
            endpoint: url + "/svt_api/webhook",
            successCallback: (e) => {
              console.log(e);
              checkPage();
            }
          }
        );
      }
    );
  }
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
        search_queries: ["a.name"],
        model: "Device",
        preloads: ["outlet", "executor_board", "organization"],
        buttons: [
          {
            name: "Website",
            onclickFn: showWebsite,
            href: websiteHref,
            showCondition
          },
          {
            name: "Control",
            onclickFn: controlDevice
          },
          {
            name: "Regen QR",
            onclickFn: regenQr,
            showCondition: showCondition2
          }
        ],
        customCols: [
          {
            title: "General",
            list: [
              "id",
              "name",
              "short_name",
              "default_io_pin",
              "format",
              "cloridge_device_uid",
              {
                label: "organization_id",
                hidden: true,
                value: data.organization_id
              },
              {
                label: "executor_board_id",
                selection: "Device",
                customCols: null,
                search_queries: ["a.name"],
                newData: "name",
                title_key: "name"
              },
              {
                label: "outlet_id",
                selection: "Outlet",
                customCols: null,
                search_queries: ["a.name|a.organization_id=" + data.organization_id],
                newData: "name",
                title_key: "name"
              },
              {
                label: "organization_id",
                selection: "Organization",
                customCols: null,
                search_queries: ["a.name"],
                newData: "name",
                title_key: "name"
              },
              { label: "is_cloridge", boolean: true },
              { label: "record_wifi_time", boolean: true },
              { label: "skip_first", boolean: true },
              { label: "is_active", boolean: true }
            ]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          { label: "Name", data: "name" },
          {
            label: "Timestamp",
            data: "inserted_at",
            formatDateTime: true,
            offset: 8
          },
          {
            label: "Status",
            data: "is_active",
            isBadge: true,
            color: [{ key: "false", value: "pink" }, { key: "true", value: "green" }]
          },
          // { label: 'User', data: 'username', through: ['user'] },
          {
            label: "Outlet",
            data: "name",
            through: ["outlet"]
          }
        ]
      }
    },
    {},
    {}
  )} <div class="mt-4">${validate_component(SimpleTable, "SimpleTable").$$render(
    $$result,
    {
      title: "Monthly Outlet Transactions (RM)",
      description: "",
      data: {
        apiData: {
          id: data.id,
          organization_id: data.organization_id,
          year_month: data.yearMonth
        },
        buttons: [],
        scope: "current_month_outlet_trx_only_days",
        columns: data.columns
      }
    },
    {},
    {}
  )}</div> <div class="mt-4">${validate_component(SimpleTable, "SimpleTable").$$render(
    $$result,
    {
      title: "Monthly Outlet Transactions (RM) Prev 1 Month",
      description: "",
      data: {
        apiData: {
          id: data.id,
          organization_id: data.organization_id,
          year_month: data.prevYearMonth
        },
        buttons: [],
        scope: "current_month_outlet_trx_only_days",
        columns: data.columns
      }
    },
    {},
    {}
  )}</div> <div class="mt-4">${validate_component(SimpleTable, "SimpleTable").$$render(
    $$result,
    {
      title: "Monthly Outlet Transactions (RM) Prev 2 Month",
      description: "",
      data: {
        apiData: {
          id: data.id,
          organization_id: data.organization_id,
          year_month: data.prevYear2Month
        },
        buttons: [],
        scope: "current_month_outlet_trx_only_days",
        columns: data.columns
      }
    },
    {},
    {}
  )}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-124da364.js.map
