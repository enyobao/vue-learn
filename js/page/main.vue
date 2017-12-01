<template>
    <div class="content">
        <Header />
        <div class="main">
            <slot name="mainContent"></slot>
        </div>
    </div>
</template>

<script>
    import Header from './../components/Header';
    export default {
        name: 'main',
        components: {
            Header
        }
    }
</script>

<style>
    .main {
        width: 100%;
        padding: 20px;
    }
</style>