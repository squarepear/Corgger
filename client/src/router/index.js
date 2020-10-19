import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'

const history = createWebHistory()

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

export default createRouter({ history, routes })
