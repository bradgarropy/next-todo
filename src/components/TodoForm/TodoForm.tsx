import {FC, FormEventHandler, useState} from "react"

import TodoFormStyles from "./TodoForm.module.css"

type TodoFormProps = {
    onSubmit: (todo: string) => Promise<void>
}

const TodoForm: FC<TodoFormProps> = ({onSubmit}) => {
    const [todo, setTodo] = useState("")

    const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()
        onSubmit(todo)
        setTodo("")
    }

    return (
        <form className={TodoFormStyles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                value={todo}
                className={TodoFormStyles.input}
                onChange={event => setTodo(event.target.value)}
            />

            <button className={TodoFormStyles.submit} type="submit">
                add
            </button>
        </form>
    )
}

export default TodoForm
