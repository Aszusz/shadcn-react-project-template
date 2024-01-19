import { shell } from '@/shell/shell'
import { Checkbox } from '../ui/checkbox'
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { TrashIcon } from 'lucide-react'

type TodoProps = {
  id: string
}

export function Todo(props: TodoProps) {
  const todo = shell.useTodoById(props.id)

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="task-1"
        checked={todo?.isDone}
        onCheckedChange={() => shell.toggleTodo(props.id)}
      />
      <Label className="flex-1" htmlFor="task-1">
        {todo?.text}
      </Label>
      <Button
        size="icon"
        variant="outline"
        onClick={() => shell.deleteTodo(props.id)}
      >
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}
