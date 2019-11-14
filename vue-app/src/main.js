import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import config from './config'

Vue.config.productionTip = false

Vue.use(Element)
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = `${config.API_URL}`

new Vue({
  render: h => h(App),
}).$mount('#app')
