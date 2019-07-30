import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/normalize.css'
import https from './utils/https'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 
Vue.use(ElementUI)

Vue.prototype.$https = https;
let sessionList = window.sessionStorage;
router.beforeEach((to, from, next) => {
  if(to.meta.title)document.title = to.meta.title
  sessionList.setItem('breadTitle',JSON.stringify(to.meta))
  next()
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
