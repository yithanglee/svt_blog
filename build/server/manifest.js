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
		client: {"start":"_app/immutable/entry/start.1ba06f30.js","app":"_app/immutable/entry/app.0cba81fa.js","imports":["_app/immutable/entry/start.1ba06f30.js","_app/immutable/chunks/scheduler.a278e30b.js","_app/immutable/chunks/singletons.c44d92ae.js","_app/immutable/entry/app.0cba81fa.js","_app/immutable/chunks/scheduler.a278e30b.js","_app/immutable/chunks/index.bc19f21f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-f5562e35.js')),
			__memo(() => import('./chunks/1-46216d44.js')),
			__memo(() => import('./chunks/2-33b233b0.js')),
			__memo(() => import('./chunks/3-30239afa.js')),
			__memo(() => import('./chunks/4-31ae5f59.js')),
			__memo(() => import('./chunks/5-54f2096b.js')),
			__memo(() => import('./chunks/6-f41719a2.js')),
			__memo(() => import('./chunks/7-751ce663.js')),
			__memo(() => import('./chunks/8-6c06346f.js')),
			__memo(() => import('./chunks/9-054c923f.js')),
			__memo(() => import('./chunks/10-b74d37ac.js')),
			__memo(() => import('./chunks/11-4097aced.js')),
			__memo(() => import('./chunks/12-ca569ea6.js')),
			__memo(() => import('./chunks/13-4c6a18c3.js')),
			__memo(() => import('./chunks/14-2e9f6a1f.js')),
			__memo(() => import('./chunks/15-19b5b639.js')),
			__memo(() => import('./chunks/16-9264a2f0.js')),
			__memo(() => import('./chunks/17-5da7ab46.js')),
			__memo(() => import('./chunks/18-42f15829.js')),
			__memo(() => import('./chunks/19-77007ed2.js')),
			__memo(() => import('./chunks/20-c92d5600.js')),
			__memo(() => import('./chunks/21-69aa3590.js')),
			__memo(() => import('./chunks/22-c6b098ef.js')),
			__memo(() => import('./chunks/23-49ca3052.js')),
			__memo(() => import('./chunks/24-0a8b055a.js')),
			__memo(() => import('./chunks/25-6a3128b9.js')),
			__memo(() => import('./chunks/26-4bb8ae81.js'))
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
				id: "/(main)/admin/app_route",
				pattern: /^\/admin\/app_route\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(main)/admin/role",
				pattern: /^\/admin\/role\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(main)/admin/role/[role_id]/app_routes2",
				pattern: /^\/admin\/role\/([^/]+?)\/app_routes2\/?$/,
				params: [{"name":"role_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(main)/admin/staff",
				pattern: /^\/admin\/staff\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(main)/announcements",
				pattern: /^\/announcements\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/api/datatable/[module]",
				pattern: /^\/api\/datatable\/([^/]+?)\/?$/,
				params: [{"name":"module","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9b78c416.js'))
			},
			{
				id: "/api/gen_input/[module]",
				pattern: /^\/api\/gen_input\/([^/]+?)\/?$/,
				params: [{"name":"module","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-9811c1c0.js'))
			},
			{
				id: "/(main)/blogs",
				pattern: /^\/blogs\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(main)/brands",
				pattern: /^\/brands\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(main)/categories",
				pattern: /^\/categories\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(main)/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(main)/devices",
				pattern: /^\/devices\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(main)/devices/[id]",
				pattern: /^\/devices\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(main)/items",
				pattern: /^\/items\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(main)/organizations",
				pattern: /^\/organizations\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(main)/outlets",
				pattern: /^\/outlets\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(main)/pages",
				pattern: /^\/pages\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(main)/products",
				pattern: /^\/products\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(main)/products/[product_id]/countries",
				pattern: /^\/products\/([^/]+?)\/countries\/?$/,
				params: [{"name":"product_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(main)/products/[product_id]/stocks",
				pattern: /^\/products\/([^/]+?)\/stocks\/?$/,
				params: [{"name":"product_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(main)/sales",
				pattern: /^\/sales\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(main)/sections",
				pattern: /^\/sections\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(main)/slides",
				pattern: /^\/slides\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(main)/users",
				pattern: /^\/users\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(main)/users/placements",
				pattern: /^\/users\/placements\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 26 },
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
