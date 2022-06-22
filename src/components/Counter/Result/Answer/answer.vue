<script setup>
import useCounterStore from '../../../../store/counter';
const counter = useCounterStore();
</script>

<template>
  <div class="counter-result-answer">
    <span>{{ counter.inputStr ? counter.inputStr : '0' }}</span>
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
