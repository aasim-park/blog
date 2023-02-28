/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				colorTheme_1: '#ff3e00',
				colorTheme_2: '#4075a6'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
