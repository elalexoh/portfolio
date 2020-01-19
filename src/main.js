import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VuePageTransition from 'vue-page-transition'

Vue.config.productionTip = false
Vue.use(VuePageTransition)

export var bus = new Vue({
  data: {
    default: ''
  },
  methods: {
    setMenuOptions(menu, themeColor) {
      this.$emit('updateMenuOptions', menu, themeColor);
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
