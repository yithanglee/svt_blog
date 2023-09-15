/** @type {import('./$types').PageLoad} */
import { genInputs } from '$lib/index.js';
export async function load({ parent, fetch }) {
    let module = 'Blog'
    const response0 = await fetch('/api/gen_input/' + module, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let inputs = await genInputs(response0)
    return {
        module: module,
        inputs: inputs
    };
};