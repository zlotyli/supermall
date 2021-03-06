import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
// 导入插件
import toast from 'components/common/toast'

// 导入fastclick
import FastClick from 'fastclick';
// 导入懒加载lazyload
import VueLazyLoad from 'vue-lazyload';

Vue.config.productionTip = false

// 解决移动端300ms的延迟
FastClick.attach(document.body);
// 使用懒加载的插件
Vue.use(VueLazyLoad,{
  loading: require('assets/img/common/placeholder.png')
});
// 添加事件总线对象
Vue.prototype.$bus = new Vue()

// 安装toast插件
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
