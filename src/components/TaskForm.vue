<script setup lang="ts">
import { reactive } from 'vue'
import type { FormSubmitEvent } from '@nuxt/ui'
import type { Task, TaskSchema } from '@/stores/tasks'
import { addTask, updateTask, schema, TaskStatus } from '@/stores/tasks'

const props = defineProps<{ task: Task | null }>()
const emit = defineEmits(['close'])

// Define default form state
const taskForm = reactive<TaskSchema>({
  title: props.task?.title || '',
  description: props.task?.description || '',
  dueDate: props.task?.dueDate?.split('T')[0] || '',
  status: props.task?.status || TaskStatus.Pending,
})

async function onSubmit(event: FormSubmitEvent<TaskSchema>) {
  // Note: Data is already validated here
  const { data: formData } = event

  if (props.task) updateTask({ ...formData, id: props.task.id })
  else addTask({ ...formData, id: Date.now().toString() })

  emit('close')
}
</script>

<template>
  <UForm
    :state="taskForm"
    :schema="schema"
    class="space-y-4 flex flex-col w-full"
    @submit="onSubmit"
  >
    <UFormField label="Title" name="title">
      <UInput v-model="taskForm.title" placeholder="Task title" class="w-full" />
    </UFormField>

    <UFormField label="Description" name="description">
      <UTextarea v-model="taskForm.description" placeholder="Task description" class="w-full" />
    </UFormField>

    <UFormField label="Due Date" name="dueDate">
      <UInput v-model="taskForm.dueDate" type="date" class="w-full" />
    </UFormField>

    <div v-if="props.task">
      <UFormField label="Status" name="status">
        <USelect
          class="w-full"
          v-model="taskForm.status"
          :items="[
            { label: 'Pending', value: TaskStatus.Pending },
            { label: 'Completed', value: TaskStatus.Completed },
          ]"
        />
      </UFormField>
    </div>

    <div class="flex justify-end gap-2 pt-4">
      <UButton color="secondary" variant="outline" @click="emit('close')">Cancel</UButton>
      <UButton color="primary" type="submit">
        {{ props.task ? 'Edit' : 'Create' }}
      </UButton>
    </div>
  </UForm>
</template>
