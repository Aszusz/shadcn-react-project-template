import { State, initialState } from '@/core/state'
import { StoreApi, createStore } from 'zustand/vanilla'
import { useStore } from 'zustand'
import * as Core from '@/core/core'
import { TodoFilter } from '@/core/todo'

export class Shell {
  private store: StoreApi<State>

  constructor() {
    this.store = createStore<State>(() => initialState)
  }

  useTodosByFilter(filter: TodoFilter) {
    return useStore(this.store, Core.selectTodosByFilter(filter))
  }

  useTodoById(id: string) {
    return useStore(this.store, Core.selectTodoById(id))
  }

  addTodo = (text: string) => {
    const todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      isDone: false,
    }
    this.store.setState(Core.addTodo(todo))
  }

  toggleTodo = (id: string) => {
    this.store.setState(Core.toggleTodo(id))
  }

  deleteTodo = (id: string) => {
    this.store.setState(Core.deleteTodo(id))
  }
}

export const shell = new Shell()
