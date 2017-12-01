<template>
    <div class="card">
        <h3>我是一个小卡片</h3>
        <slot name="main"></slot>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .card {
        background: #fff;
        min-width: 30%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ececec;
        border-radius: 5px;
        box-shadow: 0 0 20px #ececec;
    }
</style>