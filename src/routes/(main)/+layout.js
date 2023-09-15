/** @type {import('./$types').LayoutLoad} */
import { session } from '$lib/stores/session';
import jsCookie from 'js-cookie';
import { redirect } from "@sveltejs/kit";
import { onDestroy } from 'svelte';
import { isToastOpen } from '$lib/stores/toast';
export async function load({ locals }) {

    console.log("check if this load 1")
    console.log(locals)
    let session_user, user = { username: 'Guest' }, needLogin = false;


    function relogin() {
        needLogin = true;
    }


    let cookieToken = jsCookie.get('token');
    console.log(cookieToken);
    console.log(session.user())
    if (cookieToken != null) {
        // from the token get the username data
        session.login({ id: 0, username: 'username', token: cookieToken });

    } else {
        relogin();
        isToastOpen.notify( "Please login!")

        redirect(307, '/');
    }




    return {
        user: user, needLogin: needLogin

    };
}