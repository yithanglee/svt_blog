/** @type {import('./$types').PageLoad} */
import { genInputs } from '$lib/index.js';
import { PHX_ENDPOINT } from '$lib/constants';
export async function load() {
    let url = 'http://' + PHX_ENDPOINT;
    let inputs = await genInputs(url, 'User')

    return {
        inputs: inputs
    };
};