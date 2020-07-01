import Vue from 'vue'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false


Vue.use(BaiduMap,{

  ak:'d0ksvsX69XsV0Mo6MW2APCj49fvaaN9h'
})


new Vue({
  render: h => h(App),
}).$mount('#app')
