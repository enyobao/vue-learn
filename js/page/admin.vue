<template>
    <div ref="adminCon" class="admin-con clear">
        <div class="left content">
            <h2>统计网站</h2>
            <h5>10倍性能提升，多场景规格族，最优性价比</h5>
            <h5>10倍性能提升，多场景规格族，最优性价比</h5>
            <h5>10倍性能提升，多场景规格族，最优性价比</h5>
        </div>
        <card class="right">
            <div class="register" v-show="!isLogin">
                <h3>用户注册 <span class="icon-login" @click="toggleLogin();">登录</span></h3>
                <input type="text" placeholder="昵称" ref="text"></input>
                <input type="text" placeholder="输入手机号">
                <input type="text" placeholder="密码">
                <input type="text" placeholder="验证码">
                <div class="btnPanel">
                    <input type="button" class="btn btn-default" value="注册"/>
                </div>
            </div>
            <div class="login" v-show="isLogin">
                <h3>用户登录 <span class="icon-login" @click="toggleLogin();">注册</span></h3>
                <input type="text" placeholder="昵称/手机号">
                <input type="text" placeholder="密码">
                <div class="btnPanel">
                    <input type="button" class="btn btn-default" value="登录"/>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';
    import Card from './../components/Card.vue';

    export default {
        data(){
            return {
                isLogin: true
            }
        },
        components: {
            Card
        },
        mounted() {
            this.showMask(true);
            this.$nextTick(function () {
                const elCard = this.$refs.adminCon;
                elCard.style.marginLeft = -elCard.offsetWidth/2 + 'px';
            });
        },
        destroyed() {
            this.showMask(false);
        },
        methods: {
            ...mapMutations([
                'MASK_SHOW'
            ]),
            showMask(changeState) {
                this.$store.commit('MASK_SHOW', changeState);
            },
            toggleLogin(){
                this.isLogin = !this.isLogin;
            }
        }
    }

</script>

<style scoped>
    .register, .login {
        margin: 0 auto;
        width: 300px;
    }

    h2, h3, h5 {
        color: #fff;
        margin-bottom: 20px;
    }

    input[type="text"] {
        margin-left: 40px;
        width: 228px;
        height: 36px;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #eee;
        border-radius: 2px;
        /*box-shadow: inset 0 1px 2px rgba(27, 31, 35, 0.075);*/
    }
    input {
        outline: none;
    }

    input[type="text"]:focus {
        background: #fff;
        border-radius: 5px;
        border-color: #53cac3;
    }

    .admin-con {
        position: absolute;
        left: 50%;
        top: 100px;
        z-index: 10;
        min-width: 720px;
    }
    .content {
        position: static;
        width: 300px;
        padding: 60px 20px 20px;
        margin-right: 20px;
    }
    .card {
        box-shadow: none;
    }
    .card h3 {
        position: relative;
        color: #333;
    }
    .icon-login {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 12px;
        line-height: 28px;
        color: #53cac3;
        cursor: pointer;
    }
</style>