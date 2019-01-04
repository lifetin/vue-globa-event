import Event from './lib/Event' //引入组件
export default {
  install(Vue) {
    Vue.prototype.$Event = Event;
  }
}
