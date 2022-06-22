<script setup>
import useCounterStore from '../../../../store/counter';

const props = defineProps({
  operator: String,
});

const counter = useCounterStore();
const addOperator = (oper) => {
  if (oper === '×') {
    oper = '*';
  }
  if (oper === '÷') {
    oper = '/';
  }
  counter.addOper(oper);
};
</script>

<template>
  <div
    class="operation-operator-btn"
    @click="() => addOperator(props.operator)"
  >
    {{ props.operator }}
  </div>
</template>

<style scoped></style>
