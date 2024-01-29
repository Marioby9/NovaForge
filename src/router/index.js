import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/fb.js'
import Home from '@/views/HomeView.vue'
import Login from '@/views/LoginView.vue'
import Signup from '@/views/SignupView.vue'
import MySpaces from '@/views/MySpacesView.vue'
import EditSpace from '@/views/EditSpaceView.vue'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        requiresAuth: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false,
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: {
        requiresAuth: false,
      }
    },
    {
      path: '/myspaces',
      name: 'myspaces',
      component: MySpaces,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/editSpace/:id',
      name: 'editSpace',
      component: EditSpace,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/user',
      name: 'user',
      component: UserView,
      meta: {
        requiresAuth: true,
      }
    },
  ]
})





router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(auth.currentUser) {
        next()
    } else {
      next('/')
    }
  } else {
    if(auth.currentUser) {
      next({name: 'myspaces'})
    }
    else{
      next()
    }
  }
})

export default router
