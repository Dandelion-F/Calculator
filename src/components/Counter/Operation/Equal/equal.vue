<script setup>
import { useCounterMachine } from '../../../../utils/useCounterMachine';

function handleEqual() {
  useCounterMachine.send({ type: 'EQUAL', value: '=' });
}
</script>

<template>
  <div class="operation-equal-btn" @click="handleEqual">=</div>
</template>

<style scoped></style>
