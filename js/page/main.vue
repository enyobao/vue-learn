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
        max-width: 1024px;
        margin: 0 auto;
        padding: 20px;
    }
</style>