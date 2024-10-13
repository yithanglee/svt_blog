import { a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';
import { b as buildQueryString } from './index3-3243cbac.js';
import './toast-d4caa2f7.js';
import './index2-c4ed6e43.js';
import './utils-7800a155.js';
import 'js-cookie';

async function GET({ params }) {
  console.log("get req gen inputs");
  console.log(params);
  let url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
  const apiData = {
    scope: "gen_inputs",
    module: params.module
  };
  const queryString = buildQueryString(apiData);
  const response = await fetch(url + `/svt_api/webhook?${queryString}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response;
}

export { GET };
//# sourceMappingURL=_server-9811c1c0.js.map
