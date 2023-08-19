/** @type {import('./$types').PageLoad} */
import { genInputs } from '$lib/index.js';
export async function load() {
    let url = 'http://localhost:5009',module;

    let inputs = await genInputs(url, 'CustomerOrder')

    return {
        inputs: inputs
    };
};