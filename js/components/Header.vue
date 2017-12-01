<template>
    <div class="header">
        <p>{{loaderLink}}</p>
    </div>
</template>

<script>
    export default {
        data(){
            loaderLink: "服务列表"
        },
        computed:{
            loaderLink(){
                return this.$store.state.loaderLink ? this.$store.state.loaderLink: "服务列表";
            }
        }
    }
</script>

<style>
    .header {
        width: 100%;
        padding: 20px;
        background: #ededed;
    }
    .header p {
        font-size: 14px;
        line-height: 14px;
        text-indent: 20px;
        border-left: 2px solid #53cac3;
    }
</style>