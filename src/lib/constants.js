export const PHX_ENDPOINT = import.meta.env.VITE_PHX_ENDPOINT
export const PHX_WS_PROTOCOL = import.meta.env.VITE_PHX_WS_PROTOCOL
export const PHX_HTTP_PROTOCOL = import.meta.env.VITE_PHX_HTTP_PROTOCOL
export const MENUS = [
    {
        path: '#', title: 'Commission', icon: null, children: [
            { path: '/commission', title: 'Commission', icon: 'camera-foto-solid' },
        
        ]
    },
    { path: '/group_sales_details', title: 'GS', icon: 'book-solid' },
    { path: '/sales', title: 'Sales', icon: 'book-solid' },
    { path: '/products', title: 'Product', icon: 'book-solid' },
    { path: '/ranks', title: 'Rank', icon: 'book-solid' },
  
];