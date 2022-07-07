<script setup>
import { useCounterMachine } from '../../../../utils/useCounterMachine';
import { operatorMap } from '../operation.ts';

const props = defineProps({
  operator: String,
});

function handleOper(operator) {
  useCounterMachine.send({ type: 'OPER', value: operator });
}

function judgeDisabledBtn(operator) {
  let disabledBtn = true;

  for (let oper in operatorMap.keys()) {
    if (operator === oper) disabledBtn = false;
  }

  return disabledBtn;
}
</script>

<template>
  <div
    class="operation-operator-btn"
    @click="() => handleOper(props.operator)"
    role="button"
    :aria-label="`${operatorMap.get(props.operator)}`"
    :aria-disabled="`${judgeDisabledBtn(props.operator)}`"
  >
    {{ props.operator }}
  </div>
</template>

<style scoped></style>
