<script setup>
import useCounterStore from '../../../../store/counter';

const props = defineProps({
  number: String,
});

const counter = useCounterStore();
const addNumber = (number) => {
  counter.addNum(number);
};
</script>

<template>
  <div class="operation-number-btn" @click="() => addNumber(props.number)">
    {{ props.number }}
  </div>
</template>

<style scoped></style>
