<script setup lang="ts">
import { useTemplateRef, h, resolveComponent, ref, watch, computed } from 'vue'
import { getPaginationRowModel } from '@tanstack/vue-table'
import type { TableColumn } from '@nuxt/ui'
import { tasks, toggleTaskStatus, deleteTask, type Task, TaskStatus } from '@/stores/tasks'

const UButton = resolveComponent('UButton')
const UBadge = resolveComponent('UBadge')

const emit = defineEmits(['edit-task'])
const table = useTemplateRef('table')

const pagination = ref({
  pageIndex: 0,
  pageSize: 5,
})

watch(
  tasks,
  () => {
    if (table.value?.tableApi) {
      table.value.tableApi.resetPageIndex()
    }
  },
  { deep: true },
)

const columns: TableColumn<Task>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: ({ row }) => `#${row.getValue('id')}`,
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => {
      const description = row.getValue<string>('description') || '-'
      return description.length > 50 ? `${description.substring(0, 50)}...` : description
    },
  },
  {
    accessorKey: 'dueDate',
    header: 'Due Date',
    cell: ({ row }) => {
      const dueDate = row.getValue<string>('dueDate')

      if (!dueDate) return '-'

      return new Date(dueDate).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.getValue<TaskStatus>('status')

      const color = status === TaskStatus.Completed ? 'primary' : 'secondary'
      const label = status === TaskStatus.Completed ? 'Completed' : 'Pending'

      return h(UBadge, { color, label })
    },
  },
  {
    id: 'actions',
    header: '',
    cell: ({ row }) => {
      const taskId = row.getValue<string>('id')

      return h('div', { class: 'flex gap-2' }, [
        h(UButton, {
          class: 'cursor-pointer text-blue-500',
          variant: 'ghost',
          icon: 'i-heroicons-pencil-square',
          onClick: () => emit('edit-task', row.original),
        }),
        h(UButton, {
          class: 'cursor-pointer text-red-500',
          variant: 'ghost',
          icon: 'i-heroicons-trash',
          // It would be better if action shows a confirmation dialog
          onClick: () => deleteTask(taskId),
        }),
        h(UButton, {
          class: `cursor-pointer ${row.original.status === TaskStatus.Completed ? 'text-yellow-500' : 'text-green-500'}`,
          variant: 'ghost',
          icon:
            row.original.status === TaskStatus.Completed
              ? 'i-heroicons-arrow-path'
              : 'i-heroicons-check',
          // It would be better if action shows a confirmation dialog
          onClick: () => toggleTaskStatus(taskId),
        }),
      ])
    },
  },
]

const total = computed(() => tasks.value.length)
</script>

<template>
  <div class="w-full space-y-4 pb-4">
    <div
      v-if="total === 0"
      class="flex flex-col items-center justify-center py-12 border rounded-lg"
    >
      <UIcon name="i-heroicons-clipboard-document-list" class="text-4xl mb-2 text-gray-400" />
      <p class="text-gray-500">No tasks available. Create your first task!</p>
    </div>

    <template v-else>
      <UTable
        :key="tasks.length"
        ref="table"
        class="flex-1"
        :pagination="pagination"
        :data="tasks"
        :columns="columns"
        :pagination-options="{
          getPaginationRowModel: getPaginationRowModel(),
        }"
      />

      <div class="flex justify-center border-t border-(--ui-border) pt-4">
        <UPagination
          :default-page="1"
          :items-per-page="pagination.pageSize"
          :total="total"
          @update:page="(p: number) => table?.tableApi?.setPageIndex(p - 1)"
        />
      </div>
    </template>
  </div>
</template>
