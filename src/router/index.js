import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../components/Dashboard.vue'
import Transaksi from '../components/Transaksi/Transaksi.vue'
import Menu from '../components/Transaksi/Menu.vue'

Vue.use(VueRouter)

const routes = [
    //DASHBOARD
    {path: '/', name: 'dashboard', component: Dashboard},
    
    {path: '/transaksi', name: 'transaksi', component: Transaksi},
    
    {path: '/transaksi/tambah', name: 'transaksi_tambah', component: Menu},
    
    //PAKET

  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
//   router.beforeEach((to, from, next) => {
//     if (to.matched.some((record) => record.meta.requiresAuth)) {
//       if (localStorage.getItem('auth')) {
//         next()
//       } else {
//         next('/login')
//       }
//     }
//     next()
//   })
  
  
  export default router