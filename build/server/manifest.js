const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/2damienslab.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.62dde67d.js","app":"_app/immutable/entry/app.d9eddb0d.js","imports":["_app/immutable/entry/start.62dde67d.js","_app/immutable/chunks/scheduler.f417f79b.js","_app/immutable/chunks/singletons.a65e5d45.js","_app/immutable/chunks/index.485c1d57.js","_app/immutable/entry/app.d9eddb0d.js","_app/immutable/chunks/scheduler.f417f79b.js","_app/immutable/chunks/index.8ede18d1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-ae6e308f.js')),
			__memo(() => import('./chunks/1-8a6c4929.js')),
			__memo(() => import('./chunks/2-f189cf38.js')),
			__memo(() => import('./chunks/3-8208e27e.js')),
			__memo(() => import('./chunks/4-8b2b4652.js')),
			__memo(() => import('./chunks/5-5dd8dfd1.js')),
			__memo(() => import('./chunks/6-bf1190c9.js')),
			__memo(() => import('./chunks/7-4ced102f.js')),
			__memo(() => import('./chunks/8-99aed172.js')),
			__memo(() => import('./chunks/9-7156c370.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/(main)/camera",
				pattern: /^\/camera\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(main)/customer_orders",
				pattern: /^\/customer_orders\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(main)/customers",
				pattern: /^\/customers\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(main)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(main)/plate",
				pattern: /^\/plate\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(main)/users",
				pattern: /^\/users\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
