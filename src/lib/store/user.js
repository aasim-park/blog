import { writable } from 'svelte/store';
import { browser } from '$app/environment';
const user = writable(null);

user.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('store', value);
	}
});


export default user;