export type Todo = {
  readonly id: string
  readonly text: string
  readonly isDone: boolean
}

export type TodoFilter = 'all' | 'active' | 'done'
