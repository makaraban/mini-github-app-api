import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import NotFound from '@/components/NotFoundPage.vue'
import GitUsers from '@/views/GitUsersPage.vue'

const routes = [
    { path: '/', component: Home },
    // { path: '/users', component: Users },
    // { path: '/articles', component: Article },
    { path: '/users/:username', component: GitUsers },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
