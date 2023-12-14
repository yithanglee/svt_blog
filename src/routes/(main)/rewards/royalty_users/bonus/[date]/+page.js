/** @type {import('./$types').PageLoad} */

import { postData, buildQueryString } from '$lib/index.js';
import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
export const load = async ({ fetch, params, parent }) => {

    let url2 = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
    const apiData = params;
    const queryString = buildQueryString(apiData);

    const response = await fetch(url2 + '/svt_api/webhook' + `?${queryString}&scope=royalty_bonus`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
       var list = await response.json() ; 
       console.log(list)
        return {
            bonus: list,
         
        };
    }
    
};