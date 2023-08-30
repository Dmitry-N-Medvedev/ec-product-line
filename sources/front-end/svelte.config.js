import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      out: 'build',
      precompress: false,
      envPrefix: '',
    }),
    serviceWorker: {
      register: true,
    },
    files: {
      hooks: {
        server: 'src/files/hooks/hooks.server.mjs',
      },
    },
    csp: {
      directives: {

      },
      reportOnly: {},
    },
    env: {
      dir: './environments',
    },
	},
};

export default config;
