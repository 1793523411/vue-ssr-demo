import { createApp } from "./main";
// 创建vue、router实例
const { app, router, store } = createApp();
// 路由就绪，执⾏挂载
if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}
router.onReady(() => {
    app.$mount("#app");
});