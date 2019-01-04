import Vue from 'vue'
import App from './App.vue'


import Event from "./index"
Vue.use(Event)


new Vue({
  render: h => h(App)
}).$mount('#app')
