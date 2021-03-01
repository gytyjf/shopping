import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import store from './store'
import toast from 'components/content/toast'
import VueLazyLoad from 'vue-lazyload'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

//安装插件
Vue.use(Mint); 
Vue.use(toast);
Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
