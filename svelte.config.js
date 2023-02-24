import adapterNode from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapterNode(),
		alias: {
			$db: './src/lib/db'
		}
	}
};

export default config;
