
export async function postData(data, options) {

    var default_options = {
        method: 'POST',
        endpoint: 'http://localhost:5009'
    }

    const requestOptions = {
        method: options.method != null ? options.method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };

    try {
        const response = await fetch(options.endpoint != null ? options.endpoint : default_options.endpoint, requestOptions);
       console.log(response)
        if (response.ok) {
            await response.json();
        } else {
            let errorMessage = "Failed to post data.";
        }
    } catch (error) {
        console.error(error)
        let errorMessage = "An error occurred.";
    }
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
    const response = await fetch(url + '/api/webhook' + `?${queryString}`, {
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
        title = 'Not available'
        console.error('API request failed');
        return [];
    }
}