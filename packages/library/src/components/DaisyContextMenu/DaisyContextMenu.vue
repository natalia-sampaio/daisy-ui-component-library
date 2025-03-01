<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRoot,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger
} from 'reka-ui'

interface MenuItem {
  label: string
  action?: () => void
  separator?: boolean
  subTitle?: string
  subTitleClass?: string
  children?: MenuItem[]
  subItemClass?: string
}

defineProps<{
  menuTitle?: string
  menuTitleClass?: string
  items: MenuItem[]
  itemsClass?: string
}>()
</script>

<template>
  <ContextMenuRoot>
    <ContextMenuTrigger>
      <slot></slot>
    </ContextMenuTrigger>
    <ContextMenuPortal>
      <ContextMenuContent
        :class="['w-56 rounded-box menu bg-base-200', itemsClass]"
        :side-offset="10"
      >
        <ContextMenuLabel v-if="menuTitle" :class="['menu-title text-[inherit]', menuTitleClass]">
          {{ menuTitle }}
        </ContextMenuLabel>
        <li v-for="item in items" :key="item.label">
          <component :is="item.children ? ContextMenuSub : ContextMenuItem">
            <button v-if="!item.children" @click="item.action">{{ item.label }}</button>
            <ContextMenuSubTrigger
              v-if="item.children"
              :class="['block w-full', item.subItemClass || itemsClass]"
            >
              <div class="flex items-center justify-between">
                <span>{{ item.label }}</span>
                <Icon icon="radix-icons:chevron-right" />
              </div>
            </ContextMenuSubTrigger>
            <ContextMenuPortal v-if="item.children">
              <ContextMenuSubContent
                :class="['w-56 pl-5 rounded-box menu bg-base-200', item.subItemClass || itemsClass]"
                :side-offset="10"
              >
                <ContextMenuLabel
                  v-if="item.subTitle"
                  :class="['menu-title text-[inherit]', item.subTitleClass]"
                >
                  {{ item.subTitle }}
                </ContextMenuLabel>
                <template v-for="child in item.children" :key="child.label">
                  <li>
                    <component :is="child.children ? ContextMenuSub : ContextMenuItem">
                      <button v-if="!child.children" @click="child.action">
                        {{ child.label }}
                      </button>
                      <ContextMenuSubTrigger
                        v-if="child.children"
                        :class="[
                          'block w-full',
                          child.subItemClass || item.subItemClass || itemsClass
                        ]"
                      >
                        <div class="flex items-center justify-between">
                          <span>{{ child.label }}</span>
                          <Icon icon="radix-icons:chevron-right" />
                        </div>
                      </ContextMenuSubTrigger>
                      <ContextMenuPortal v-if="child.children">
                        <ContextMenuSubContent
                          :class="[
                            'w-56 pl-5 rounded-box menu bg-base-200',
                            child.subItemClass || item.subItemClass || itemsClass
                          ]"
                          :side-offset="10"
                        >
                          <ContextMenuLabel
                            v-if="child.subTitle"
                            :class="['menu-title text-[inherit]', child.subTitleClass]"
                          >
                            {{ child.subTitle }}
                          </ContextMenuLabel>
                          <template v-for="subChild in child.children" :key="subChild.label">
                            <li>
                              <ContextMenuItem
                                v-if="!subChild.children"
                                @click.stop="subChild.action"
                              >
                                {{ subChild.label }}
                              </ContextMenuItem>
                            </li>
                          </template>
                        </ContextMenuSubContent>
                      </ContextMenuPortal>
                    </component>
                  </li>
                </template>
              </ContextMenuSubContent>
            </ContextMenuPortal>
          </component>
          <ContextMenuSeparator v-if="item.separator" />
        </li>
      </ContextMenuContent>
    </ContextMenuPortal>
  </ContextMenuRoot>
</template>
