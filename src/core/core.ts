import { State } from '@/core/state'
import { Todo, TodoFilter } from './todo'

export const selectTodosByFilter = (filter: TodoFilter) => (state: State) => {
  switch (filter) {
    case 'all':
      return state.todos
    case 'active':
      return state.todos.filter((todo) => !todo.isDone)
    case 'done':
      return state.todos.filter((todo) => todo.isDone)
  }
}

export const selectTodoById = (id: string) => (state: State) => {
  return state.todos.find((todo) => todo.id === id)
}

export const addTodo = (todo: Todo) => (state: State) => ({
  ...state,
  todos: [...state.todos, todo],
})

export const toggleTodo = (id: string) => (state: State) => ({
  ...state,
  todos: state.todos.map((todo) =>
    todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
  ),
})

export const deleteTodo = (id: string) => (state: State) => ({
  ...state,
  todos: state.todos.filter((todo) => todo.id !== id),
})
