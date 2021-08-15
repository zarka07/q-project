
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    //component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', meta:{layout:'main', title:'Главная'}, component: () => import('pages/Index.vue') },
      { path: '/nutrition', meta:{layout:'main', title:'Кормление'}, component: () => import('pages/Nutrition.vue') },
      { path: '/sleeping', meta:{layout:'main', title:'Сон'}, component: () => import('pages/Sleeping.vue') },
      { path: '/bath', meta:{layout:'main', title:'Купание'}, component: () => import('pages/Bath.vue') },
      { path: '/milk', meta:{layout:'main', title:'Сцеживание'}, component: () => import('pages/Milk.vue') },
      { path: '/settings', meta:{layout:'main', title:'Настройки'}, component: () => import('pages/Settings.vue') },

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
