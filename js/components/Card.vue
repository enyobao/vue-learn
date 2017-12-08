<template>
    <div class="card">
        <slot>
            <h3>我是一个小卡片</h3>
            <slot name="main"></slot>
        </slot>
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
        padding: 20px;
        margin-bottom: 20px;
        border: 1px solid #ececec;
        border-radius: 5px;
        box-shadow: 0 0 20px #ececec;
    }
</style>