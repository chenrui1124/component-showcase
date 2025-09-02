<script lang="ts" setup>
import { useToggle } from '@vueuse/core'
import { computed, ref } from 'vue'

const [on, toggle] = useToggle()

const enum PlayMode {
  Shuffle = '随机播放',
  RepeatAll = '顺序播放',
  RepeatOne = '单曲循环',
}

const modes = [
  { mode: PlayMode.Shuffle, icon: 'i-[fluent--arrow-shuffle-24-regular]' },
  { mode: PlayMode.RepeatAll, icon: 'i-[fluent--arrow-repeat-all-24-regular]' },
  { mode: PlayMode.RepeatOne, icon: 'i-[fluent--arrow-repeat-1-24-regular]' },
] as const

const currentIndex = ref(0)

const currentIcon = computed(() => modes[currentIndex.value].icon)

let timer: ReturnType<typeof setTimeout>

const nextMode = () => {
  currentIndex.value = (currentIndex.value + 1) % modes.length
  toggle(true)
  clearTimeout(timer)
  timer = setTimeout(() => toggle(false), 2400)
}
</script>

<template>
  <div class="relative size-fit">
    <button
      @click="nextMode"
      class="inline-flex size-9 cursor-pointer items-center justify-center rounded-md transition hover:bg-on-sur/5"
    >
      <Transition
        enter-from-class="opacity-0"
        enter-active-class="transition ease-out-quart"
        leave-active-class="absolute transition ease-out-quart"
        leave-to-class="opacity-0"
      >
        <span
          :key="currentIcon"
          aria-hidden="true"
          class="pointer-events-none size-5"
          :class="currentIcon"
        ></span>
      </Transition>
    </button>
    <Transition
      enter-from-class="scale-0 translate-4.5"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-200"
      leave-to-class="scale-0 translate-4.5"
    >
      <div
        v-if="on"
        class="absolute bottom-full left-0 mb-1 origin-bottom-left rounded-md bg-pri text-on-pri shadow-md"
      >
        <ul class="grid grid-cols-[min-content_1fr] p-1">
          <li
            v-for="{ mode, icon } of modes"
            :key="mode"
            class="col-span-2 grid h-9 grid-cols-subgrid items-center gap-x-3 px-3 transition select-none"
            :class="{ 'text-on-pri/75': mode !== modes[currentIndex].mode }"
          >
            <span aria-hidden="true" class="col-start-1 -mx-1 size-4.5" :class="icon"></span>
            <span class="col-start-2 text-nowrap">{{ mode }}</span>
          </li>
        </ul>
        <div
          :style="{ transform: `translateY(${currentIndex * 2.25}rem)` }"
          class="absolute inset-x-1 top-1 h-9 rounded-sm bg-on-pri/15 transition"
        ></div>
      </div>
    </Transition>
  </div>
</template>
