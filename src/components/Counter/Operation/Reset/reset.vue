<script setup lang="ts">
import { useCounterMachine } from '../../../../utils/useCounterMachine';

function handleReset() {
  useCounterMachine.send({ type: 'RESET' });
}
</script>

<template>
  <div class="operation-reset-btn" @click="handleReset">RST</div>
</template>

<style scoped></style>
