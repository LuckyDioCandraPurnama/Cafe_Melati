import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from '../components/Dashboard.vue'
import Transaksi from '../components/Transaksi/Transaksi.vue'
import Menu from '../components/Transaksi/Menu.vue'
import Detail from '../components/Transaksi/Detail_Transaksi.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', name: 'dashboard', component: Dashboard},
    
    {path: '/transaksi', name: 'transaksi', component: Transaksi},
    
    {path: '/transaksi/tambah', name: 'transaksi_tambah', component: Menu},

    {path: '/transaksi/detail', name: 'transaksi_detail', component: Detail},

  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router