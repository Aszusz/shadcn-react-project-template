import { Todo } from '@/core/todo'

export type State = {
  readonly todos: ReadonlyArray<Todo>
}

export const initialState: State = {
  todos: [],
}
