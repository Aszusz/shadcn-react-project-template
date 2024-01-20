import { Todo, TodoFilter } from '@/core/todo'

export interface ShellIndex {
  // Todos
  useTodosByFilter: (filter: TodoFilter) => ReadonlyArray<Todo>

  useTodoById: (id: string) => Todo | undefined

  addTodo: (text: string) => void

  toggleTodo: (id: string) => void

  deleteTodo: (id: string) => void
}
