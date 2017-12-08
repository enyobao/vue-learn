<template>
    <div class="my-app">
        <div v-show="!isShow" class="container">
            <div class="side">
                <SideBar />
            </div>
            <Main>
                <transition slot="mainContent" name="router-fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </Main>
        </div>
        <!--<div class="mask"></div>-->
        <div class="mask" v-show="isShow">
            <router-view name="fullScreen"></router-view>
        </div>
    </div>
</template>
<script>
    import '../css/main.css';
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    import store from './vuex/store/';
    import routes from './router';

    import SideBar from './components/SideBar';
    import Main from './page/main';
    import Admin from './page/admin.vue';

    //注册路由插件
    Vue.use(VueRouter);
    const router = new VueRouter({routes});

    export default {
        name: 'App',
        el: '#application',
        components: {
            SideBar,
            Main,
            Admin
        },
        router,
        store,
        data(){
            isShow: false
        },
        computed: {
            isShow(){
                return this.$store.state.maskShow;
            }
        }
    }
</script>
<style>
    .my-app {
        position: relative;
        width: 100%;
        height: 100%;
    }
    .container {
        width: 100%;
        height: 100%;
    }
    .side {
        position: relative;
        width: 18%;
        height: 100%;
    }
    .content {
        position: absolute;
        left: 18%;
        right: 0;
        top: 0;
        height: 100%;
    }
    .router-fade-enter-active, .router-fade-leave-active {
        transition: opacity .3s;
    }
    .router-fade-enter, .router-fade-leave-active {
        opacity: 0;
    }
    .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: #1d2124;
    }
</style>