import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        name: 'Results',
        path: 'results',
        component: () => import('../views/Results.vue'),
        props: true,
      }
    ]
  },
  {
    name: 'Details',
    path: '/details/:movieId',
    component: () => import('../views/MovieDetails.vue'),
    props: true,
  }
]

const router = new VueRouter({
  routes
})

export default router
