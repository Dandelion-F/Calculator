<script setup>
import { ref, computed } from 'vue';
import { useCounterMachine } from '../../../../utils/useCounterMachine';
import { operatorMap, simpleBinaryOperList } from '../operation.ts';

let isPressed = ref(false);
let ariaPressed = computed(() => {
  return isPressed.value ? true : false;
});

const props = defineProps({
  operator: String,
});

function handleOper(operator) {
  if (!judgeDisabledBtn(operator)) {
    isPressed.value = true;
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

function handleBlur(operator) {
  if (!judgeDisabledBtn(operator)) {
    isPressed.value = false;
  }
}

function handlePress() {
  isPressed.value = true;
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
    @blur="() => handleBlur(props.operator)"
    @keypress="handlePress"
  >
    {{ props.operator }}
  </div>
</template>

<style scoped></style>
