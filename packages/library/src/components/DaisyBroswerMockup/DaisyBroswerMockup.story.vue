<script setup lang="ts">
import { reactive } from 'vue'
import DaisyBroswerMockup from './DaisyBroswerMockup.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <DaisyBroswerMockup url="https://vueschool.io"> Hello! </DaisyBroswerMockup>
    </Variant>

    <template #controls></template>
  </Story>
</template>
