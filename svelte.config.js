import adapterNode from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapterNode(),
		alias: {
			$db: './src/lib/db'
		}
	},
	preprocess: vitePreprocess()
};

export default config;
