<script lang="ts" setup>
import type { StoryMeta } from '@/types'

import IconButton from './IconButton.vue'
import { useToggle } from '@vueuse/core'

defineProps<{
  stories: {
    url: string
    meta: StoryMeta
  }[]
  currentUrl: string
}>()

const [on, toggle] = useToggle()
</script>

<template>
  <Transition
    enter-from-class="opacity-0"
    enter-active-class="transition duration-300 ease-out-quart"
    leave-active-class="transition duration-300 ease-out-quart"
    leave-to-class="opacity-0"
  >
    <div v-if="on" class="fixed inset-0 h-screen w-screen bg-on-sur/25"></div>
  </Transition>
  <div class="relative size-fit">
    <IconButton
      @click="toggle()"
      :icon="on ? 'i-[fluent--dismiss-24-filled]' : 'i-[fluent--list-24-filled]'"
    />
    <Transition
      enter-from-class="grid-rows-[0fr]"
      enter-active-class="transition-all duration-300 ease-out-quart"
      enter-to-class="grid-rows-[1fr]"
      leave-from-class="grid-rows-[1fr]"
      leave-active-class="transition-all duration-300 ease-out-quart"
      leave-to-class="grid-rows-[0fr]"
    >
      <div
        v-if="on"
        class="absolute top-full left-0 mt-1 grid w-80 max-w-[calc(100vw_-_1.5rem)] grid-cols-1 rounded-[1.25rem] bg-pri text-on-pri drop-shadow-md"
      >
        <div class="overflow-hidden">
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
                <span class="col-start-2 h-full rounded-full bg-on-pri/10 px-3 text-sm/8 uppercase">
                  {{ meta.framework }}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Transition>
  </div>
</template>
