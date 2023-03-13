import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faEnvelope, faPhone, faGraduationCap, faCalendar} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faUser, faEnvelope, faPhone, faGithub, faGraduationCap, faCalendar)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
