<script setup lang="ts">
import { useCounterMachine } from '../../../../utils/useCounterMachine';

function handleDelete() {
  useCounterMachine.send({ type: 'DEL' });
}
</script>

<template>
  <div class="operation-delete-btn" @click="handleDelete" role="button" aria-label="删除">DEL</div>
</template>

<style scoped></style>
