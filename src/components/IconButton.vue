<script lang="ts" setup>
defineProps<{
  icon: string
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template>
  <button
    @click="$emit('click', $event)"
    class="preset-outline inline-flex size-9 cursor-pointer items-center justify-center rounded-md bg-pri/90 text-on-pri drop-shadow-md backdrop-blur-md hover:bg-pri"
  >
    <Transition
      enter-from-class="opacity-0"
      enter-active-class="transition"
      leave-active-class="absolute transition"
      leave-to-class="opacity-0"
    >
      <span
        :key="icon"
        aria-hidden="true"
        class="pointer-events-none size-4.5"
        :class="icon"
      ></span>
    </Transition>
  </button>
</template>
