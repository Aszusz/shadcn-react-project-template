import { State } from '@/core/state'
import { Todo, TodoFilter } from '@/core/todo'

export interface CoreIndex {
  // Todo
  selectTodosByFilter: (
    filter: TodoFilter,
  ) => (state: State) => ReadonlyArray<Todo>

  selectTodoById: (id: string) => (state: State) => Todo | undefined

  addTodo: (todo: Todo) => (state: State) => State

  toggleTodo: (id: string) => (state: State) => State

  deleteTodo: (id: string) => (state: State) => State
}
