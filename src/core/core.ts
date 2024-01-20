import { State } from '@/core/state'
import { Todo, TodoFilter } from '@/core/todo'
import { CoreIndex } from '@/core/core-index'

export class Core implements CoreIndex {
  selectTodosByFilter = (filter: TodoFilter) => (state: State) => {
    switch (filter) {
      case 'all':
        return state.todos
      case 'active':
        return state.todos.filter((todo) => !todo.isDone)
      case 'done':
        return state.todos.filter((todo) => todo.isDone)
    }
  }

  selectTodoById = (id: string) => (state: State) => {
    return state.todos.find((todo) => todo.id === id)
  }

  addTodo = (todo: Todo) => (state: State) => ({
    ...state,
    todos: [...state.todos, todo],
  })

  toggleTodo = (id: string) => (state: State) => ({
    ...state,
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    ),
  })

  deleteTodo = (id: string) => (state: State) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  })
}

export const core = new Core()
