<script setup lang="ts">
import { inject, ref } from 'vue'

defineProps<{
  title: string
}>()

const id = inject('accordionId', '')
const multipleOpen = inject('multipleOpen', false)
const isOpen = ref(false)

if (!id) {
  throw new Error('DaisyAccordionPanel must be used inside a DaisyAccordion')
}
</script>

<template>
  <div class="collapse collapse-arrow join-item border-base-300 border">
    <input
      :type="multipleOpen ? 'checkbox' : 'radio'"
      :name="id"
      :checked="isOpen"
      @click="isOpen = !isOpen"
    />
    <div class="collapse-title text-xl font-medium">{{ title }}</div>
    <div class="collapse-content">
      <slot></slot>
    </div>
  </div>
</template>
