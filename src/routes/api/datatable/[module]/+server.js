import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';

/** @type {import('./$types').RequestHandler} */

export async function GET({ params, url }) {
    console.log('get req')

    let blog_url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;

	const response = await fetch(blog_url + '/api/' + params.module + `${url.search}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response;
};