<template>
    <div class="menu">
        <div class="title">
            <span class="icon-logo"></span>
            <h3>管理系统</h3>
        </div>
        <div class="profile">
            <div class="head-img">
                <img src="img/common/avatar.jpg" alt="">
            </div>
            <div class="profile-con">
                <h4>欢迎光临，</h4>
                <h4 class="ellipsis">Enyo BaoEnyoEnyoEnyoEnyoEnyo</h4>
            </div>
        </div>
        <div class="sidebar-menu">
            <div class="side-section">
                <ul class="nav">
                    <li v-for="menu in menus" v-on:click="toggeleMenu(menu)" v-bind:class="menu.class">
                        <a href="javascript:;">
                            <p class="nav-title">{{menu.text}}</p>
                        </a>
                        <ul :class="menu.hasChild" class="second-menu">
                            <li v-for="childMenu in menu.childMenus">
                                <router-link :to="childMenu.href">
                                    <p>{{childMenu.text}}</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                menus: [
                    {
                        icon: "fa-home",
                        text: "服务管理",
                        class: '',
                        hasChild: 'hasChild',
                        childMenus: [
                            {
                                href: 'user',
                                text: '服务管理111'
                            },
                            {
                                href: 'admin',
                                text: '服务管理222'
                            }
                        ]
                    },
                    {
                        icon: 'fa-cubes',
                        text: "服务列表",
                        class: '',
                        hasChild: 'hasChild',
                        childMenus: [
                            {
                                href: '/user',
                                text: '用户中心'
                            },
                            {
                                href: '/log',
                                text: '日志页面'
                            }
                            ,
                            {
                                href: '/statistics',
                                text: '统计页面'
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
            toggeleMenu(menu) {
                if ( menu.href ) {
                    this.$router.push(menu.href);
                    this.menus.forEach(item => {
                        item.class = '';
                    })
                    menu.class = 'active';
                    return ;
                }

                switch ( menu.class ){
                    case 'active':
                        menu.class = '';
                        break;
                    case '':
                        menu.class = 'active';
                        break;
                    default:
                        break;
                }
            }
        }
    }
</script>

<style>
    @import "./../../css/components/sideBar.css";
</style>