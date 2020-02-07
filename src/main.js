import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

// Custom directives 
Vue.directive('rainbow', {
  bind(el) {
    el.style.color = '#' + Math.random().toString().slice(2,8)
  }
})

// Filter 
Vue.filter('toCapitalizeFirstWord', function(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
})

Vue.filter('toUppercase', function(value) {
  return value.toUpperCase()
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
