import {
    CheckCircleIcon as IncompleteIcon,
    TrashIcon,
} from "@heroicons/react/outline"
import {CheckCircleIcon as CompleteIcon} from "@heroicons/react/solid"
import {FC} from "react"
import {Todo as TodoType} from "types/todo"

import TodoStyles from "./Todo.module.css"

type TodoProps = {
    todo: TodoType
    onDelete: (id: TodoType["id"]) => Promise<void>
    onCompleted: (id: TodoType["id"]) => Promise<void>
}

const Todo: FC<TodoProps> = ({todo, onDelete, onCompleted}) => {
    return (
        <div className={TodoStyles.todo}>
            <button
                className={TodoStyles.complete}
                type="button"
                aria-label={todo.isCompleted ? "complete" : "incomplete"}
                onClick={() => onCompleted(todo.id)}
            >
                {todo.isCompleted ? (
                    <CompleteIcon className={TodoStyles.icon} />
                ) : (
                    <IncompleteIcon className={TodoStyles.icon} />
                )}
            </button>

            <span>{todo.name}</span>

            <button
                className={TodoStyles.delete}
                type="button"
                aria-label="delete"
                onClick={() => onDelete(todo.id)}
            >
                <TrashIcon className={TodoStyles.icon} />
            </button>
        </div>
    )
}

export default Todo
