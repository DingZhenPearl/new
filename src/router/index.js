import { createRouter, createWebHistory } from 'vue-router'
import ControlPage from '../components/controlPage.vue'
import StatsPage from '../components/StatsPage.vue'
import SettingsPage from '../components/SettingsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/control'
  },
  {
    path: '/control',
    name: 'Control',
    component: ControlPage
  },
  {
    path: '/stats',
    name: 'Stats',
    component: StatsPage
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router