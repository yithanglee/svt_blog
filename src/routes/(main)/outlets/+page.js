/** @type {import('./$types').PageLoad} */

import { genInputs, postData, buildQueryString } from '$lib/index.js';
import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
export const load = async ({ fetch, params, parent }) => {
  var map = await parent();
  let url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT, module;

  let inputs = await genInputs(url, 'Outlet')
  return {
    module: 'Outlet',
    inputs: inputs, organization_id: map.user.organization_id
  };
};
