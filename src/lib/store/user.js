import { writable } from 'svelte/store';
// import { browser } from '$app/environment';

let user = writable(null);

// if (browser) {
// 	user.subscribe((val) => localStorage.setItem('store', JSON.stringify(val)));
// }

export default user;
