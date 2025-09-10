<script lang="ts" setup>
import type { CycleButtonProps } from './CycleButton.vue'

import CycleButton from './CycleButton.vue'

const items = [
  { label: '随机播放', value: 'shuffle', icon: 'i-[fluent--arrow-shuffle-24-regular]' },
  { label: '顺序播放', value: 'repeatAll', icon: 'i-[fluent--arrow-repeat-all-24-regular]' },
  { label: '单曲循环', value: 'repeatOne', icon: 'i-[fluent--arrow-repeat-1-24-regular]' },
] as const satisfies CycleButtonProps['items']
</script>

<template>
  <CycleButton :items />
</template>
