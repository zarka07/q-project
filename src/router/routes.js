
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),

      children: [
        { path: '/', name:'Главная', component: () => import('pages/Index.vue') },
        { path: '/nutrition', name:'Кормление', component: () => import('pages/Nutrition.vue') },
        { path: '/sleeping', name: 'Сон', component: () => import('pages/Sleeping.vue') },
        { path: '/bath', name: 'Купание', component: () => import('pages/Bath.vue') },
        { path: '/milk', name: 'Сцеживание', component: () => import('pages/Milk.vue') },
        { path: '/settings', name: 'Настройки', component: () => import('pages/Settings.vue') },

      ]
  },
    // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  },
  
]

export default routes
