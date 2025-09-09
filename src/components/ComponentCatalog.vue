<script lang="ts" setup>
import type { StoryMeta } from '@/types'

import { Framework } from '@/types'
import IconButton from './IconButton.vue'
import PopoverMenu from './PopoverMenu.vue'

defineProps<{
  class?: string
  stories: {
    url: string
    meta: StoryMeta
  }[]
  currentUrl: string
}>()
</script>

<template>
  <PopoverMenu location="start">
    <template #trigger="{ on, toggle }">
      <IconButton
        @click="toggle()"
        :icon="on ? 'i-[fluent--dismiss-24-filled]' : 'i-[fluent--list-24-filled]'"
        :class
      />
    </template>
    <ul class="grid grid-cols-[1fr_min-content] gap-x-3 gap-y-1.5 p-1.5 font-code">
      <li class="contents">
        <a
          v-for="{ url, meta } of stories"
          :key="url"
          :href="url"
          :tabindex="currentUrl === url ? -1 : 0"
          class="col-span-2 grid h-8 grid-cols-subgrid items-center rounded-full transition-colors hover:text-on-pri focus-visible:preset-outline"
          :class="
            currentUrl === url
              ? 'pointer-events-none text-on-pri'
              : 'text-on-pri/75 hover:text-on-pri'
          "
        >
          <span class="px-3">
            {{ meta.name }}
          </span>
          <span
            :framework="meta.framework"
            :class="[
              'col-start-2 h-full rounded-md px-3 text-sm/8 uppercase select-none',
              {
                [Framework.Vue]: 'bg-brand-vue text-on-brand-vue',
                [Framework.React]: 'bg-brand-react text-on-brand-react',
              }[meta.framework],
            ]"
          >
            {{ meta.framework }}
          </span>
        </a>
      </li>
    </ul>
  </PopoverMenu>
</template>
