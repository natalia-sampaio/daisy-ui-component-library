<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAvatarGroup from './DaisyAvatarGroup.vue'
import DaisyAvatar from '../DaisyAvatar/DaisyAvatar.vue'
import { masks, Masks, sizes, Sizes } from '@/globals'

const state = reactive({
  mask: 'hexagon' as Masks,
  size: 'md' as Sizes
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Avatar Group">
      <DaisyAvatarGroup :mask="state.mask" :size="state.size">
        <DaisyAvatar src="https://i.pravatar.cc/300?u=1" />
        <DaisyAvatar placeholder="ND" class="bg-indigo-600" />
        <DaisyAvatar src="https://i.pravatar.cc/300?u=3" />
        <DaisyAvatar src="https://i.pravatar.cc/300?u=4" />
        <DaisyAvatar placeholder="99+" class="bg-gray-500" />
      </DaisyAvatarGroup>
    </Variant>

    <template #controls>
      <HstSelect v-model="state.mask" :options="masks" title="Mask" />
      <HstSelect v-model="state.size" :options="sizes" title="Size" />
    </template>
  </Story>
</template>
