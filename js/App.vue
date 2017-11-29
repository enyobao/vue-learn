<template>
    <div class="my-app">
        <div class="side">
            <SideBar />
        </div>
        <div class="content">
            <Main />
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import '../css/main.css';
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    import routes from './router';

    import SideBar from './components/SideBar';
    import Main from './page/main';

    //注册路由插件
    Vue.use(VueRouter);
    const router = new VueRouter({routes});

    export default {
        name: 'App',
        el: '#application',
        components: {
            SideBar,
            Main
        },
        router: router
    }
</script>
<style>
    .my-app {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .side {
        position: relative;
        width: 210px;
        height: 100%;
    }
    .content {
        position: absolute;
        left: 210px;
        right: 0;
        top: 0;
        height: 100%;
    }
</style>