<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAccordion from './DaisyAccordion.vue'
import DaisyAccordionPanel from '../DaisyAccordionPanel/DaisyAccordionPanel.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <DaisyAccordion>
        <DaisyAccordionPanel title="Panel 1">
          <p>Panel 1 content</p>
        </DaisyAccordionPanel>
        <DaisyAccordionPanel title="Panel 2">
          <p>Panel 2 content</p>
        </DaisyAccordionPanel>
        <DaisyAccordionPanel title="Panel 3">
          <p>Panel 3 content</p>
        </DaisyAccordionPanel>
      </DaisyAccordion>
    </Variant>

    <Variant title="Variant Title">
      <DaisyAccordion>
        <DaisyAccordionPanel title="Panel 1">
          <p>Panel 1 content</p>
        </DaisyAccordionPanel>
        <DaisyAccordionPanel title="Panel 2">
          <p>Panel 2 content</p>
        </DaisyAccordionPanel>
        <DaisyAccordionPanel title="Panel 3">
          <p>Panel 3 content</p>
        </DaisyAccordionPanel>
      </DaisyAccordion>
    </Variant>

    <template #controls></template>
  </Story>
</template>
