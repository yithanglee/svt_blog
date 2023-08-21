/** @type {import('./$types').PageLoad} */
import { PHX_ENDPOINT } from '$lib/constants';

export async function load() {
    console.log(PHX_ENDPOINT)
    return { endpoint: PHX_ENDPOINT };
};