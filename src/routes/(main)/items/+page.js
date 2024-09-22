/** @type {import('./$types').PageLoad} */

import { genInputs, postData, buildQueryString } from '$lib/index.js';
import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
export const load = async ({ fetch, params, parent }) => {
  var map = await parent();
  console.log('parant')
  console.log(map)
  let url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT, module;

  let inputs = await genInputs(url, 'Item')
  return {
    module: 'Item',
    inputs: inputs, organization_id: map.user.organization_id
  };
};
