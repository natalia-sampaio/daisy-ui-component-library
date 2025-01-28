<script setup lang="ts">
import { inject } from 'vue'

const id = inject('accordionId', '')

if (!id) {
  throw new Error('DaisyAccordionPanel must be used inside a DaisyAccordion')
}

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="collapse collapse-arrow join-item border-base-300 border">
    <input type="radio" :name="id" checked />
    <div class="collapse-title text-xl font-medium">{{ title }}</div>
    <div class="collapse-content">
      <slot></slot>
    </div>
  </div>
</template>
