<script setup lang="ts">
import { ref } from 'vue'
import type { Task } from '@/stores/tasks'
import Table from '@/components/Table.vue'
import TaskForm from '@/components/TaskForm.vue'

const open = ref(false)
const editingTask = ref<Task | null>(null)

function openNewTaskModal() {
  editingTask.value = null
  open.value = true
}

function closeModal() {
  open.value = false
}

function editTask(task: Task) {
  editingTask.value = task
  open.value = true
}
</script>

<template>
  <UApp>
    <div class="flex flex-col items-center justify-center gap-4 p-8 min-h-screen">
      <h1 class="font-bold text-4xl text-(--ui-primary)">Simple Tasks Manager</h1>

      <div class="w-full max-w-5xl">
        <div class="flex justify-end items-center mb-4">
          <UModal v-model:open="open" :title="editingTask ? 'Edit Task' : 'Create New Task'">
            <UButton icon="i-heroicons-plus" color="primary" @click="openNewTaskModal">
              New Task
            </UButton>
            <template #body>
              <TaskForm :task="editingTask" @close="closeModal" />
            </template>
          </UModal>
        </div>

        <Table @edit-task="editTask"></Table>
      </div>
    </div>
  </UApp>
</template>
