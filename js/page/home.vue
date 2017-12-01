<template>
    <div class="home">
        <card>
            <log slot="main">balala小魔仙的</log>
        </card>
        <card>
            <log slot="main">balala小魔仙的</log>
        </card>
        <card>
            <log slot="main">balala小魔仙的</log>
        </card>
        <card>
            <log slot="main">balala小魔仙的</log>
        </card>
        <card>
            <log slot="main">balala小魔仙的</log>
        </card>
        <card>
            <log slot="main">balala小魔仙的</log>
        </card>
    </div>
</template>

<script>
    import Card from './../components/Card';
    import Log from './log';

    export default {
        components: {
            Card,
            Log
        }
    }
</script>

<style>
    .home {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap-reverse;
    }
</style>