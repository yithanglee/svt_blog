/** @type {import('./$types').PageLoad} */
import { api_get } from '$lib/index.js';
import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
export async function load() {
    let url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
    const uniqueId = Date.now();
    let connected = await api_get(url, {scope: "connected", timestamp: uniqueId})

    return {
        device_list: connected
    };
};