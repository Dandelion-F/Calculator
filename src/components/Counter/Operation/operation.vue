<script setup>
import Delete from './Delete/delete.vue';
import Equal from './Equal/equal.vue';
import Mode from './Mode/mode.vue';
import Number from './Number/number.vue';
import Operator from './Operator/operator.vue';
import { operatorMap, numberMap } from './operation.js';
</script>

<template>
  <div class="counter-operation">
    <!-- Rad/Deg -->
    <div class="counter-mode"><Mode></Mode></div>
    <div class="counter-delete"><Delete></Delete></div>
    <div class="counter-number">
      <Number></Number>
      <Number></Number>
      <Number></Number>
      <Number></Number>
      <Number></Number>
      <Number></Number>
      <Number></Number>
      <Number></Number>
      <Number></Number>
      <Number></Number>
      <Number></Number>
      <Equal></Equal>
    </div>
    <!-- +-×÷ -->
    <div class="counter-simpleBinaryOper">
      <Operator></Operator>
      <Operator></Operator>
      <Operator></Operator>
      <Operator></Operator>
    </div>
    <!-- () -->
    <div class="counter-bracket">
      <Operator></Operator>
      <Operator></Operator>
    </div>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
    <Operator></Operator>
  </div>
</template>

<style lang="postcss" scoped>
.counter-operation {
  @apply container mt-4 grid grid-flow-row-dense grid-cols-5 grid-rows-[7] gap-x-[5%] gap-y-4
  lg:grid-cols-7 lg:grid-rows-[5];
}

.counter-mode {
  @apply col-start-1 col-end-3 flex aspect-[37/12] items-center justify-between rounded-xl bg-gray-200 shadow-inner;
}

.counter-delete {
  @apply col-start-5 col-end-6
  lg:col-start-7 lg:col-end-8;
}

.counter-number {
  @apply col-start-2 col-end-5 row-start-4 row-end-[8] grid grid-cols-3 grid-rows-4 gap-y-4 gap-x-[8.62%]
  lg:col-start-4 lg:col-end-7 lg:row-start-2 lg:row-end-6 lg:gap-x-[12.5%];
}

.counter-simpleBinaryOper {
  @apply col-start-5 col-end-6 row-start-4 row-end-[8] grid gap-y-4
  lg:col-start-7 lg:col-end-8 lg:row-start-2 lg:row-end-6;
}

.counter-bracket {
  @apply col-start-2 col-end-4 row-start-3 row-end-4 grid grid-cols-2 gap-x-[13.5%]
  lg:col-start-5 lg:col-end-7 lg:row-start-1 lg:row-end-2 lg:gap-x-[20%];
}
</style>
