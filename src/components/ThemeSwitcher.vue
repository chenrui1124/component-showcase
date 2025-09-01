<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'
import IconButton from './IconButton.vue'

const themes = [
  { value: 'auto', icon: 'i-[fluent--phone-laptop-24-filled]' },
  { value: 'light', icon: 'i-[fluent--weather-sunny-24-filled]' },
  { value: 'dark', icon: 'i-[fluent--weather-moon-24-filled]' },
] as const

const theme = ref(localStorage.getItem('theme') ?? 'auto')

const index = computed(() => themes.findIndex(({ value }) => value === theme.value))

const icon = computed(() => themes[index.value].icon)

const nextTheme = () => {
  theme.value = themes[(index.value + 1) % themes.length].value
  localStorage.setItem('theme', theme.value)
}

watchEffect(() => {
  document.documentElement.dataset.theme = theme.value
})
</script>

<template>
  <IconButton @click="nextTheme" :icon class="ml-auto" />
</template>
