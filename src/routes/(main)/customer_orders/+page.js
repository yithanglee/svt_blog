/** @type {import('./$types').PageLoad} */
import { genInputs } from '$lib/index.js';
import { PHX_ENDPOINT } from '$lib/constants';
export async function load() {
    let url = 'http://' + PHX_ENDPOINT ,module;

    let inputs = await genInputs(url, 'CustomerOrder')

    return {
        inputs: inputs
    };
};