import Vue from 'vue'
import App from './App'
import md5 from "./utils/md5";
import WXrequest from './utils/request'
Vue.prototype.axios = WXrequest
Vue.prototype.md5 = md5;
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
