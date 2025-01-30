<script setup lang="ts">
import { provide } from 'vue'
import { nanoid } from 'nanoid'

const props = defineProps<{
  multipleOpen?: boolean
}>()

provide('accordionId', nanoid())
provide('multipleOpen', props.multipleOpen)
</script>

<template>
  <div class="join join-vertical w-full">
    <slot></slot>
  </div>
</template>
