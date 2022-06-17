<script setup lang="ts"></script>

<template>
  <div class="counter-result-display">
    <div>+/= 竖式</div>
    <div>Ans = 5</div>
  </div>
</template>

<style lang="postcss" scoped>
.counter-result-display {
  @apply container flex h-[40%] items-center justify-between;
}

.counter-result-display div:first-child {
  @apply inline-block rounded-md bg-[#EAECF3] p-1 text-xs text-gray-400 hover:bg-gray-300;
}

.counter-result-display div:last-child {
  @apply inline-block text-gray-400;
}
</style>
