<script setup>
import useCounterStore from '../../../../store/counter';
const counter = useCounterStore();
const getResult = () => {
  counter.getResult();
};
</script>

<template>
  <div class="operation-equal-btn" @click="getResult">=</div>
</template>

<style scoped></style>
