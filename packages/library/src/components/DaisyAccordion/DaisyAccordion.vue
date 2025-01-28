<script setup lang="ts">
import { provide } from 'vue'
import { nanoid } from 'nanoid'

provide('accordionId', nanoid())
</script>

<template>
  <div class="join join-vertical w-full">
    <slot></slot>
  </div>
</template>
