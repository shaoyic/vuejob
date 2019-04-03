import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import My from '../components/my'
import Post from '../components/post'
import Issue from '../components/issue'
import Detail from '../components/detail'
import Job from '../components/job'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: Post},
		{path:'/My',component:My},
		{path:'/Post',component:Post,children:[
			
		]},
		{path:'/Issue',component:Issue},
		{path:'/Detail',component:Detail},
		{path:'/Job',component:Job}
		
  ]
})
