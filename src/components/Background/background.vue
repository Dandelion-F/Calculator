<script setup lang="ts">
</script>

<template>
    <div class="g-bg">
        <div class="g-polygon-1"></div>
        <div class="g-polygon-2"></div>
        <div class="g-polygon-3"></div>
    </div>
</template>

<style lang="postcss" scoped>
.g-bg {
    position: fixed;
    @apply inset-0;
}

.g-bg>div {
    position: absolute;
    opacity: 0.5;
}

.g-bg::before {
    content: '';
    position: absolute;
    @apply inset-0;
    -webkit-backdrop-filter: blur(150px);
    backdrop-filter: blur(150px);
    z-index: 1;
}

.g-polygon-1 {
    bottom: 100px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 714px;
    height: 390px;
    background: linear-gradient(#ffee55, #fdee99);
    -webkit-clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
    clip-path: polygon(0 10%, 30% 0, 100% 40%, 70% 100%, 20% 90%);
}

.g-polygon-2 {
    bottom: 0px;
    left: 30%;
    transform: translate(-50%, 0);
    width: 1000px;
    height: 450px;
    background: linear-gradient(-36deg, #e950d1, #f980d9);
    -webkit-clip-path: polygon(10% 0, 100% 70%, 100% 100%, 20% 90%);
    clip-path: polygon(10% 0, 100% 70%, 100% 100%, 20% 90%);
}

.g-polygon-3 {
    bottom: 0px;
    left: 70%;
    transform: translate(-50%, 0);
    width: 1000px;
    height: 450px;
    background: #5750e9;
    -webkit-clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
    clip-path: polygon(80% 0, 100% 70%, 100% 100%, 20% 90%);
}
</style>
