<script setup lang="ts">
import Display from './Display/display.vue';
import Answer from './Answer/answer.vue';
</script>

<template>
  <div class="counter-result" aria-label="结果显示区域">
    <Display></Display>
    <Answer></Answer>
  </div>
</template>

<style lang="postcss" scoped>
.counter-result {
  @apply container z-[3] aspect-[8/3] rounded-2xl border-t-4 border-l-4 bg-white p-[3%]
  lg:aspect-[14/3];
}
</style>
