export const menuItems = [
    {
        id: 1,
        label: "menuitems.menu.text",
        isTitle: true
    },
    {
        id: 2,
        label: 'menuitems.dashboard.text',
        icon: 'ri-dashboard-line',
        badge: {
            variant: "success",
            text: "menuitems.dashboard.badge"
        },
        link: '/admin/dashboard'
    },
    {
        id: 5,
        label: 'menuitems.onlineaccount.text',
        icon: 'ri-building-2-line',
        subItems: [
            {
                id: 6,
                label: 'menuitems.onlineaccount.list.allrequest',
                link: '/online/all-request',
                // subItems: [
                //     {
                //         id: 22,
                //         label: 'menuitems.onlineaccount.list.reviewRequest',
                //         link: '/online/all-request/review-account/:id',  
                //     }
                // ]
            },
            {
                id: 7,
                label: 'menuitems.onlineaccount.list.newrequest',
                link: '/online/new-request'
            },
            {
                id: 8,
                label: 'menuitems.onlineaccount.list.inscreening',
                link: '/online/in-screening'
            },
            {
                id: 9,
                label: 'menuitems.onlineaccount.list.rejectedrequest',
                link: '/online/rejected-request'
            },
            {
                id: 10,
                label: 'menuitems.onlineaccount.list.returnedrequest',
                link: '/online/returned-request'
            },
            {
                id: 11,
                label: 'menuitems.onlineaccount.list.opened',
                link: '/online/opened-request'
            }
        ]
    },
    {
        id: 6,
        label: 'menuitems.products.text',
        icon: 'ri-store-2-line',
        subItems: [
            
            {
                id: 7,
                label: 'menuitems.products.list.productCategory',
                link: '/product/product-category'
            },
            {
                id: 6,
                label: 'menuitems.products.list.products',
                link: '/admin/products'
            },
        ]
    },
    {
        id: 7,
        label: 'menuitems.ui.text',
        icon: 'ri-user-line',
        subItems: [
            {
                id: 6,
                label: 'menuitems.ui.list.banner',
                link: '/admin/ui/banner'
            }
        ]
    },
]