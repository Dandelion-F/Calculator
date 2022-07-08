<script setup>
import { ref } from 'vue';
import { useCounterMachine } from '../../../../utils/useCounterMachine';
import { operatorMap, simpleBinaryOperList } from '../operation.ts';

let ariaPressed = ref(false);

const props = defineProps({
  operator: String,
});

function handleOper(operator) {
  if (!judgeDisabledBtn(operator)) {
    ariaPressed.value = true;
    useCounterMachine.send({ type: 'OPER', value: operator });
  }
}

function judgeDisabledBtn(operator) {
  let disabledBtn = true;

  for (let oper of simpleBinaryOperList) {
    if (operator === oper) {
      disabledBtn = false;
      break;
    }
  }

  return disabledBtn;
}

function handlekeydown(e, operator) {
  if (e.code === 'Enter') {
    handleOper(operator);
  }
}

function handleBlur() {
  if (!judgeDisabledBtn(operator)) {
    ariaPressed.value = false;
  }
}
</script>

<template>
  <div
    class="operation-operator-btn"
    :id="`${props.operator}`"
    @click="() => handleOper(props.operator)"
    role="button"
    tabindex="0"
    :aria-pressed="`${ariaPressed}`"
    :aria-label="`${operatorMap.get(props.operator)}`"
    :aria-disabled="`${judgeDisabledBtn(props.operator)}`"
    @keydown="(e) => handlekeydown(e, props.operator)"
    @blur="() => handleBlur(props.operator)"
  >
    {{ props.operator }}
  </div>
</template>

<style scoped></style>
