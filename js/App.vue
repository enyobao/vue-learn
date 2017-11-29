<template>
    <div class="my-app">
        <SideBar />
        <router-view>123424</router-view>
    </div>
</template>
<script>
    import '../css/main.css';
    import Vue from 'vue';
//    import VueRouter from 'vue-router';
    import routes from './router';

    import SideBar from './components/SideBar';

    console.log(routes);
    //注册路由插件
//    Vue.use(VueRouter);
//    const router = new VueRouter({routes});

    export default {
        name: 'App',
        el: '#application',
        components: {SideBar}
    }
</script>
<style>
    .my-app {
        width: 100%;
        height: 100%;
    }
</style>