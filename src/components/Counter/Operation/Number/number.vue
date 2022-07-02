<script setup>
import { useCounterMachine } from '../../../../utils/useCounterMachine';

const props = defineProps({
  number: String,
});

function handleInt(number) {
  useCounterMachine.send({ type: 'INT', value: '' + number });
}
</script>

<template>
  <div class="operation-number-btn" @click="() => handleInt(props.number)">
    {{ props.number }}
  </div>
</template>

<style scoped></style>
