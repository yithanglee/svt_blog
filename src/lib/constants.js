export const PHX_ENDPOINT = import.meta.env.VITE_PHX_ENDPOINT
export const PHX_WS_PROTOCOL = import.meta.env.VITE_PHX_WS_PROTOCOL
export const PHX_HTTP_PROTOCOL = import.meta.env.VITE_PHX_HTTP_PROTOCOL
export const MENUS = [
    {
        path: '#', title: 'Experiments', icon: null, children: [
            { path: '/plate', title: 'Car Plate', icon: 'camera-foto-solid' },
            { path: '/camera', title: 'Camera', icon: 'camera-foto-solid' },
        ]
    },
    { path: '/blogs', title: 'Blogs', icon: 'book-solid' },
    { path: '/categories', title: 'Categories', icon: 'tag-solid' },
    { path: '/users', title: 'Users', icon: null },
    { path: '/customers', title: 'Customers', icon: null, hidden: true },
    { path: '/customer_orders', title: 'Orders', icon: 'receipt-solid', hidden: true }
];