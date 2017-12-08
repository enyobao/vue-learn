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
                    <li v-for="menu in menus">
                        <a href="javascript:;" v-show="menu.childMenus">
                            <p class="nav-title">{{menu.text}}</p>
                        </a>
                        <router-link v-show="!menu.childMenus" :to="{path: menu.href}">
                            <p class="nav-title" v-on:click="getLoaderLink(menu);">{{menu.text}}</p>
                            <span class="icon-sharp"></span>
                        </router-link>
                        <ul v-show="menu.childMenus" class="second-menu">
                            <li v-for="childMenu in menu.childMenus" v-on:click="getLoaderLink(childMenu);">
                                <router-link :to="childMenu.href">
                                    <p>{{childMenu.text}}</p>
                                    <span class="icon-sharp"></span>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script src="./../script/sideBar.js"></script>

<style>
    @import "./../../css/components/sideBar.css";
</style>