import { c as create_ssr_component, o as onDestroy, v as validate_component, e as escape } from './ssr-7737bd8a.js';
import { B as Badge, M as Modal, F as FormInput } from './DataCell-1442c3dc.js';
import { B as Button } from './Input-9756bc1a.js';
import { S as SimpleTable } from './SimpleTable-35c4d64c.js';
import { D as Datatable } from './Datatable-37632c73.js';
import 'phoenix';
import { p as postData } from './index3-3243cbac.js';
import { a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';
import './utils-7800a155.js';
import 'tailwind-merge';
import './Wrapper-37e83181.js';
import './index2-c4ed6e43.js';
import './Icon-792bdce9.js';
import '@floating-ui/dom';
import 'js-cookie';
import './stores-33060568.js';
import './toast-d4caa2f7.js';

const css = {
  code: "#chartContainer.svelte-1qh3btm{width:100%;height:100%}",
  map: null
};
function filteredInput(key) {
  return null;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
  let { data } = $$props;
  let device = data.device, channel, fdata = {
    delay: 0.1,
    value: 1,
    format: "pwm",
    hexData: ""
  }, formModal = false;
  console.info(device);
  onDestroy(() => {
    channel.leave();
  });
  function customCommand(data2, zcheckPage) {
    console.log("do mar");
    console.log(data2);
    fdata = data2;
    formModal = true;
  }
  function sendCommand(data2, checkPage, confirmModal) {
    console.log(data2);
    console.log("transfer approved!");
    confirmModal(true, "Are you sure to send this command?", () => {
      postData(
        {
          scope: "start_pwm",
          format: data2.format,
          id: data2.id,
          name: device.name,
          item_name: data2.name,
          value: data2.value,
          // reps
          action: data2.action,
          delay: data2.delay
          // delay
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
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Badge, "Badge").$$render(
      $$result,
      {
        style: "position: absolute; right: 10vw;",
        class: "text-large",
        large: "true",
        color: "yellow"
      },
      {},
      {
        default: () => {
          return `${escape("...")}`;
        }
      }
    )} ${validate_component(Modal, "Modal").$$render(
      $$result,
      {
        size: "lg",
        autoclose: false,
        class: "w-full",
        outsideclose: true,
        open: formModal
      },
      {
        open: ($$value) => {
          formModal = $$value;
          $$settled = false;
        }
      },
      {
        footer: () => {
          return `${validate_component(Button, "Button").$$render($$result, {}, {}, {
            default: () => {
              return `Submit`;
            }
          })} `;
        },
        default: () => {
          return `<form class="flex flex-col space-y-6" id="currentForm" action="#"><h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white" data-svelte-h="svelte-17fgs5">Confirmation</h3> <p class="" data-svelte-h="svelte-pdc0hi">Are you sure to send these custom command?</p> <div class="p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" role="tabpanel" aria-labelledby="id-tab">${validate_component(FormInput, "FormInput").$$render(
            $$result,
            {
              module: "DeviceAction",
              key: { label: "delay", expose: true },
              data: fdata,
              input: filteredInput()
            },
            {},
            {}
          )} ${validate_component(FormInput, "FormInput").$$render(
            $$result,
            {
              module: "DeviceAction",
              key: { label: "value", expose: true },
              data: fdata,
              input: filteredInput()
            },
            {},
            {}
          )}${validate_component(FormInput, "FormInput").$$render(
            $$result,
            {
              module: "DeviceAction",
              key: { label: "hexData", expose: true },
              data: fdata,
              input: filteredInput()
            },
            {},
            {}
          )}${validate_component(FormInput, "FormInput").$$render(
            $$result,
            {
              module: "DeviceAction",
              key: { label: "format", expose: true },
              data: fdata,
              input: filteredInput()
            },
            {},
            {}
          )}</div></form>`;
        }
      }
    )} ${validate_component(SimpleTable, "SimpleTable").$$render(
      $$result,
      {
        title: "Device - " + device.name,
        description: "Manual control device with following commands",
        data: {
          apiData: { id: data.id },
          buttons: [
            { name: "Control", onclickFn: sendCommand },
            { name: "Custom", onclickFn: customCommand }
          ],
          scope: "get_device_commands",
          columns: [{ label: "Name", data: "name" }]
        }
      },
      {},
      {}
    )} ${device.qr_code_data ? `<div class="p-20 flex justify-center flex-col items-center gap-3"> <div data-svelte-h="svelte-13ologc"><h2 class="font-bold">DuitNow Static QR</h2> <p>Print out this QRcode</p></div> <img src="${"https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=ec2f66&data=" + escape(device.qr_code_data, true)}" style="display: block;-webkit-user-select: none;margin: auto;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;"></div>` : ``} ${device.is_cloridge == false ? `<div id="chartContainer" style="width: 80vw; height: 50vh;" class="p-4 svelte-1qh3btm"></div>` : ``} ${validate_component(Datatable, "Datatable").$$render(
      $$result,
      {
        data: {
          appendQueries: { device_id: device.id },
          inputs: [],
          search_queries: ["a.uuid"],
          model: "DeviceLog",
          preloads: [],
          buttons: [],
          customCols: [
            {
              title: "General",
              list: ["id", "name", { label: "is_active", boolean: true }]
            }
          ],
          columns: [
            { label: "ID", data: "id" },
            { label: "Remarks", data: "remarks" },
            { label: "Ref", data: "uuid" },
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
  } while (!$$settled);
  return $$rendered;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-34a7c503.js.map
