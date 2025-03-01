<script setup lang="ts">
import {DaisyContextMenu} from 'daisy-vue'
</script>

# ContextMenu Component

## Overview

The `<DaisyContextMenu />` component is a flexible and customizable context menu built with [`Reka-UI`](https://reka-ui.com/docs/components/context-menu).
It displays a menu located at the pointer, triggered by a right-click or a long-press.
Supports nested menus, custom styling, section titles, event handling, and collision handling.

### Accessibility

- Uses keyboard navigation and focus trapping from `Reka-UI`.
- Supports `aria-labels` and screen reader compatibility.

## Basic usage

<DaisyContextMenu :items="[
  { label: 'Edit', action: () => console.log('Edit clicked') },
  { label: 'Delete', action: () => console.log('Delete clicked') }
]">

<div class="border-2 border-[--vp-c-border] border-dashed text-[--vp-c-text-1] rounded-xl text-sm select-none py-[45px] w-full text-center">Right-click me to see the menu</div>
</DaisyContextMenu>

```vue
<script setup>
const items = [
  { label: 'Edit', action: () => console.log('Edit clicked') },
  { label: 'Delete', action: () => console.log('Delete clicked') }
]
</script>

<template>
  <DaisyContextMenu :items="items">
    <div
      class="border-2 border-[--vp-c-border] border-dashed text-[--vp-c-text-1] rounded-xl text-sm select-none py-[45px] w-full text-center"
    >
      Right-click me to see the menu
    </div>
  </DaisyContextMenu>
</template>
```

## Props

<table>
  <thead>
    <tr>
      <th>Prop Name</th>
      <th>Type</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>menuTitle</code></td>
      <td><code>string</code></td>
      <td><code>undefined</code></td>
      <td>Sets the title of the context menu.</td>
    </tr>
    <tr>
      <td><code>menuTitleClass</code></td>
      <td><code>string</code></td>
      <td><code>undefined</code></td>
      <td>Custom class for styling the menu title.</td>
    </tr>
    <tr>
      <td><code>items</code></td>
      <td><code>MenuItem[]</code></td>
      <td><strong>Required</strong></td>
      <td>An array defining the structure and behavior of the menu items.</td>
    </tr>
    <tr>
      <td><code>itemsClass</code></td>
      <td><code>string</code></td>
      <td><code>undefined</code></td>
      <td>Class applied to the entire menu for global styling.</td>
    </tr>
    <tr>
      <td><code>dir</code></td>
      <td><code>'ltr' | 'rtl'</code></td>
      <td>Inherited or <code>'ltr'</code></td>
      <td>The reading direction of the menu. If omitted, it inherits globally from <code>ConfigProvider</code> or assumes LTR (left-to-right).</td>
    </tr>
    <tr>
      <td><code>modal</code></td>
      <td><code>boolean</code></td>
      <td><code>true</code></td>
      <td>When <code>true</code>, interaction with outside elements is disabled, and only the menu content is visible to screen readers.</td>
    </tr>
    <!-- Merged row for "MenuItem Object Properties" -->
    <tr>
      <td colspan="4" align="center"><code>MenuItem</code> Object Properties</td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td><code>string</code></td>
      <td><code>undefined</code></td>
      <td>The text displayed for the menu item.</td>
    </tr>
    <tr>
      <td><code>action</code></td>
      <td><code>function</code></td>
      <td><code>undefined</code></td>
      <td>The function executed when the item is clicked.</td>
    </tr>
    <tr>
      <td><code>separator</code></td>
      <td><code>boolean</code></td>
      <td><code>false</code></td>
      <td>Displays a separator below the item.</td>
    </tr>
    <tr>
      <td><code>subTitle</code></td>
      <td><code>string</code></td>
      <td><code>undefined</code></td>
      <td>Adds a section title when used with <code>children</code>.</td>
    </tr>
    <tr>
      <td><code>subTitleClass</code></td>
      <td><code>string</code></td>
      <td><code>undefined</code></td>
      <td>Class for styling the submenu title.</td>
    </tr>
    <tr>
      <td><code>children</code></td>
      <td><code>MenuItem[]</code></td>
      <td><code>undefined</code></td>
      <td>Defines nested submenus.</td>
    </tr>
    <tr>
      <td><code>subItemClass</code></td>
      <td><code>string</code></td>
      <td><code>undefined</code></td>
      <td>Custom class for submenu styling.</td>
    </tr>
  </tbody>
</table>

`Events`
| Event Name | Payload | Description |
| ------------- | --------- | --------------------------------------------------------- |
| `update:open` | `boolean` | Event emitted when the open state of the submenu changes. |

## Advanced Examples

### Context Menu with Submenus

