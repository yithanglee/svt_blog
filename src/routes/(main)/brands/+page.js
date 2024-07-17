/** @type {import('./$types').PageLoad} */
import { genInputs } from '$lib/index.js';
import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
export async function load() {
    let url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
    let inputs = await genInputs(url, 'Brand')

    return {
        module: 'Brand',
        inputs: inputs
    };
};