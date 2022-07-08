<script setup>
import { ref } from 'vue';
import { useCounterMachine } from '../../../../utils/useCounterMachine';

let ariaPressed = ref(false);

function handleEqual() {
  ariaPressed.value = true;
  useCounterMachine.send({ type: 'EQUAL', value: '=' });
}

function handlekeydown(e) {
  if (e.code === 'Enter') {
    handleEqual();
  }
}

function handleBlur() {
  ariaPressed.value = false;
}
</script>

<template>
  <div
    class="operation-equal-btn"
    id="="
    @click="handleEqual"
    role="button"
    aria-label="等于"
    tabindex="0"
    @keydown="(e) => handlekeydown(e)"
    :aria-pressed="`${ariaPressed}`"
    @blur="handleBlur"
  >
    =
  </div>
</template>

<style scoped></style>
