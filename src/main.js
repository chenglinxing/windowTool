import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/reset.css";
import "./assets/alicon/iconfont.css";
import "./assets/alicon/iconfont.js";
import "@icon-park/vue/styles/index.css";

import codemirror from "vue-codemirror";
import "codemirror/lib/codemirror.css";
// 折叠
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/comment-fold";

import "codemirror/mode/javascript/javascript"; // 引入 JavaScript 语言模式
import "codemirror/addon/hint/show-hint"; // 引入代码提示插件
import "codemirror/addon/hint/show-hint.css"; // 引入代码提示插件样式
import "codemirror/addon/tern/tern.css"; // 引入 Tern 代码提示样式
import "codemirror/addon/tern/tern"; // 引入 Tern 代码提示插件

import dayjs from "dayjs";
Vue.prototype.$dayjs = dayjs;

Vue.use(codemirror);

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
