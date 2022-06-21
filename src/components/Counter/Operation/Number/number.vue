<script setup lang="ts">
const props = defineProps({
  number: String,
});
</script>

<template>
  <div class="operation-number-btn">{{ props.number }}</div>
</template>

<style scoped></style>
