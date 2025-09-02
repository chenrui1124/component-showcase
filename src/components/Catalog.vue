<script lang="ts" setup>
import { ref } from 'vue'
import IconButton from './IconButton.vue'

const state = ref(false)

const toggle = () => (state.value = !state.value)
</script>

<template>
  <Transition
    enter-from-class="opacity-0"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300"
    leave-to-class="opacity-0"
  >
    <div v-if="state" class="fixed inset-0 h-screen w-screen bg-on-sur/25"></div>
  </Transition>
  <div class="relative size-fit">
    <IconButton
      @click="toggle"
      :icon="state ? 'i-[fluent--dismiss-24-filled]' : 'i-[fluent--list-24-filled]'"
    />
    <Transition
      enter-from-class="grid-rows-[0fr]"
      enter-active-class="transition-all duration-300"
      enter-to-class="grid-rows-[1fr]"
      leave-from-class="grid-rows-[1fr]"
      leave-active-class="transition-all duration-300"
      leave-to-class="grid-rows-[0fr]"
    >
      <div
        v-if="state"
        class="absolute top-full left-0 mt-1 grid w-80 max-w-[calc(100vw_-_1.5rem)] grid-cols-1 rounded-[1.25rem] bg-pri text-on-pri drop-shadow-md"
      >
        <div class="overflow-hidden">
          <div class="p-1">
            <a></a>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
