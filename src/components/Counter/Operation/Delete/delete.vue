<script setup lang="ts">
import { ref } from 'vue';
import { useCounterMachine } from '../../../../utils/useCounterMachine';

let ariaPressed = ref(false);

function handleDelete() {
  ariaPressed.value = true;
  useCounterMachine.send({ type: 'DEL' });
}

function handlekeydown(e: any) {
  if (e.code === 'Enter') {
    handleDelete();
  }
}

function handleBlur(e: any) {
  ariaPressed.value = false;
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
    @keydown="(e) => handlekeydown(e)"
    tabindex="0"
    @blur="handleBlur"
  >
    DEL
  </div>
</template>

<style scoped></style>
