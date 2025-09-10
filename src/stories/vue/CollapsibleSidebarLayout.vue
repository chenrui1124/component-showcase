<script lang="ts" setup>
import { useMediaQuery, useToggle } from '@vueuse/core'
import { computed } from 'vue'

const isMaxSm = useMediaQuery('(width < 40rem)')

const [on, toggle] = useToggle(!isMaxSm.value)

const toggleIcon = computed(() =>
  isMaxSm.value
    ? on
      ? 'i-[fluent--dismiss-24-regular]'
      : 'i-[fluent--list-24-regular]'
    : on
      ? 'i-[fluent--panel-left-24-filled]'
      : 'i-[fluent--panel-left-24-regular]'
)
</script>

<template>
  <div
    style="
      grid-template-areas:
        'sidebar header'
        'sidebar body';
    "
    :class="[
      'h-screen w-screen bg-sur text-sm/normal text-on-sur',
      isMaxSm
        ? 'flex flex-col'
        : [
            'grid grid-rows-[min-content_1fr] transition-[grid-template-columns] duration-300 ease-in-out',
            on ? 'grid-cols-[16rem_1fr]' : 'grid-cols-[0rem_1fr]',
          ],
    ]"
  >
    <header
      style="grid-area: header"
      class="flex h-14 items-center gap-3 border-b border-b-otl bg-sur px-3"
    >
      <button
        @click="toggle()"
        class="inline-flex size-8 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-pri/5"
      >
        <span aria-hidden="true" :class="['pointer-events-none size-4.5', toggleIcon]"></span>
      </button>
      <slot name="header"></slot>
    </header>
    <aside
      style="grid-area: sidebar"
      :class="[
        'border-r border-r-otl',
        isMaxSm
          ? ['fixed inset-x-0 top-14 bottom-0 bg-sur transition', on || 'opacity-0']
          : 'overflow-x-hidden',
      ]"
    >
      <Transition
        enter-from-class="opacity-0"
        enter-active-class="duration-300 transition"
        leave-active-class="duration-300 transition"
        leave-to-class="opacity-0"
      >
        <div v-if="on" class="min-w-64 overflow-x-hidden overflow-y-auto p-3">
          <slot name="sidebar"></slot>
        </div>
      </Transition>
    </aside>
    <main style="grid-area: body" :class="['p-3', isMaxSm && 'flex-1']">
      <slot></slot>
    </main>
  </div>
</template>
