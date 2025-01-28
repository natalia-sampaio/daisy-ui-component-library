<script setup lang="ts">
import { reactive } from 'vue'
import DaisyButton from './DaisyButton.vue'
import { colorsBrand, colorsState, sizes } from '../../globals'

const state = reactive({
  content: 'Click me!',
  disabled: false,
  outline: false,
  size: sizes[2],
  resposive: false,
  wide: false,
  glass: false,
  square: false,
  circle: false,
  block: false,
  loading: false,
  noAnimation: false
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <Variant
      v-for="color in [...colorsBrand, 'ghost' as const, 'link' as const, ...colorsState]"
      :key="color"
      :title="color"
    >
      <DaisyButton
        :color="color"
        :outline="state.outline"
        :disabled="state.disabled"
        :size="state.size"
        :responsive="state.resposive"
        :wide="state.wide"
        :glass="state.glass"
        :square="state.square"
        :circle="state.circle"
        :block="state.block"
        :loading="state.loading"
        :no-animation="state.noAnimation"
      >
        {{ state.content }}
      </DaisyButton>
    </Variant>
    <template #controls>
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstCheckbox v-model="state.outline" title="Outline" />
      <HstSelect v-model="state.size" title="Size" :options="sizes" />
      <HstCheckbox v-model="state.resposive" title="Responsive" />
      <HstCheckbox v-model="state.wide" title="Wide" />
      <HstCheckbox v-model="state.glass" title="Glass" />
      <HstCheckbox v-model="state.square" title="Square" />
      <HstCheckbox v-model="state.circle" title="Circle" />
      <HstCheckbox v-model="state.block" title="Block" />
      <HstCheckbox v-model="state.loading" title="Loading" />
      <HstCheckbox v-model="state.noAnimation" title="No click animation" />
    </template>
  </Story>
</template>
