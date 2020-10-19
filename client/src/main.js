import './index.css'

import {
  faComment,
  faHeart,
  faHeartBroken,
  faPaw,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import router from './router'

library.add(faPaw, faUser, faHeart, faHeartBroken, faComment, farHeart)

createApp(App).use(router).component('fa-icon', FontAwesomeIcon).mount('#app')
