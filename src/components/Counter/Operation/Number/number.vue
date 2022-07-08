<script setup>
import { ref } from 'vue';
import { useCounterMachine } from '../../../../utils/useCounterMachine';
import { numberMap } from '../operation.ts';

let ariaPressed = ref(false);

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
  ariaPressed.value = true;
}

function handlekeydown(e, number) {
  if (e.code === 'Enter') {
    handleInt(number);
  }
}

function handleBlur() {
  ariaPressed.value = false;
}
</script>

<template>
  <div
    class="operation-number-btn"
    :id="`${props.number}`"
    @click="() => handleInt(props.number)"
    role="button"
    tabindex="0"
    :aria-pressed="`${ariaPressed}`"
    :aria-label="`${numberMap.get(props.number)}`"
    @keydown="(e) => handlekeydown(e, props.number)"
    @blur="handleBlur"
  >
    {{ props.number }}
  </div>
</template>

<style scoped></style>
