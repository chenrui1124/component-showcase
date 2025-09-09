<script lang="ts" setup>
import { useToggle } from '@vueuse/core'

defineProps<{
  location: 'start' | 'end'
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
    <div
      v-if="on"
      @click="toggle(false)"
      class="fixed inset-0 h-screen w-screen bg-on-sur/10"
    ></div>
  </Transition>
  <div class="relative size-fit">
    <slot name="trigger" :="{ on, toggle }"></slot>
    <Transition
      enter-from-class="scale-0"
      enter-active-class="transition duration-300 ease-out-quart"
      leave-active-class="transition duration-300 ease-out-quart"
      leave-to-class="scale-0"
    >
      <div
        v-if="on"
        :class="[
          'absolute top-full mt-1 w-80 max-w-[calc(100vw_-_1.5rem)] rounded-lg bg-pri text-on-pri drop-shadow-md',
          { start: 'origin-top-left', end: 'origin-top-right' }[location],
        ]"
      >
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>
