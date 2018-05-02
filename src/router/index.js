import Vue from 'vue'
import Router from 'vue-router'
import ScheduleCollectionOfDay from '@/components/Schedule/ScheduleCollectionOfDay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ScheduleCollectionOfDay',
      component: ScheduleCollectionOfDay
    }
  ]
})
