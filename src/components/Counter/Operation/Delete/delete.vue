<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCounterMachine } from '../../../../utils/useCounterMachine';

let isPressed = ref(false);
let ariaPressed = computed(() => {
  return isPressed.value ? true : false;
});

function handleDelete() {
  isPressed.value = true;
  useCounterMachine.send({ type: 'DEL' });
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
    class="operation-delete-btn"
    id="DEL"
    @click="handleDelete"
    role="button"
    aria-label="删除"
    :aria-pressed="`${ariaPressed}`"
    tabindex="0"
    @blur="handleBlur"
    @keypress="handlePress"
  >
    DEL
  </div>
</template>

<style scoped></style>
