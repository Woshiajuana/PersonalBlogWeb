import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/index.vue' /**首页*/

Vue.use(Router);

export default new Router({
  routes: [
    /**首页面*/
    {
      path: '/',
      name: 'index',
      component: Index
    }
    /***/
  ]
})
