<script setup lang="ts">
import { ref } from 'vue';

let radClass = ref('operation-mode-btn');
let degClass = ref('operation-mode-no-btn');

function changeMode(mode: string) {
  if (mode === 'rad') {
    radClass.value = 'operation-mode-btn';
    degClass.value = 'operation-mode-no-btn';
  } else {
    degClass.value = 'operation-mode-btn';
    radClass.value = 'operation-mode-no-btn';
  }
}
</script>

<template>
  <div class="operation-mode-box">
    <div :class="radClass" @click="() => changeMode('rad')">Rad</div>
    <div :class="degClass" @click="() => changeMode('deg')">Deg</div>
  </div>
</template>

<style lang="postcss" scoped>
.operation-mode-box {
  @apply flex h-full w-full justify-between rounded-xl bg-gray-200 shadow-inner;
}

.operation-mode-no-btn {
  @apply flex aspect-[4/3] h-full items-center justify-center text-xl font-bold text-gray-400 cursor-pointer
  lg:text-2xl;
}
</style>
