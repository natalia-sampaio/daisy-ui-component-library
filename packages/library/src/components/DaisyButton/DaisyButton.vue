<script setup lang="ts">
import { computed } from 'vue'
import { ColorsBrand, ColorsState, Sizes } from '../../globals'
import DaisyLoading from '../DaisyLoading/DaisyLoading.vue'

interface Props {
  color?: ColorsBrand | ColorsState | 'ghost' | 'link'
  outline?: boolean
  size?: Sizes
  responsive?: boolean
  wide?: boolean
  glass?: boolean
  square?: boolean
  circle?: boolean
  block?: boolean
  loading?: boolean
  noAnimation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  outline: false,
  size: 'md',
  wide: false
})

const colorClass = computed(() => {
  return {
    neutral: 'btn-neutral',
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    accent: 'btn-accent',
    ghost: 'btn-ghost',
    link: 'btn-link',
    success: 'btn-success',
    warning: 'btn-warning',
    error: 'btn-error',
    info: 'btn-info'
  }[props.color]
})

const sizeClass = computed(() => {
  return {
    lg: 'btn-lg',
    sm: 'btn-sm',
    xs: 'btn-xs'
  }[props.size]
})

const otherClasses = computed(() => {
  return {
    'btn-outline': props.outline,
    'sm:btn-sm md:btn-md lg:btn-lg': props.responsive,
    'btn-wide': props.wide,
    glass: props.glass,
    'btn-square': props.square,
    'btn-circle': props.circle,
    'btn-block': props.block,
    'no-animation': props.noAnimation
  }
})
</script>

<template>
  <button class="btn" :class="[colorClass, otherClasses, sizeClass]">
    <DaisyLoading v-if="loading" :size="size" />
    <slot></slot>
  </button>
</template>
