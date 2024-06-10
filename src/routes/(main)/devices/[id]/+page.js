/** @type {import('./$types').PageLoad} */
import { genInputs } from '$lib/index.js';
import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';

export const load = async ({ fetch, params, parent }) => {
    let url = PHX_HTTP_PROTOCOL + PHX_ENDPOINT;
    console.log(url);

    // Prepare both API calls
    const fetchDevice = fetch(url + '/svt_api/webhook?scope=get_device&id=' + params['id'], {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const fetchWifiLogs = fetch(url + '/svt_api/webhook?scope=get_wifi_logs&id=' + params['id'], {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    // Execute both API calls simultaneously
    const [response1, response2] = await Promise.all([fetchDevice, fetchWifiLogs]);

    let deviceData = null;
    if (response1.ok) {
        deviceData = await response1.json();
        console.log(deviceData);
    }

    let wifiLogsData = null;
    if (response2.ok) {
        wifiLogsData = await response2.json();
        console.log(wifiLogsData);
    }

    return {
        id: params['id'],
        device: deviceData,
        wifi_time_logs: wifiLogsData
    };
};
