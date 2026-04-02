import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  //Rotas Public
  {
    path: '/',
    component: () => import('layouts/PublicLayout.vue'),
    children: [{ path: '', component: () => import('pages/public/HomePage.vue') }],
  },



  {
    path: '/auth',
    component: () => import('vue-router').then((m) => m.RouterView),
    children: [
      {
        path: 'login', // URL: /auth/login
        name: 'login',
        component: () => import('pages/admin/Login/LoginPage.vue'),
      },
      {
        path: 'recuperar', // URL: /auth/recuperar
        name: 'recuperar-senha',
        component: () => import('pages/admin/Login/RecuperarPassWordPage.vue'),
      },
    ],
  },

  // Rotas Admin

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
