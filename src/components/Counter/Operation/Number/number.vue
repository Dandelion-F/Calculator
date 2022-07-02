<script setup>
import { useCounterMachine } from '../../../../utils/useCounterMachine';

const props = defineProps({
  number: String,
});

function handleInt(number) {
  let type;
  if (number === '0') {
    type = 'ZERO';
  } else if (number === '.') {
    type = 'POINT';
  } else {
    type = 'INT';
  }
  useCounterMachine.send({ type, value: number });
}
</script>

<template>
  <div class="operation-number-btn" @click="() => handleInt(props.number)">
    {{ props.number }}
  </div>
</template>

<style scoped></style>
