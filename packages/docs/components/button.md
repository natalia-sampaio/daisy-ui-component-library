<script setup lang="ts">
import {DaisyButton, DaisyTabs, DaisyTab} from 'daisy-vue'
import { colorsBrand, colorsState, sizes } from 'daisy-vue/globals'
</script>

# Button Component

## Without any props

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton>Click me</DaisyButton>
  </DaisyTab>
  <DaisyTab name="Code">

```vue
<DaisyButton>Click me</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>

## With brand colors

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton v-for="color in [...colorsBrand, 'ghost', 'link']" :key="color" :color="color">{{color}}</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">
<template v-for="color in [...colorsBrand, 'ghost', 'link']" :key="color">

```vue-vue
<DaisyButton color="{{color}}">{{color}}</DaisyButton>
```

</template>
  </DaisyTab>
</DaisyTabs>

## With state colors

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton v-for="color in colorsState" :key="color" :color="color">{{color}}</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">
<template v-for="color in colorsState" :key="color">

```vue-vue
<DaisyButton color="{{color}}">{{color}}</DaisyButton>
```

</template>
  </DaisyTab>
</DaisyTabs>

## With outline

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton outline>outlined</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">

```vue-vue
<DaisyButton outline>outlined</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>

## Sizes

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton v-for="size in sizes" :key="size" :size="size">{{size}}</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">
<template v-for="size in sizes" :key="size">

```vue-vue
<DaisyButton size="{{size}}">{{size}}</DaisyButton>
```

</template>
  </DaisyTab>
</DaisyTabs>

## Responsive

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton responsive>responsive</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">

```vue-vue
<DaisyButton responsive>responsive</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>

## Wide

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton wide>wide</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">

```vue-vue
<DaisyButton wide>wide</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>

## Glass

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton glass>glass</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">

```vue-vue
<DaisyButton glass>glass</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>

## Disabled

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton disabled>disabled</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">

```vue-vue
<DaisyButton disabled>disabled</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>

## Square

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton square>square</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">

```vue-vue
<DaisyButton square>square</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>

## Circle

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton circle>circle</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">

```vue-vue
<DaisyButton circle>circle</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>

## With Icons

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      Button
    </DaisyButton>
    <DaisyButton>
      Button
      <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </DaisyButton>
  </DaisyTab>
  <DaisyTab name="Code">

```vue-vue
<DaisyButton>
<svg
xmlns="http://www.w3.org/2000/svg"
class="h-6 w-6"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
Button
</DaisyButton>
<DaisyButton>
Button
<svg
xmlns="http://www.w3.org/2000/svg"
class="h-6 w-6"
fill="none"
viewBox="0 0 24 24"
stroke="currentColor">
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>

## Block

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton block>block</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">

```vue-vue
<DaisyButton block>block</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>

## With loading spinner

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton loading />
    <DaisyButton loading>loading</DaisyButton>    
  </DaisyTab>
  <DaisyTab name="Code">

```vue-vue
<DaisyButton loading />
<DaisyButton loading>loading</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>

## Without click animation

<DaisyTabs :type="'lifted'">
  <DaisyTab name="Preview">
    <DaisyButton no-animation>I have no click animation :(</DaisyButton>
  </DaisyTab>
  <DaisyTab name="Code">

```vue-vue
<DaisyButton noAnimation>I have no click animation :(</DaisyButton>
```

  </DaisyTab>
</DaisyTabs>
