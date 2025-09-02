<script lang="ts" setup>
import { computed, ref } from 'vue'
import IconButton from './IconButton.vue'

const { code } = defineProps<{
  code: string
}>()

const timer = ref<ReturnType<typeof setTimeout> | null>(null)

const icon = computed(() =>
  timer.value ? 'i-[fluent--checkmark-24-regular]' : 'i-[fluent--copy-24-filled]'
)

async function copyToClipboard() {
  if (timer.value) return
  await navigator.clipboard.writeText(code)
  timer.value = setTimeout(() => (timer.value = null), 3000)
}
</script>

<template>
  <IconButton @click="copyToClipboard" :icon class="fixed right-3 bottom-3" />
</template>
