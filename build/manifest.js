export const manifest = {
	appDir: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		entry: {"file":"_app/immutable/start-4aa1edc3.js","imports":["_app/immutable/start-4aa1edc3.js","_app/immutable/chunks/index-c404bad3.js","_app/immutable/chunks/preload-helper-bb2dece2.js"],"stylesheets":[]},
		nodes: [
			() => import('./server/nodes/0.js'),
			() => import('./server/nodes/1.js'),
			() => import('./server/nodes/4.js'),
			() => import('./server/nodes/2.js'),
			() => import('./server/nodes/3.js'),
			() => import('./server/nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "gallery",
				pattern: /^\/gallery\/?$/,
				names: [],
				types: [],
				path: "/gallery",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "musica",
				pattern: /^\/musica\/?$/,
				names: [],
				types: [],
				path: "/musica",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
