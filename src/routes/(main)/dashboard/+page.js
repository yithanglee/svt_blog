/** @type {import('./$types').PageLoad} */
import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
import { buildQueryString, postData, genInputs } from '$lib/index.js';
	
export const load = async ({ fetch, params, parent }) => {
    var map = await parent();
	var url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;

    let inputs = await genInputs(url, 'User')
    const apiData = {
        scope: 'yearly_sales_performance',
        organization_id: map.user.organization_id
    };
    const queryString = buildQueryString(apiData);
    const response = await fetch(url + '/svt_api/webhook' + `?${queryString}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        let res = await response.json();
        return {inputs: inputs,
            chartData: res, organization_id: map.user.organization_id
  
        };
    }
  
};