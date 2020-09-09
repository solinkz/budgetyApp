import Vue from 'vue'
import App from './App.vue'

import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import style from './assets/style.css'

Vue.use(bootstrap)
Vue.use(style)

Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
  render: h => h(App)
}).$mount('#app')
