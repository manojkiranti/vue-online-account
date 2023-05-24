import store from '@/state/store'
const { guard } = require("../lib/auth");
export default [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/pages/account/login'),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters['auth/loggedIn']) {
          // Redirect to the home page instead
          next({ name: 'home' })
        } else {
          // Continue to the login page
          next()
        }
      },
    },
  },
  {
    path: '/',
    component: () => import('../views/pages/account-steps/index'),
    redirect: '/products',
    children: [
      {
        path: '/products',
        component: () => import('../views/pages/account-steps/products'),
        name: 'products',
      },
      {
        path: '/account-startup/:id',
        name: 'accountStartup',
        component: () => import('../views/pages/account-steps/start-step'),
      },
      {
        path: '/verify-user/:id',
        name: 'verifyUser',
        component: () => import('../views/pages/account-steps/steps/verify'),
      },
      {
        path: '/congratulation/:id',
        name: 'CompletePage',
        component: () => import('../views/pages/account-steps/steps/completed')
      },
      {
        path: '/account-step/:id',
        name: 'account-step',
        component: () => import('../views/pages/account-steps/step-index'),
        // redirect: {name:'basic'},
        children: [
          {
            path: '/basic/:id',
            name: 'basic',
            component: () => import('../views/pages/account-steps/steps/step-one')
          },
          {
            path: '/account-information/:id',
            name: 'AccountInformation',
            component: () => import('../views/pages/account-steps/steps/step-two'),
          },
          {
            path: '/activation/:id',
            name: 'activation',
            component: () => import('../views/pages/account-steps/steps/step-three'),
          },

        ]
      },
    ]
  },

  {
    path: '/admin/dashboard',
    component: () => import('../views/pages/dashboard/index'),
    redirect: '/dashboard',
    // beforeEnter: guard,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/',
        component: () => import('../views/pages/dashboard/index'),
        name: 'Dashboard',
        // beforeEnter: guard,
        meta: {
          requiresAuth: true,
        },
      }
    ]
  },
  {
    path: '/online/all-request',
    name: 'onlineAllRequest',
    // meta: { authRequired: true },
    component: () => import('../views/pages/online-account/all-request')
  },
  {
    path: '/online/new-request',
    name: 'onlineNewRequest',
    // meta: { authRequired: true },
    component: () => import('../views/pages/online-account/new-request')
  },
  {
    path: '/online/in-screening',
    name: 'onlineInScreening',
    // meta: { authRequired: true },
    component: () => import('../views/pages/online-account/in-screening')
  },
  {
    path: '/online/rejected-request',
    name: 'onlineRejectedRequest',
    // meta: { authRequired: true },
    component: () => import('../views/pages/online-account/rejected-request')
  },
  {
    path: '/online/returned-request',
    name: 'onlineReturnedRequest',
    // meta: { authRequired: true },
    component: () => import('../views/pages/online-account/returned-request')
  },
  {
    path: '/online/opened-request',
    name: 'onlineApprovedRequest',
    // meta: { authRequired: true },
    component: () => import('../views/pages/online-account/opened-account-list')
  },
  {
    path: '/online/all-request/review-account/:id',
    name: 'onlineAccountReview',
    // meta: { authRequired: true },
    component: () => import('../views/pages/online-account/review-request')
  },
  {
    path: '/product/product-category',
    name: 'onlineProductCategory',
    // meta: { authRequired: true },
    component: () => import('../views/pages/products/product-category')
  },
  {
    path: '/admin/products',
    name: 'products',
    // meta: { authRequired: true },
    component: () => import('../views/pages/products/products')
  },
  {
    path: '/admin/ui/banner',
    name: 'onlineAccountProducts',
    // meta: { authRequired: true },
    component: () => import('../views/pages/UI/banners')
  },
  
  
 

 
]
