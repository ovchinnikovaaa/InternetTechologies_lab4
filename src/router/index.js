import { createRouter, createWebHistory } from 'vue-router'
import pageHome from '../pages/pageHome'

const routes = [
    {
        path: '/',
        name: 'home',
        component: pageHome
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../pages/pageAbout')
    },
    {
        path: '/shops',
        name: 'shops',
        component: () => import('../pages/pageShops')
    },
    {
        path: '/reviews',
        name: 'reviews',
        component: () => import('../pages/pageReviews')
    },
    {
        path: '/delivery',
        name: 'delivery',
        component: () => import('../pages/pageDelivery')
    }
    ,
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../pages/pageContacts')
    },
    {
        path: '/roses',
        name: 'roses',
        component: () => import('../pages/pageRoses')
    },
    {
        path: '/compositions',
        name: 'compositions',
        component: () => import('../pages/pageCompositions')
    },
    {
        path: '/market',
        name: 'market',
        component: () => import('../pages/pageMarket')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
