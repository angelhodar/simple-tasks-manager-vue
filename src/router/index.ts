import { createRouter, createWebHistory } from 'vue-router'
import Exercise from '@/components/Exercise.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'exercise',
      component: Exercise,
    }
  ],
})

export default router
