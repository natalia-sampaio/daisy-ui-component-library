<script setup lang="ts">
import { reactive } from 'vue'
import DaisyContextMenu from './DaisyContextMenu.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Default Context Menu">
      <DaisyContextMenu
        :items="[
          { label: 'Edit', action: () => console.log('Edit clicked') },
          { label: 'Delete', action: () => console.log('Delete clicked') }
        ]"
      >
        <div class="bg-base-100 text-base-content p-2 rounded">
          Right click me to see context menu
        </div>
      </DaisyContextMenu>
    </Variant>
    <Variant title="Context Menu with Submenus">
      <DaisyContextMenu
        :items="[
          {
            label: 'Actions',
            children: [
              { label: 'Copy', action: () => console.log('Copy clicked') },
              { label: 'Paste', action: () => console.log('Paste clicked') }
            ]
          },
          { label: 'Settings', action: () => console.log('Settings clicked') }
        ]"
      >
        <div class="bg-base-100 text-base-content p-2 rounded">
          Right click me to see context menu
        </div>
      </DaisyContextMenu>
    </Variant>
    <Variant title="Themed Menu (Using DaisyUI Colors)">
      <DaisyContextMenu
        items-class="bg-primary text-primary-content"
        :items="[
          { label: 'Profile', action: () => console.log('Profile clicked') },
          { label: 'Logout', action: () => console.log('Logout clicked') }
        ]"
      >
        <div class="bg-base-100 text-base-content p-2 rounded">
          Right click me to see context menu
        </div>
      </DaisyContextMenu>
    </Variant>
    <Variant title="Context Menu with Submenu Styling">
      <DaisyContextMenu
        items-class="bg-primary text-primary-content"
        :items="[
          {
            label: 'File',
            subItemClass: 'bg-accent text-accent-content',
            children: [
              { label: 'New', action: () => console.log('New clicked') },
              { label: 'Open', action: () => console.log('Open clicked') }
            ]
          },
          {
            label: 'Edit',
            subItemClass: 'bg-secondary text-secondary-content',
            children: [
              { label: 'Undo', action: () => console.log('Undo clicked') },
              { label: 'Redo', action: () => console.log('Redo clicked') }
            ]
          }
        ]"
      >
        <div class="bg-base-100 text-base-content p-2 rounded">
          Right click me to see context menu
        </div>
      </DaisyContextMenu>
    </Variant>
    <Variant title="Context Menu with Section Titles">
      <DaisyContextMenu
        menu-title="Main Menu"
        menu-title-class="text-lg font-bold text-primary"
        :items="[
          {
            label: 'Account',
            subTitle: 'Manage your account',
            subTitleClass: 'text-yellow-300',
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
    </Variant>
    <template #controls></template>
  </Story>
</template>
