<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAccordion from './DaisyAccordion.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <DaisyAccordion>
        <DaisyAccordionPanel name="Panel 1"></DaisyAccordionPanel>
        <DaisyAccordionPanel name="Panel 2"></DaisyAccordionPanel>
        <DaisyAccordionPanel name="Panel 3"></DaisyAccordionPanel>
      </DaisyAccordion>
    </Variant>

    <template #controls></template>
  </Story>
</template>
