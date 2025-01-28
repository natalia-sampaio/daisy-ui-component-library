<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>

<template>
  <div class="mockup-browser border-base-300 border">
    <div class="mockup-browser-toolbar">
      <div class="input border-base-300 border">{{ url }}</div>
    </div>
    <div class="border-base-300 flex justify-center border-t px-4 py-16"><slot></slot></div>
  </div>
</template>
