import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import 할 것들 
// ok, proceed, agree, working, notworking, done 을 가져올 것
import MainView from '../views/MainView.vue'
import PublishView from '../views/PublishView.vue'
import ApproveView from '../views/ApproveView.vue'
import WorkingView from '../views/WorkingView.vue'
import StopWorkingView from '../views/StopWorkingView.vue'
import CompleteView from '../views/CompleteView.vue'
// import { onMounted } from 'vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: MainView,
  },
  {
    path: '/publish',
    name: 'publish',
    componeent: PublishView
  },
  {
    path: '/approve',
    name: 'approve',
    component: ApproveView,
  },
  {
    path: '/working',
    name: 'working',
    component: WorkingView,
  },
  {
    path: '/stopworking',
    name: 'stopworking',
    component: StopWorkingView,
  },
  {
    path: '/complete',
    name: 'complete',
    component: CompleteView,
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
