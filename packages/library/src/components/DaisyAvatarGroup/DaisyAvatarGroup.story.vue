<script setup lang="ts">
import { reactive } from 'vue'
import DaisyAvatarGroup from './DaisyAvatarGroup.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <DaisyAvatarGroup></DaisyAvatarGroup>
    </Variant>

    <template #controls></template>
  </Story>
</template>
