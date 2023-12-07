/** @type {import('./$types').LayoutLoad} */
import { session } from '$lib/stores/session';
import jsCookie from 'js-cookie';
import { redirect } from "@sveltejs/kit";
import { onDestroy } from 'svelte';
import { isToastOpen } from '$lib/stores/toast';
import { PHX_HTTP_PROTOCOL, PHX_ENDPOINT } from '$lib/constants';

export async function load({ locals }) {

    console.log("check if this load 1")
    console.log(locals)
    let session_user, user = { username: 'Guest' }, needLogin = false;


    function relogin() {
        needLogin = true;
    }


    let cookieToken = await jsCookie.get('_commerce_front_key');
    console.log("from main layout js")
    console.log(cookieToken);
    console.log(session.user())

    if (cookieToken != null) {
        const response = await fetch((PHX_HTTP_PROTOCOL + PHX_ENDPOINT) + '/svt_api/webhook?scope=get_cookie_user&cookie=' + cookieToken, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            // use cookie to call the user
            // from the token get the username data
            let res = await response.json()
            console.log(res)
            if (res != null) {
                session.login({

                    username: res.user.username,
                    token: cookieToken,
                    role_app_routes: res.user.role.app_routes
                });
            } else {

                relogin();
                isToastOpen.notify("Please login!")
                redirect(307, '/');
            }

        } else {

            relogin();
            isToastOpen.notify("Please login!")
            redirect(307, '/');
        }


    } else {

        relogin();
        isToastOpen.notify("Please login!")
        redirect(307, '/');
    }




    return {
        user: user, needLogin: needLogin

    };
}