<script setup lang="ts">
import { ref } from 'vue';

let lightClass = ref('top-in-mode');
let darkClass = ref('top-not-in-mode');
let ariaLightPressed = ref(true);
let ariaDarkPressed = ref(false);

function toggleMode(mode: string) {
  if (mode === 'light') {
    lightClass.value = 'top-in-mode';
    darkClass.value = 'top-not-in-mode';
    document.documentElement.classList.remove('dark');
    ariaLightPressed.value = true;
    ariaDarkPressed.value = false;
  } else {
    darkClass.value = 'top-in-mode';
    lightClass.value = 'top-not-in-mode';
    document.documentElement.classList.add('dark');
    ariaDarkPressed.value = true;
    ariaLightPressed.value = false;
  }
}

function handlekeydown(e: any, mode: string) {
  if (e.code === 'Enter') {
    toggleMode(mode);
  }
}
</script>

<template>
  <header class="top">
    <div class="top-light-dark-mode" aria-label="网页顶部导航">
      <div
        :class="lightClass"
        @click="() => toggleMode('light')"
        aria-label="日间模式"
        :aria-pressed="`${ariaLightPressed}`"
        role="button"
        tabindex="0"
        @keydown="(e) => handlekeydown(e, 'light')"
        accesskey="l"
        autofocus
      >
        light
      </div>
      <div
        :class="darkClass"
        @click="() => toggleMode('dark')"
        aria-label="夜间模式"
        :aria-pressed="`${ariaDarkPressed}`"
        role="button"
        tabindex="0"
        @keydown="(e) => handlekeydown(e, 'dark')"
        accesskey="n"
      >
        dark
      </div>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.top {
  @apply fixed top-0 left-0 z-10 flex h-[50px] w-full items-center justify-end border-4 border-x-0 border-t-0 border-blue-200 bg-blue-100 backdrop-blur-md dark:border-gray-600 dark:bg-gray-500;
}

.top-light-dark-mode {
  @apply mr-1 aspect-[4/1] h-[30px] cursor-pointer rounded-lg border-[2px] border-black bg-gray-100 text-sm
  sm:mr-[20%];
}

.top-in-mode {
  @apply inline-block h-full w-[50%] rounded-lg bg-gray-300 text-center font-bold leading-[30px];
}

.top-not-in-mode {
  @apply inline-block h-full w-[50%] rounded-lg text-center leading-[30px];
}
</style>
