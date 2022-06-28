<script setup lang="ts">
import useCounterMachine from '../../../../utils/useCounterMachine.js';

function handleReset() {
  useCounterMachine
    .onTransition((state) => {
      console.log(state.context.result);
    })
    .start()
    .send('RESET');
}
</script>

<template>
  <div class="operation-reset-btn" @click="handleReset">RST</div>
</template>

<style scoped></style>
