import { w as writable } from './index2-c4ed6e43.js';

function createToast() {
  var map = {
    message: "Your toast message here.",
    open: false
  };
  const { subscribe, set, update } = writable(map);
  return {
    subscribe,
    show: (message) => update(
      (n) => {
        console.log(n);
        return { ...n, open: true, message };
      }
    ),
    hide: () => update(
      (n) => {
        console.log(n);
        return { ...n, open: false };
      }
    ),
    open: () => {
      return map.open;
    },
    notify: (message) => {
      if (map.open) {
        update(
          (n) => {
            console.log(n);
            return { ...n, open: true, message };
          }
        );
      } else {
        update(
          (n) => {
            console.log(n);
            return { ...n, open: true, message };
          }
        );
      }
      setTimeout(() => {
        update(
          (n) => {
            console.log(n);
            return { ...n, open: false };
          }
        );
      }, 3500);
    }
  };
}
const isToastOpen = createToast();

export { isToastOpen as i };
//# sourceMappingURL=toast-d4caa2f7.js.map
