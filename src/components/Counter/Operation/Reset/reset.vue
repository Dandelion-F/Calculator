<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCounterMachine } from '../../../../utils/useCounterMachine';

let isPressed = ref(false);
let ariaPressed = computed(() => {
  return isPressed.value ? true : false;
});

function handleReset() {
  isPressed.value = true;
  useCounterMachine.send({ type: 'RESET' });
}

function handleBlur() {
  isPressed.value = false;
}

function handlePress() {
  isPressed.value = true;
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
    @blur="handleBlur"
    @keypress="handlePress"
  >
    RST
  </div>
</template>

<style scoped></style>
