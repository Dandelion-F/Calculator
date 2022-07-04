<script setup lang="ts">
import Result from './Result/result.vue';
import Operation from './Operation/operation.vue';
</script>

<template>
  <div class="counter">
    <Result></Result>
    <Operation></Operation>
  </div>
</template>

<style lang="postcss" scoped>
.counter {
  @apply container relative z-[2] h-[fit-content] w-full bg-[#EAECF3]/50 p-[3%] shadow-2xl backdrop-blur-md mt-[50px]
  sm:mt-16 sm:w-[60%] sm:rounded-xl mb-5;
}
</style>
