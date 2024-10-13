import { P as PHX_COOKIE, a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';
import { i as isToastOpen } from './toast-d4caa2f7.js';
import Cookies from 'js-cookie';

function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
async function postData(data, options) {
  let res;
  let cookieToken = Cookies.get(PHX_COOKIE);
  let token = cookieToken != null ? cookieToken : "empty";
  var default_options = {
    method: "POST",
    endpoint: PHX_HTTP_PROTOCOL + PHX_ENDPOINT
  };
  let headers = {
    "Authorization": `Basic ${token}`,
    "Content-Type": "application/json"
  };
  if (options.isFormData != null) {
    delete headers["Content-Type"];
  }
  const requestOptions = {
    method: options.method != null ? options.method : "POST",
    headers,
    body: options.isFormData != null ? data : JSON.stringify(data)
  };
  console.info(requestOptions);
  try {
    const response = await fetch(options.endpoint != null ? options.endpoint : default_options.endpoint, requestOptions);
    console.log();
    if (response.status == 403) {
      Cookies.remove(PHX_COOKIE);
      goto("/");
    }
    if (response.ok) {
      res = await response.json();
      console.log(res);
      if (res.status != null) {
        if (res.status == "ok") {
          isToastOpen.notify("Submitted succesfully!");
        } else if (res.status == "error") {
          if (res.reason != null) {
            isToastOpen.notify("Error! " + res.reason);
          }
        }
      } else {
        isToastOpen.notify("Submitted succesfully!");
      }
      if (options.successCallback != null) {
        options.successCallback();
      }
    } else {
      isToastOpen.notify("Not Submitted!");
      let errorMessage = "Failed to post data.";
    }
  } catch (error) {
    console.error(error);
    isToastOpen.notify("Error!");
  }
  return res;
}
function buildQueryString(data, parentKey = null) {
  return Object.keys(data).map((key) => {
    const nestedKey = parentKey ? `${parentKey}[${encodeURIComponent(key)}]` : encodeURIComponent(key);
    if (data[key] != null && typeof data[key] === "object" && !Array.isArray(data[key])) {
      return buildQueryString(data[key], nestedKey);
    } else if (data[key] == null) {
      return ``;
    } else {
      return `${nestedKey}=${encodeURIComponent(data[key])}`;
    }
  }).join("&");
}
async function genInputs(url, module) {
  let items = [];
  const apiData = {
    scope: "gen_inputs",
    module
  };
  const queryString = buildQueryString(apiData);
  const response = await fetch(url + `/svt_api/webhook?${queryString}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (response.ok) {
    let dataList = await response.json();
    let keys = Object.keys(dataList);
    keys.sort((a, b) => {
      return a.localeCompare(b);
    });
    keys.forEach((v, i) => {
      items.push({ key: v, value: dataList[v] });
    });
    console.log(items);
    return items;
  } else {
    console.error("API request failed");
    return [];
  }
}

export { goto as a, buildQueryString as b, genInputs as g, postData as p };
//# sourceMappingURL=index3-3243cbac.js.map
