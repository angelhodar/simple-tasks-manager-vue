import { z } from 'zod'
import { ref, watch } from 'vue'

export enum TaskStatus {
  Pending = 'pending',
  Completed = 'completed',
}

export const schema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  dueDate: z
    .string()
    .min(1, { message: 'Due date is required' })
    .transform((v) => new Date(v).toISOString()),
  status: z.nativeEnum(TaskStatus).default(TaskStatus.Pending),
})

export type TaskSchema = z.infer<typeof schema>

export interface Task extends TaskSchema {
  id: string
}

export const tasks = ref<Array<Task>>([])

const savedTasks = localStorage.getItem('tasks')

if (savedTasks) tasks.value = JSON.parse(savedTasks)

watch(tasks, (newTasks) => {
  localStorage.setItem('tasks', JSON.stringify(newTasks))
})

export function addTask(task: Task): void {
  tasks.value = [task, ...tasks.value]
}

export function updateTask(updatedTask: Task): void {
  tasks.value = tasks.value.map((task) => (task.id === updatedTask.id ? updatedTask : task))
}

export function deleteTask(taskId: string): void {
  tasks.value = tasks.value.filter((task) => task.id !== taskId)
}

export function toggleTaskStatus(taskId: string): void {
  tasks.value = tasks.value.map((task) =>
    task.id === taskId
      ? {
          ...task,
          status: task.status === TaskStatus.Completed ? TaskStatus.Pending : TaskStatus.Completed,
        }
      : task,
  )
}
