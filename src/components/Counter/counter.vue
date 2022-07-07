<script setup lang="ts">
import Result from './Result/result.vue';
import Operation from './Operation/operation.vue';
</script>

<template>
  <div class="counter" aria-label="计算器">
    <Result></Result>
    <Operation></Operation>
  </div>
</template>

<style lang="postcss" scoped>
.counter {
  @apply container relative z-[2] mt-[50px] mb-5 h-[fit-content] w-full bg-[#EAECF3]/50 p-[3%] shadow-2xl backdrop-blur-md 
  sm:mt-16 sm:w-[60%] sm:rounded-xl;
}
</style>
