import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import { Main } from 'element-ui';
import MainPage from './components/MainPage.vue'
import AddPackage from './components/AddPackage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/AddPackage',
      name: 'AddPackage',
      component: AddPackage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
