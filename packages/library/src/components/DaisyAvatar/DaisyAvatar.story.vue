<script setup lang="ts">
import { reactive } from 'vue'
import { masks, Masks, sizes } from '@/globals'
import DaisyAvatar from './DaisyAvatar.vue'
import DaisyBadge from '../DaisyBadge/DaisyBadge.vue'

const state = reactive({
  mask: 'hexagon-2' as Masks
})

const bgColorsSample = ['bg-teal-500', 'bg-indigo-500', 'bg-green-500', 'bg-pink-500']
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <Variant :title="`With image - ${size}`" v-for="size in sizes" :key="size">
      <DaisyAvatar :mask="state.mask" :size="size" src="https://i.pravatar.cc/300?u=2" />
    </Variant>

    <Variant :title="`With placeholder - ${size}`" v-for="size in sizes" :key="size">
      <DaisyAvatar :mask="state.mask" :size="size" placeholder="ND" class="bg-indigo-400" />
    </Variant>

    <Variant
      :title="`With Custom BG color - ${color}`"
      v-for="color in bgColorsSample"
      :key="color"
    >
      <DaisyAvatar :mask="state.mask" placeholder="ND" :class="color" />
    </Variant>

    <Variant :title="`With Empty Badge - ${size}`" v-for="size in sizes" :key="size">
      <div class="relative inline-block">
        <DaisyBadge class="absolute top-0 right-0 z-10" color="success" :size="size"></DaisyBadge>

        <DaisyAvatar :mask="state.mask" :size="size" src="https://i.pravatar.cc/300?u=2" />
      </div>
    </Variant>

    <Variant :title="`With Badge - ${size}`" v-for="size in sizes" :key="size">
      <div class="relative inline-block">
        <DaisyBadge
          class="absolute top-0 z-10 left-full translate-x-[-15px]"
          color="success"
          :size="size"
          >99+</DaisyBadge
        >

        <DaisyAvatar :mask="state.mask" :size="size" src="https://i.pravatar.cc/300?u=2" />
      </div>
    </Variant>

    <Variant title="With placeholder backup when image not loaded">
      <DaisyAvatar
        v-bind="state"
        size="md"
        class="bg-pink-500"
        src="https://i.pravatar.cc/150?img=100000"
        placeholder="ND"
      />
    </Variant>

    <Variant title="Default mask and size">
      <DaisyAvatar src="https://i.pravatar.cc/300?u=2" />
    </Variant>

    <template #controls>
      <HstSelect v-model="state.mask" :options="masks" title="Mask" />
    </template>
  </Story>
</template>
