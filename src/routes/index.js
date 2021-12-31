import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  //Hash, History 모드 두가지가 있다.
  //Hash모드는 https://google.com/#/search 와같이 #뒤에 이동하고 싶은 페이지를 적어 해당하는 페이지로 접근하는 모드(새로고침했을 때 해당하는 페이지를
  //찾을 수 없다라는 문구를 방지)
  history: createWebHashHistory(),
  scrollBehavior(){
    return {top:0}
  },
  //페이지 구분해주는 역할(routes)
  routes: [
    {
      path:'/',  //페이지를 구분해주는 각각의 경로 (/:메인페이지로 넘어가겠다를 의미)
      component: Home //메인페이지가 연결 되었을 때 어떤 뷰제이에스의 컴포넌트를 연결할건지 적어줌
    },
    {
      path: '/movie/:id',
      component: Movie //about이라는 페이지로 넘어갔을 때 어떤 뷰제이에스의 컴포넌트를 연결할건지
    },
    {
      path: '/about',
      component: About //about이라는 페이지로 넘어갔을 때 어떤 뷰제이에스의 컴포넌트를 연결할건지
    },
    {
      path:'/:pathMatch(.*)',
      component: NotFound
    }
  ]
})