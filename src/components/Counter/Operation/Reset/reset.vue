<script setup lang="ts">
import { ref } from 'vue';
import { useCounterMachine } from '../../../../utils/useCounterMachine';

let ariaPressed = ref(false);

function handleReset() {
  ariaPressed.value = true;
  useCounterMachine.send({ type: 'RESET' });
}

function handlekeydown(e: any) {
  if (e.code === 'Enter') {
    handleReset();
  }
}

function handleBlur() {
  ariaPressed.value = false;
}
</script>

<template>
  <div
    class="operation-reset-btn"
    id="RST"
    @click="handleReset"
    role="button"
    aria-label="重置"
    tabindex="0"
    :aria-pressed="`${ariaPressed}`"
    @keydown="(e) => handlekeydown(e)"
    @blur="handleBlur"
  >
    RST
  </div>
</template>

<style scoped></style>
