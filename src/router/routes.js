
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: "/login", component: () => import("components/Login.vue")},
      { path: "/dependente", component: () => import("pages/Dependente.vue")},
      { path: "/menu", component: () => import("pages/Menu.vue")} ,
      { path: "/config", component: () => import("pages/Configuracao.vue")},
      { path: "/login", component: () => import("pages/Login.vue")}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }

]

export default routes
