<script lang="ts" setup>
import CollapsibleSidebarLayout from './CollapsibleSidebarLayout.vue'

const lists = [
  {
    label: 'General',
    group: [
      { label: 'Dashboard', icon: 'i-[material-symbols--view-kanban]' },
      { label: 'Tasks', icon: 'i-[material-symbols--view-list]' },
      { label: 'Apps', icon: 'i-[material-symbols--bottom-app-bar]' },
      { label: 'Users', icon: 'i-[material-symbols--account-box]' },
    ],
  },
  {
    label: 'Other',
    group: [
      { label: 'Help', icon: 'i-[material-symbols--help]' },
      { label: 'Settings', icon: 'i-[material-symbols--settings]' },
    ],
  },
] as const
</script>

<template>
  <CollapsibleSidebarLayout class="font-text">
    <template #header> Admin </template>
    <template #sidebar>
      <nav class="flex flex-col gap-1">
        <template v-for="{ label, group } of lists" :key="label">
          <span class="px-3 leading-8 text-on-sur/60">{{ label }}</span>
          <ul class="contents">
            <li
              v-for="item of group"
              :key="item.label"
              class="inline-flex h-8 cursor-pointer items-center gap-3 rounded-md px-3 transition-colors select-none hover:bg-pri/5"
            >
              <span :class="['pointer-events-none size-4.5', item.icon]"></span>
              {{ item.label }}
            </li>
          </ul>
        </template>
      </nav>
    </template>
    <div class="size-full bg-pri/10"></div>
  </CollapsibleSidebarLayout>
</template>
