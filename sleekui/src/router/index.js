import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/pages/Todo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
      // components: {
      //   default: Landing,
      //   land: Todo
      // } 
    }
  ]
})
