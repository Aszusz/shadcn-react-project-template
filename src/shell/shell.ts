import { State, initialState } from '@/core/state'
import { StoreApi, createStore } from 'zustand/vanilla'
import { useStore } from 'zustand'
import { Core } from '@/core/core'
import { TodoFilter } from '@/core/todo'
import { ShellIndex } from '@/shell/shell-index'
import { CoreIndex } from '@/core/core-index'

export class Shell implements ShellIndex {
  private core: CoreIndex
  private store: StoreApi<State>

  constructor() {
    this.core = new Core()
    this.store = createStore<State>(() => initialState)
  }

  _getState() {
    return this.store.getState()
  }

  _setState(state: State) {
    this.store.setState(state)
  }

  useTodosByFilter(filter: TodoFilter) {
    return useStore(this.store, this.core.selectTodosByFilter(filter))
  }

  useTodoById(id: string) {
    return useStore(this.store, this.core.selectTodoById(id))
  }

  addTodo = (text: string) => {
    const todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      isDone: false,
    }
    this.store.setState(this.core.addTodo(todo))
  }

  toggleTodo = (id: string) => {
    this.store.setState(this.core.toggleTodo(id))
  }

  deleteTodo = (id: string) => {
    this.store.setState(this.core.deleteTodo(id))
  }
}

export const shell = new Shell()
