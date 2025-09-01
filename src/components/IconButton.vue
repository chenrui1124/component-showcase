<script lang="ts" setup>
defineProps<{
  icon: string
}>()

defineEmits<{
  click: [evt: MouseEvent]
}>()
</script>

<template>
  <button
    @click="$emit('click', $event)"
    class="preset-outline ml-auto inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-pri/90 text-on-pri drop-shadow-md backdrop-blur-md hover:bg-pri"
  >
    <span aria-hidden="true" class="pointer-events-none size-4.5" :class="icon"></span>
  </button>
</template>
