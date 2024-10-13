import { w as writable } from './index2-c4ed6e43.js';

function createSession() {
  var map = {
    user: null,
    loggedIn: false,
    token: null
  };
  const { subscribe, set, update } = writable(map);
  return {
    subscribe,
    set,
    login: (user) => update(
      (n) => {
        console.log(n);
        return { ...n, loggedIn: true, user };
      }
    ),
    logout: () => update(
      (n) => {
        return { ...n, loggedIn: false, user: null };
      }
    ),
    user: () => {
      return map.user;
    }
  };
}
const session = createSession();

export { session as s };
//# sourceMappingURL=session-513d96fb.js.map
