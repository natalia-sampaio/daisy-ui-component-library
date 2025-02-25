<script setup lang="ts">
import { DaisyAvatar, DaisyBadge } from 'daisy-vue'
import { masks, Masks, sizes } from 'daisy-vue/globals'
</script>

# Avatar Component

## Overview

The `<DaisyAvatar />` component is used to display user profile images, placeholders, and badges.  
It supports different `sizes`, `masks`, and background `colors`.

## Props

| Prop          | Type     | Required | Default    | Description                                                                                                          |
| ------------- | -------- | -------- | ---------- | -------------------------------------------------------------------------------------------------------------------- |
| `mask`        | `Mask`   | `No`     | `'circle'` | The shape mask applied to the avatar. Available values are defined in DaisyUI. [`See available masks`](#using-masks) |
| `size`        | `Size`   | `No`     | `'md'`     | Size of the avatar. Options: `'xs'`, `'sm'`, `'md'`, `'lg'`. [`See usage`](#different-sizes)                         |
| `src`         | `string` | `No`     | `none`     | The URL of the avatar image.                                                                                         |
| `placeholder` | `string` | `No`     | `none`     | The fallback text when no image is provided or fails to load.                                                        |

## Basic Usage

Displays a simple avatar with an image.

<DaisyAvatar src="https://i.pravatar.cc/300?u=2" />

```vue
<DaisyAvatar src="https://i.pravatar.cc/300?u=2" />
```

## With Placeholder

If no image is provided or the image fails to load, you can use a placeholder instead.
A background color is optional but improves visibility.

<DaisyAvatar placeholder="ND" />
<DaisyAvatar
  class="bg-pink-400"
  src="https://i.pravatar.cc/150?img=100000"
  placeholder="ND"
/>

```vue
<DaisyAvatar src="https://i.pravatar.cc/150?img=100000" placeholder="ND" />
<DaisyAvatar src="https://i.pravatar.cc/150?img=100000" placeholder="ND" class="bg-pink-400" />
```

## Custom Background Color

You can use any [`Tailwind CSS color`](https://tailwindcss.com/docs/colors) to define a background color.

<div class="grid grid-cols-2 gap-4">
<div v-for="color in ['bg-teal-500', 'bg-purple-500', 'bg-pink-500', 'bg-amber-800']" :key="color">
<DaisyAvatar placeholder="ND" :class="color" />

```vue-vue
<DaisyAvatar placeholder="ND" class="{{color}}" />
```

</div>
</div>

## Using Masks

`DaisyAvatar` supports different masks for unique shapes.
Use the `mask` prop to change the shape.

<div class="grid grid-cols-2 gap-4">
<div v-for='mask in masks' :key='mask'>
<DaisyAvatar  src="https://i.pravatar.cc/300?u=2" :mask="mask" />

```vue-vue
<DaisyAvatar src="https://i.pravatar.cc/300?u=2" mask="{{mask}}" />
```

</div>
</div>

## With badge

You can use [`DaisyBadge`](/components/badge) to add status indicators.

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

The `size` prop allows different avatar sizes.

<div class='flex gap-1'>
<DaisyAvatar v-for="size in sizes" :key="size" :size="size" src="https://i.pravatar.cc/300?u=2" />
</div>

<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyAvatar size="{{size}}" src="https://i.pravatar.cc/300?u=2" />
```

</template>
