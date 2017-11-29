import Vue from 'vue';
// import VueRouter from 'vue-router';
// import {routes} from './router';
import App from './App';
// import SideBar from './components/SideBar';
// import store from 'js/vuex/store';

//注册路由插件
// Vue.use(VueRouter);
// const router = new VueRouter({routes});

new Vue(App);
// new Vue({el: '#application', template: '<SideBar />', components: {SideBar}});

Vue.config.devtools = true;