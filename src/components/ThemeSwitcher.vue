<script lang="ts" setup>
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'
import IconButton from './IconButton.vue'

const colorModes = [
  { value: 'system', icon: 'i-[fluent--dark-theme-24-filled]' },
  { value: 'light', icon: 'i-[fluent--weather-sunny-24-filled]' },
  { value: 'dark', icon: 'i-[fluent--weather-moon-24-filled]' },
] as const

const colorMode = useColorMode({
  attribute: 'data-theme',
  modes: { system: 'system', light: 'light', dark: 'dark' },
})

const index = computed(() => colorModes.findIndex(({ value }) => value === colorMode.value))

const icon = computed(() => colorModes[index.value].icon)

function toggleColorMode() {
  colorMode.value = colorModes[(index.value + 1) % colorModes.length].value
}
</script>

<template>
  <IconButton @click="toggleColorMode" :icon />
</template>