```vue
<script setup>
const items = [
  {
    label: 'File',
    children: [
      { label: 'New', action: () => console.log('New clicked') },
      { label: 'Open', action: () => console.log('Open clicked') }
    ]
  },
  { label: 'Settings', action: () => console.log('Settings clicked') }
]
</script>

<template>
  <DaisyContextMenu :items="items">
    <div
      class="border-2 border-[--vp-c-border] border-dashed text-[--vp-c-text-1] rounded-xl text-sm select-none py-[45px] w-full text-center"
    >
      Right-click me to see the menu
    </div>
  </DaisyContextMenu>
</template>
```

<DaisyContextMenu :items="[
  {
    label: 'File',
    children: [
      { label: 'New', action: () => console.log('New clicked') },
      { label: 'Open', action: () => console.log('Open clicked') }
    ]
  },
  { label: 'Settings', action: () => console.log('Settings clicked') }
]">

<div class="border-2 border-[--vp-c-border] border-dashed text-[--vp-c-text-1] rounded-xl text-sm select-none py-[45px] w-full text-center">Right-click me to see the menu</div>
</DaisyContextMenu>

### Context Menu with Section Titles

```vue
<script setup>
const items = [
  {
    label: 'Account',
    subTitle: 'Manage your account',
    children: [
      { label: 'Profile', action: () => console.log('Profile clicked') },
      { label: 'Settings', action: () => console.log('Settings clicked') }
    ]
  },
  {
    label: 'Help',
    subTitle: 'Support options',
    children: [
      { label: 'Documentation', action: () => console.log('Documentation clicked') },
      { label: 'Contact Support', action: () => console.log('Support clicked') }
    ]
  }
]
</script>
<template>
  <DaisyContextMenu
    menu-title="Main Menu"
    menu-title-class="text-lg font-bold text-primary"
    :items="items"
  >
    <div
      class="border-2 border-[--vp-c-border] border-dashed text-[--vp-c-text-1] rounded-xl text-sm select-none py-[45px] w-full text-center"
    >
      Right-click me to see the menu
    </div>
  </DaisyContextMenu>
</template>
```

<DaisyContextMenu
        menu-title="Main Menu"
        menu-title-class="text-lg font-bold text-primary"
        :items="[
          {
            label: 'Account',
            subTitle: 'Manage your account',
            children: [
              { label: 'Profile', action: () => console.log('Profile clicked') },
              { label: 'Settings', action: () => console.log('Settings clicked') }
            ]
          },
          {
            label: 'Help',
            subTitle: 'Support options',
            children: [
              { label: 'Documentation', action: () => console.log('Documentation clicked') },
              { label: 'Contact Support', action: () => console.log('Support clicked') }
            ]
          }
        ]"
      >

<div class="bg-base-100 text-base-content p-2 rounded">
Right click me to see context menu
</div>
</DaisyContextMenu>

### Themed Context Menu

```vue
<script setup>
const items = [
  {
    label: 'File',
    subTitle: 'Manage your file',
    subTitleClass: 'bg-accent text-accent-content rounded',
    children: [
      { label: 'New', action: () => console.log('New clicked') },
      { label: 'Open', action: () => console.log('Open clicked') }
    ]
  },
  { label: 'Settings', action: () => console.log('Settings clicked') },
  {
    label: 'Edit',
    subItemClass: 'bg-secondary text-secondary-content',
    children: [
      { label: 'Undo', action: () => console.log('Undo clicked') },
      { label: 'Redo', action: () => console.log('Redo clicked') }
    ]
  }
]
</script>
<template>
  <DaisyContextMenu items-class="bg-primary text-primary-content" :items="items">
    <div
      class="border-2 border-[--vp-c-border] border-dashed text-[--vp-c-text-1] rounded-xl text-sm select-none py-[45px] w-full text-center"
    >
      Right-click me to see the menu
    </div>
  </DaisyContextMenu>
</template>
```

<DaisyContextMenu items-class="bg-primary text-primary-content" :items="[
  {
    label: 'File',
    subTitle: 'Manage your file',
    subTitleClass: 'bg-accent text-accent-content rounded',
    children: [
      { label: 'New', action: () => console.log('New clicked') },
      { label: 'Open', action: () => console.log('Open clicked') }
    ]
  },
  { label: 'Settings', action: () => console.log('Settings clicked') },
  {
    label: 'Edit',
    subItemClass: 'bg-secondary text-secondary-content',
    children: [
      { label: 'Undo', action: () => console.log('Undo clicked') },
      { label: 'Redo', action: () => console.log('Redo clicked') }
    ]
  }
]">

<div class="border-2 border-[--vp-c-border] border-dashed text-[--vp-c-text-1] rounded-xl text-sm select-none py-[45px] w-full text-center">Right-click me to see the menu</div>
</DaisyContextMenu>

## Styling

DaisyContextMenu can be styled using [DaisyUI classes](https://daisyui.com/docs/colors/). Additionally, you can customize it further with the [Tailwind CSS color palette](https://tailwindcss.com/docs/colors) or by using [Tailwind’s arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values) with square bracket notation. These styles can be applied through the `itemsClass`, `subItemClass`, and `menuTitleClass` props.
