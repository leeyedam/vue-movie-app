import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js' //특정한 폴더에 index라는 파일을 가져올 때 생략해줄 수 있다(./rountes)
import store from './store/index.js'
import $loadImage from './plugins/loadImage'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) //$route, $router
  .use(store) //$store
  .use(loadImage)
  .mount('#app')