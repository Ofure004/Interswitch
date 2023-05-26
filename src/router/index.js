import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp.vue';
import LogInView from '../views/LogInView.vue';
import Verify from '../views/Verify.vue';
import Setpassword from '../views/SetPasswordView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LogInView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/verification',
      name: 'verification',
      component: Verify
    },
    {
      path: '/setpassword',
      name: 'setpassword',
      component: Setpassword
    },


  ]
})

export default router
