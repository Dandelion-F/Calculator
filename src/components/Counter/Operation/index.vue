<script setup lang="ts">
import Delete from '../Operation/Delete/index.vue'
import Equal from '../Operation/Equal/index.vue'
import Mode from '../Operation/Mode/index.vue'
import Number from '../Operation/Number/index.vue'
import '../../index.css'

</script>

<template>
    <div class="counter-operation">
        <Delete></Delete>
        <Equal></Equal>
        <Mode></Mode>
        <Number></Number>
    </div>
</template>

<style scoped>
</style>