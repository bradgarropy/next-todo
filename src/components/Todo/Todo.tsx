import {FC} from "react"
import {Todo as TodoType} from "types/todo"

import styles from "./Todo.module.css"

type TodoProps = {
    todo: TodoType
    onDelete: (id: TodoType["id"]) => Promise<void>
    onCompleted: (id: TodoType["id"]) => Promise<void>
}

const Todo: FC<TodoProps> = ({todo, onDelete, onCompleted}) => {
    return (
        <div className={styles.todo}>
            <p>{todo.name}</p>

            <input
                type="checkbox"
                aria-label="isCompleted"
                checked={todo.isCompleted}
                onChange={() => onCompleted(todo.id)}
            />

            <button type="button" onClick={() => onDelete(todo.id)}>
                delete
            </button>
        </div>
    )
}

export default Todo
