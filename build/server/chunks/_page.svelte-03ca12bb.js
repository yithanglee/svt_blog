import { c as create_ssr_component, v as validate_component } from './ssr-7737bd8a.js';
import { a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';
import { D as Datatable } from './Datatable-37632c73.js';
import { p as postData } from './index3-3243cbac.js';
import './utils-7800a155.js';
import './DataCell-1442c3dc.js';
import 'tailwind-merge';
import './Wrapper-37e83181.js';
import './Input-9756bc1a.js';
import './index2-c4ed6e43.js';
import './Icon-792bdce9.js';
import '@floating-ui/dom';
import 'js-cookie';
import './stores-33060568.js';
import './toast-d4caa2f7.js';

function showCondition(data) {
  var bool = false;
  if (data.payment_webhook == null) {
    return bool;
  }
  if (data.payment_ref != null) {
    if (data.status != "pending_payment") {
      return false;
    }
    bool = true;
  }
  return bool;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let inputs = data.inputs;
  var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
  function approveTransfer(data2, checkPage, confirmModal) {
    console.log(data2);
    console.log("transfer approved!");
    confirmModal(true, "Are you sure to manually approve this sale?", () => {
      postData(
        {
          scope: "manual_approve_fpx",
          id: data2.payment_ref
        },
        {
          endpoint: url + "/svt_api/webhook",
          successCallback: () => {
            checkPage();
          }
        }
      );
    });
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Datatable, "Datatable").$$render(
    $$result,
    {
      data: {
        canDelete: true,
        appendQueries: { organization_id: data.organization_id },
        inputs,
        join_statements: JSON.stringify([
          // { corporate_account: 'corporate_account' },
          { device: "device" }
        ]),
        search_queries: ["a.id|b.name"],
        model: "Sale",
        preloads: ["device", "outlet"],
        buttons: [
          {
            name: "Manual Approve (R M)",
            onclickFn: approveTransfer,
            showCondition
          }
        ],
        // { name: 'Manual Approve', onclickFn: approveTransfer2, showCondition: showCondition2 }
        customCols: [
          {
            title: "Order",
            list: [
              "id",
              {
                label: "status",
                selection: [
                  "processing",
                  "sent",
                  "pending_delivery",
                  "complete",
                  "cancelled"
                ]
              },
              "remarks"
            ]
          },
          {
            title: "Others",
            list: ["total_point_value", { label: "payment_webhook", editor2: true }]
          }
        ],
        columns: [
          { label: "ID", data: "id" },
          {
            label: "Outlet",
            data: "name",
            through: ["outlet"]
          },
          {
            label: "Timestamp",
            data: "inserted_at",
            formatDateTime: true,
            offset: 8
          },
          // {
          // 	label: 'Delivery Ref',
          // 	data: 'delivery_ref',
          // 	subtitle: { label: 'Courier', data: 'delivery_method' }
          // },
          { label: "Sale Date", data: "sales_date" },
          { label: "Ref", data: "payment_ref" },
          { label: "Amount", data: "amount" },
          {
            label: "Status",
            data: "status",
            isBadge: true,
            color: [
              { key: "pending_payment", value: "yellow" },
              {
                key: "pending_confirmation",
                value: "yellow"
              },
              { key: "processing", value: "blue" },
              { key: "sent", value: "pink" },
              { key: "pending_delivery", value: "purple" },
              { key: "complete", value: "green" }
            ]
          }
        ]
        // { label: 'User', data: 'username', through: ['user'] },
        // { label: 'Sales Person', data: 'username', through: ['sales_person'] }
      }
      // {
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-03ca12bb.js.map
