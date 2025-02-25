<script setup lang="ts">
import { DaisyAvatar, DaisyBadge } from 'daisy-vue'
import { masks, Masks, sizes } from 'daisy-vue/globals'
</script>

# Avatar Component

## Basic Usage

<DaisyAvatar src="https://i.pravatar.cc/300?u=2" />

```vue
<DaisyAvatar src="https://i.pravatar.cc/300?u=2" />
```

## With Placeholder and Custom Background Color

<DaisyAvatar placeholder="ND" class="bg-pink-400" />

```vue
<DaisyAvatar placeholder="ND" class="bg-pink-400" />
```

## Custom Background Color

<div class='flex gap-1'>
<DaisyAvatar placeholder="ND" class="bg-teal-500" />
<DaisyAvatar placeholder="ND" class="bg-purple-500" />
<DaisyAvatar placeholder="ND" class="bg-pink-500" />
</div>

<template v-for="color in ['bg-teal-500', 'bg-purple-500', 'bg-pink-500']" :key="color" >

```vue-vue
<DaisyAvatar placeholder="ND" class="{{color}}" />
```

</template>

## Using Masks

DaisyAvatar supports different masks for unique shapes. Use the mask prop to change the shape.

<DaisyAvatar v-for='mask in masks' :key='mask' src="https://i.pravatar.cc/300?u=2" :mask="mask" />

```vue
<DaisyAvatar src="https://i.pravatar.cc/300?u=2" mask="hexagon" />
```

## With badge

<div class="relative inline-block">
  <DaisyBadge class="absolute top-0 right-0 z-10" color="success" size="sm"></DaisyBadge>
  <DaisyAvatar src="https://i.pravatar.cc/300?u=2" />
</div>

```html
<div class="relative inline-block">
  <DaisyBadge class="absolute top-0 right-0 z-10" color="success" size="sm" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=2" />
</div>
```

## Different sizes

<div class='flex gap-1'>
<DaisyAvatar v-for="size in sizes" :key="size" :size="size" src="https://i.pravatar.cc/300?u=2" />
</div>

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyAvatar size="{{size}}" src="https://i.pravatar.cc/300?u=2" />
```

</template>
