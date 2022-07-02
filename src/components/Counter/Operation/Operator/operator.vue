<script setup>
import { useCounterMachine } from '../../../../utils/useCounterMachine';

const props = defineProps({
  operator: String,
});

function handleOper(operator) {
  useCounterMachine.send({ type: 'OPER', value: operator });
}
</script>

<template>
  <div class="operation-operator-btn" @click="() => handleOper(props.operator)">
    {{ props.operator }}
  </div>
</template>

<style scoped></style>
