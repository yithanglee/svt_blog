export const PHX_ENDPOINT = import.meta.env.VITE_PHX_ENDPOINT
export const PHX_WS_PROTOCOL = import.meta.env.VITE_PHX_WS_PROTOCOL
export const PHX_HTTP_PROTOCOL = import.meta.env.VITE_PHX_HTTP_PROTOCOL
export const PHX_COOKIE = import.meta.env.VITE_PHX_COOKIE

export const MENUS = [
    {
        path: '#', title: 'Admin', icon: null, children: [
            { path: '/admin/staff', title: 'Staff', icon: 'camera-foto-solid' },
            { path: '/admin/role', title: 'Role', icon: 'camera-foto-solid' },

            { path: '/admin/app_route', title: 'Route', icon: 'camera-foto-solid' },
        ]
    },
    { path: '/organizations', title: 'Organizations', icon: 'book-solid' },
    { path: '/brands', title: 'Brands', icon: 'book-solid' },
    { path: '/categories', title: 'Categories', icon: 'book-solid' },
    { path: '/items', title: 'Items', icon: 'book-solid' },
    { path: '/devices', title: 'Devices', icon: 'book-solid' },
    { path: '/outlets', title: 'Outlets', icon: 'book-solid' },
    { path: '/sales', title: 'Sales', icon: 'book-solid' },
    { path: '/blogs', title: 'Blogs', icon: 'book-solid' },
    { path: '/pages', title: 'Pages', icon: 'book-solid' },
    { path: '/products', title: 'Products', icon: 'book-solid' },
    { path: '/sections', title: 'Section', icon: 'book-solid' },
    { path: '/slides', title: 'Slide', icon: 'book-solid' },

];