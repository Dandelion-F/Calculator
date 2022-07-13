<script setup lang="ts">
import { ref, computed } from 'vue';

let radClass = ref('operation-mode-btn');
let degClass = ref('operation-mode-no-btn');

let isRadPressed = ref(true);
let ariaRadPressed = computed(() => {
  return isRadPressed.value ? true : false;
});

let isDegPressed = ref(false);
let ariaDegPressed = computed(() => {
  return isDegPressed.value ? true : false;
});

function changeMode(mode: string) {
  if (mode === 'rad') {
    radClass.value = 'operation-mode-btn';
    degClass.value = 'operation-mode-no-btn';
    isRadPressed.value = true;
    isDegPressed.value = false;
  } else {
    degClass.value = 'operation-mode-btn';
    radClass.value = 'operation-mode-no-btn';
    isRadPressed.value = false;
    isDegPressed.value = true;
  }
}

function handleBlur(mode: string) {
  if (mode === 'rad') {
    isRadPressed.value = false;
  } else {
    isDegPressed.value = false;
  }
}

function handleKeydown(e: any, mode: string) {
  if (e.code === 'Enter') {
    changeMode(mode);
  }
}
</script>

<template>
  <div class="operation-mode-box">
    <div
      :class="radClass"
      id="Rad"
      @click="() => changeMode('rad')"
      role="button"
      tabindex="0"
      aria-label="弧度模式"
      aria-disabled="true"
      @keydown="(e) => handleKeydown(e, 'rad')"
      :aria-pressed="`${ariaRadPressed}`"
      @blur="() => handleBlur('rad')"
    >
      Rad
    </div>
    <div
      :class="degClass"
      id="Deg"
      @click="() => changeMode('deg')"
      role="button"
      tabindex="0"
      aria-label="角度模式"
      aria-disabled="true"
      @keydown="(e) => handleKeydown(e, 'deg')"
      :aria-pressed="`${ariaDegPressed}`"
      @blur="() => handleBlur('deg')"
    >
      Deg
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.operation-mode-box {
  @apply flex h-full w-full justify-between rounded-xl bg-gray-200 shadow-inner;
}

.operation-mode-no-btn {
  @apply flex aspect-[4/3] h-full cursor-pointer items-center justify-center text-xl font-bold text-gray-400
  lg:text-2xl;
}
</style>
