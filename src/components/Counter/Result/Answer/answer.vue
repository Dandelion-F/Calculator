<script setup lang="ts"></script>

<template>
  <div class="counter-result-answer">
    <span>111111</span>
  </div>
</template>

<style lang="postcss" scoped>
.counter-result-answer {
  @apply container flex h-[60%] items-end justify-end;
}

.counter-result-answer span {
  @apply text-3xl font-bold 
  sm:text-5xl;
}
</style>
