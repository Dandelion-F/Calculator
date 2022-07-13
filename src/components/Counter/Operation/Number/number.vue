<script setup>
import { ref, computed } from 'vue';
import { useCounterMachine } from '../../../../utils/useCounterMachine';
import { numberMap } from '../operation.ts';

let isPressed = ref(false);
let ariaPressed = computed(() => {
  return isPressed.value ? true : false;
});

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
  isPressed.value = true;
}

function handleBlur() {
  isPressed.value = false;
}

function handlePress() {
  isPressed.value = true;
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
    @blur="handleBlur"
    @keypress="handlePress"
  >
    {{ props.number }}
  </div>
</template>

<style scoped></style>
