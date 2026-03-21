import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  //Rotas Public
  {
    path: '/',
    component: () => import('layouts/PublicLayout.vue'),
    children: [{ path: '', component: () => import('pages/public/HomePage.vue') }],
  },
  // Rotas Admin
  {
    path: '/Admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [{ path: '', component: () => import('pages/public/HomePage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
