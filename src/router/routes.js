import MainLayout from 'layouts/MainLayout.vue';
import Login from 'components/Login.vue';
import Register from 'components/Register.vue';
import Dependente from 'pages/Dependente.vue';
import EmailConfirmation from 'pages/EmailConfirmation.vue';
import Menu from 'pages/Menu.vue';
import Configuracao from 'pages/Configuracao.vue';
import ErrorNotFound from 'pages/ErrorNotFound.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Login },
      { path: '/login', component: Login },
      { path: '/register', component: Register },
      { path: '/dependente', component: Dependente },
      { path: '/email-confirmation', name: 'email-confirmation', component: EmailConfirmation },
      { path: '/menu/:id', name: 'menu', component: Menu },
      { path: '/config', component: Configuracao },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: ErrorNotFound,
  },
];

export default routes;
