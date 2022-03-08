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
                className={TodoStyles.delete}
                type="button"
                aria-label={todo.isCompleted ? "complete" : "incomplete"}
                onClick={() => onCompleted(todo.id)}
            >
                {todo.isCompleted ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5rem"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5rem"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                )}
            </button>

            <span>{todo.name}</span>

            <button
                className={TodoStyles.delete}
                type="button"
                aria-label="delete"
                onClick={() => onDelete(todo.id)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5rem"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                </svg>
            </button>
        </div>
    )
}

export default Todo
