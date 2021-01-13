import Vue from "vue";
import App from "./App.vue";
import { createStore } from './store'
import { createRouter } from "./router";
// 导出Vue实例⼯⼚函数，为每次请求创建独⽴实例
// 上下⽂⽤于给vue实例传递参数
export function createApp(context) {
    const router = createRouter();
    const store = createStore()
    const app = new Vue({
        router,
        context,
        render: h => h(App)
    });
    return { app, router, store};
}

Vue.mixin({
  beforeMount() {
      const { asyncData } = this.$options;
      if (asyncData) {
          // 将获取数据操作分配给 promise
          // 以便在组件中，我们可以在数据准备就绪后
          // 通过运⾏ `this.dataPromise.then(...)` 来执⾏其他任务
          this.dataPromise = asyncData({
              store: this.$store,
              route: this.$route,
          });
      }
  },
});

// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
