<script setup>
import { ref, computed } from 'vue';
import { useCounterMachine } from '../../../../utils/useCounterMachine';

let isPressed = ref(false);
let ariaPressed = computed(() => {
  return isPressed.value ? true : false;
});

function handleEqual() {
  isPressed.value = true;
  useCounterMachine.send({ type: 'EQUAL', value: '=' });
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
    class="operation-equal-btn"
    id="="
    @click="handleEqual"
    role="button"
    aria-label="等于"
    tabindex="0"
    :aria-pressed="`${ariaPressed}`"
    @blur="handleBlur"
    @keypress="handlePress"
  >
    =
  </div>
</template>

<style scoped></style>
