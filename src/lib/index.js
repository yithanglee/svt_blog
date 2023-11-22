import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';
import { isToastOpen } from '$lib/stores/toast';
import jsCookie from 'js-cookie';
export async function postData(data, options) {
    let res
    let cookieToken = jsCookie.get('token');
    let token = cookieToken != null ? JSON.parse(cookieToken) : 'empty';
    var default_options = {
        method: 'POST',
        endpoint: PHX_HTTP_PROTOCOL + PHX_ENDPOINT
    }
    let headers = {
        "Authorization": `Basic ${token}`,
        "Content-Type": "application/json",
    }
    if (options.isFormData != null) {
        delete headers["Content-Type"]
    }

    const requestOptions = {
        method: options.method != null ? options.method : "POST",
        headers: headers,
        body: options.isFormData != null ? data : JSON.stringify(data),
    };

    try {
        const response = await fetch(options.endpoint != null ? options.endpoint : default_options.endpoint, requestOptions);
        console.log(response)
        if (response.ok) {
            isToastOpen.notify( "Submitted succesfully!")
            res = await response.json();
        } else {
            isToastOpen.notify("Not Submitted!")
            let errorMessage = "Failed to post data.";
        }
    } catch (error) {
        console.error(error)
        isToastOpen.notify("Error!")
        let errorMessage = "An error occurred.";
    }
    return res;
}

export function buildQueryString(data, parentKey = null) {
    return Object.keys(data)
        .map((key) => {
            const nestedKey = parentKey
                ? `${parentKey}[${encodeURIComponent(key)}]`
                : encodeURIComponent(key);

            if (data[key] != null && typeof data[key] === 'object' && !Array.isArray(data[key])) {
                return buildQueryString(data[key], nestedKey);
            } else if (data[key] == null) {
                return ``;
            } else {
                return `${nestedKey}=${encodeURIComponent(data[key])}`;
            }
        })
        .join('&');
}

export async function genInputs(url, module) {

    let items = [];
    const apiData = {
        scope: 'gen_inputs',
        module: module
    };
    const queryString = buildQueryString(apiData);
    const response = await fetch(url + '/svt_api/webhook' + `?${queryString}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        let dataList = await response.json();
        let keys = Object.keys(dataList);
        keys.sort((a, b) => {
            return a.localeCompare(b)
        })

        keys.forEach((v, i) => {
            items.push({ key: v, value: dataList[v] });
        });
        console.log(items);
        return items;
    } else {

        console.error('API request failed');
        return [];
    }
}
export async function api_get(url, params) {

    const apiData = params;
    const queryString = buildQueryString(apiData);

    const response = await fetch(url + '/svt_api/webhook' + `?${queryString}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        let dataList = await response.json();

        return dataList;
    } else {

        console.error('API request failed');
        return [];
    }
}
export async function ngrok_get(url, params) {

    const apiData = params;
    const queryString = buildQueryString(apiData);

    const response = await fetch(url + '/ngrok/webhook' + `?${queryString}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        let dataList = await response.json();

        return dataList;
    } else {

        console.error('API request failed');
        return [];
    }
}