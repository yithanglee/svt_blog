export const PHX_ENDPOINT = import.meta.env.VITE_PHX_ENDPOINT
export const PHX_WS_PROTOCOL = import.meta.env.VITE_PHX_WS_PROTOCOL
export const PHX_HTTP_PROTOCOL = import.meta.env.VITE_PHX_HTTP_PROTOCOL
export const MENUS = [
    { path: '/announcements', title: 'Announcements', icon: 'book-solid' },

    {
        path: '#', title: 'Commission', icon: null, children: [
            { path: '/rewards', title: 'Commission', icon: 'camera-foto-solid' },

        ]
    },
    {
        path: '#', title: 'GroupSales', icon: null, children: [
            { path: '/gs_summary', title: 'GS Summary', icon: 'book-solid' },
            { path: '/group_sales_details', title: 'GS Details', icon: 'book-solid' },

        ]
    },

    { path: '/sales', title: 'Sales', icon: 'book-solid' },
    { path: '/products', title: 'Product', icon: 'book-solid' },
    { path: '/users', title: 'Users', icon: 'book-solid' },
    { path: '/ranks', title: 'Rank', icon: 'book-solid' },
    {
        path: '#', title: 'Ewallets', icon: null, children: [
            { path: '/ewallets', title: 'Ewallets', icon: 'book-solid' },
            { path: '/ewallets/transfers', title: 'Transfers', icon: 'camera-foto-solid' },

        ]
    },


];