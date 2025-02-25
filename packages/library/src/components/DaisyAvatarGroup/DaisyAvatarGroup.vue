<script setup lang="ts">
import { Masks, Sizes } from '@/globals'
import { computed, provide } from 'vue'

const props = withDefaults(
  defineProps<{
    size?: Sizes
    mask?: Masks
  }>(),
  {
    size: 'md'
  }
)

const size = computed(() => props.size)
provide('DaisyAvatarSize', size)

const mask = computed(() => props.mask)
provide('DaisyAvatarMask', mask)

const classes = computed(() => {
  const spacing = {
    xs: '-space-x-3',
    sm: '-space-x-6',
    md: '-space-x-8',
    lg: '-space-x-10'
  }[size.value]

  return [spacing]
})
</script>

<template>
  <div class="avatar-group *:border-none" :class="classes">
    <slot></slot>
  </div>
</template>
