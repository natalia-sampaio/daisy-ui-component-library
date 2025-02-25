<script setup lang="ts">
import {DaisyAvatarGroup, DaisyAvatar} from 'daisy-vue'
import { sizes } from 'daisy-vue/globals'
</script>

# Avatar Group Component

## Overview

The `<DaisyAvatarGroup></DaisyAvatarGroup>` component is used to display a collection of avatars with customizable size and mask styles. It provides an aesthetically pleasing way to represent multiple users in a grouped format.

## Props

| Prop   | Type    | Default    | Description                                                       | Options                                              |
| ------ | ------- | ---------- | ----------------------------------------------------------------- | ---------------------------------------------------- |
| `size` | `Sizes` | `'md'`     | Defines the size of the avatar group and spacing between avatars. | `'xs'`, `'sm'`, `'md'`, `'lg'`                       |
| `mask` | `Masks` | `'circle'` | Defines the mask shape applied to the avatars inside the group.   | [`See Mask Options`](/components/avatar#using-masks) |

## Usage

### Without any props

Default behaviour.

<DaisyAvatarGroup>
  <DaisyAvatar src="https://i.pravatar.cc/300?u=1" />
  <DaisyAvatar placeholder="ND" class="bg-indigo-600" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=3" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=4" />
  <DaisyAvatar placeholder="99+" class="bg-gray-500" />
</DaisyAvatarGroup>

```html
<DaisyAvatarGroup>
  <DaisyAvatar src="https://i.pravatar.cc/300?u=1" />
  <DaisyAvatar placeholder="ND" class="bg-indigo-600" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=3" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=4" />
  <DaisyAvatar placeholder="99+" class="bg-gray-500" />
</DaisyAvatarGroup>
```

### With props

The `size` and `mask` props are controled from the `<DaisyAvatarGroup>` level through [`provide/inject`](https://vuejs.org/guide/components/provide-inject.html#prop-drilling), to avoid prop drilling.

<div class="grid grid-cols-2 gap-4 items-end">

<div>
<DaisyAvatarGroup size="xs" mask="hexagon">
  <DaisyAvatar src="https://i.pravatar.cc/300?u=1" />
  <DaisyAvatar placeholder="ND" class="bg-indigo-600" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=3" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=4" />
  <DaisyAvatar placeholder="99+" class="bg-gray-500" />
</DaisyAvatarGroup>

```vue
<DaisyAvatarGroup size="xs" mask="hexagon">
  <DaisyAvatar src="https://i.pravatar.cc/300?u=1" />
  <DaisyAvatar placeholder="ND" class="bg-indigo-600" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=3" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=4" />
  <DaisyAvatar placeholder="99+" class="bg-gray-500" />
</DaisyAvatarGroup>
```

</div>

<div>

<DaisyAvatarGroup size="sm" mask="diamond">
  <DaisyAvatar src="https://i.pravatar.cc/300?u=1" />
  <DaisyAvatar placeholder="ND" class="bg-indigo-600" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=3" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=4" />
  <DaisyAvatar placeholder="99+" class="bg-gray-500" />
</DaisyAvatarGroup>

```vue
<DaisyAvatarGroup size="sm" mask="diamond">
  <DaisyAvatar src="https://i.pravatar.cc/300?u=1" />
  <DaisyAvatar placeholder="ND" class="bg-indigo-600" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=3" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=4" />
  <DaisyAvatar placeholder="99+" class="bg-gray-500" />
</DaisyAvatarGroup>
```

</div>
<div>
<DaisyAvatarGroup size="md" mask="star">
  <DaisyAvatar src="https://i.pravatar.cc/300?u=1" />
  <DaisyAvatar placeholder="ND" class="bg-indigo-600" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=3" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=4" />
  <DaisyAvatar placeholder="99+" class="bg-gray-500" />
</DaisyAvatarGroup>

```vue
<DaisyAvatarGroup size="md" mask="star">
  <DaisyAvatar src="https://i.pravatar.cc/300?u=1" />
  <DaisyAvatar placeholder="ND" class="bg-indigo-600" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=3" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=4" />
  <DaisyAvatar placeholder="99+" class="bg-gray-500" />
</DaisyAvatarGroup>
```

</div>
<div>
<DaisyAvatarGroup size="lg" mask="decagon">
  <DaisyAvatar src="https://i.pravatar.cc/300?u=1" />
  <DaisyAvatar placeholder="ND" class="bg-indigo-600" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=3" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=4" />
  <DaisyAvatar placeholder="99+" class="bg-gray-500" />
</DaisyAvatarGroup>

```vue
<DaisyAvatarGroup size="lg" mask="decagon">
  <DaisyAvatar src="https://i.pravatar.cc/300?u=1" />
  <DaisyAvatar placeholder="ND" class="bg-indigo-600" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=3" />
  <DaisyAvatar src="https://i.pravatar.cc/300?u=4" />
  <DaisyAvatar placeholder="99+" class="bg-gray-500" />
</DaisyAvatarGroup>
```

</div>
</div>
