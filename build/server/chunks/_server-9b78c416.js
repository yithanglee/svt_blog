import { a as PHX_HTTP_PROTOCOL, b as PHX_ENDPOINT } from './constants-b9e4be83.js';

async function GET({ params, url }) {
  let blog_url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
  const response = await fetch(blog_url + "/api/" + params.module + `${url.search}`, {
    headers: {
      "content-type": "application/json"
    }
  });
  console.log(response);
  return response;
}

export { GET };
//# sourceMappingURL=_server-9b78c416.js.map
