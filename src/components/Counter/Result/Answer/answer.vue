<script setup>
import { result } from '../../../../utils/useCounterMachine';
</script>

<template>
  <div class="counter-result-answer" aria-label="运算结果显示">
    <span>{{ result }}</span>
  </div>
</template>

<style lang="postcss" scoped>
.counter-result-answer {
  @apply container flex h-[60%] items-end justify-end;
}

.counter-result-answer span {
  @apply text-3xl font-bold text-[#283155]
  sm:text-5xl;
}
</style>
