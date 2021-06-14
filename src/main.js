import Vue from 'vue'
import App from "./App";
import RouterConfig from "./RouterConfig";
import vuetify from "./VuetifyConfig";
import store from "./service/VuexConfig.js";
import VueSocialSharing from "vue-social-sharing";

Vue.config.productionTip = false

let routerConfig = new RouterConfig();
let router = routerConfig.configRouter(Vue);



Vue.use(VueSocialSharing);

new Vue({
    store,
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
