import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/pages/Todo'
import NumberGuessing from '@/pages/Game'
import Weather from '@/pages/Weather'
import Loan from '@/pages/Loan'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path:'/loan',
      name: 'loan',
      component: Loan
    },
    {
      path:'/weather',
      name: 'weather',
      component: Weather
    }
  ]
})
