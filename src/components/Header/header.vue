<script setup lang="ts">
import { ref } from 'vue';

let lightClass = ref('header-in-mode');
let darkClass = ref('header-not-in-mode');

function toggleMode(mode: string) {
  if (mode === 'light') {
    lightClass.value = 'header-in-mode';
    darkClass.value = 'header-not-in-mode';
    document.documentElement.classList.remove('dark');
  } else {
    darkClass.value = 'header-in-mode';
    lightClass.value = 'header-not-in-mode';
    document.documentElement.classList.add('dark');
  }
}
</script>

<template>
  <div class="header">
    <div class="header-light-dark-mode">
      <div :class="lightClass" @click="() => toggleMode('light')">light</div>
      <div :class="darkClass" @click="() => toggleMode('dark')">dark</div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.header {
  @apply fixed top-0 left-0 z-10 flex h-[50px] w-full flex-row-reverse items-center border-4 border-x-0 border-t-0 border-blue-200 bg-blue-100 backdrop-blur-md dark:border-gray-600 dark:bg-gray-500;
}

.header-light-dark-mode {
  @apply aspect-[4/1] h-[30px] rounded-lg border-[2px] border-black bg-gray-100 text-sm cursor-pointer mr-1
  sm:mr-[20%];
}

.header-in-mode {
  @apply inline-block h-full w-[50%] rounded-lg bg-gray-300 text-center font-bold leading-[30px];
}

.header-not-in-mode {
  @apply inline-block h-full w-[50%] rounded-lg text-center leading-[30px];
}
</style>
