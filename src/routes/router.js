import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import VideosPage from '@/pages/VideosPage.vue'; 
import SobrePage from '@/pages/SobrePage.vue'; 
import ContatoPage from '@/pages/ContatoPage.vue'; 

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/videos',
    component: VideosPage  
  },
  {
    path: '/sobre',
    component: SobrePage  
  },
  {
    path: '/contato',
    component: ContatoPage  
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
