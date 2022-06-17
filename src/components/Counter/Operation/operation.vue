<script setup lang="ts">
import Delete from './Delete/delete.vue';
import Equal from './Equal/equal.vue';
import Mode from './Mode/mode.vue';
import Number from './Number/number.vue';
import Operator from './Operator/operator.vue'
// import map from './operator.js'
</script>

<template>
  <div class="counter-operation">
    <Mode></Mode>
    <Operator></Operator>
    <Operator></Operator>
    <Delete></Delete>
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
    <Number></Number>
    <Number></Number>
    <Number></Number>
    <Operator></Operator>
    <Operator></Operator>
    <Number></Number>
    <Number></Number>
    <Number></Number>
    <Operator></Operator>
    <Operator></Operator>
    <Number></Number>
    <Number></Number>
    <Number></Number>
    <Operator></Operator>
    <Operator></Operator>
    <Number></Number>
    <Number></Number>
    <Equal></Equal>
    <Operator></Operator>
  </div>
</template>

<style lang="postcss" scoped>
.counter-operation {
  @apply container z-[3] mt-4 flex gap-x-[5%] gap-y-4 flex-wrap;
}
</style>
