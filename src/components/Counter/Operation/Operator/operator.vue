<script setup lang="ts">
const props = defineProps({
  operator: String,
});
</script>

<template>
  <div class="operation-operator-btn">{{ props.operator }}</div>
</template>

<style scoped></style>
