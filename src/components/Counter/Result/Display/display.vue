<script setup>
import { inputStr } from '../../../../utils/useCounterMachine';
</script>

<template>
  <div class="counter-result-display" aria-label="输入的表达式显示">
    <div aria-hidden="true">+/= 竖式</div>
    <div>{{ inputStr }}</div>
  </div>
</template>

<style lang="postcss" scoped>
.counter-result-display {
  @apply container flex h-[40%] items-center justify-between;
}

.counter-result-display div:first-child {
  @apply inline-block rounded-md bg-[#EAECF3] p-1 text-xs text-gray-400 hover:bg-gray-300
  lg:text-base;
}

.counter-result-display div:last-child {
  @apply inline-block text-gray-400
  lg:text-xl;
}
</style>
