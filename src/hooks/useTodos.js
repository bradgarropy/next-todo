import {TodoContext} from "context/todo"
import {useContext} from "react"

const useTodos = () => {
    const todoCtx = useContext(TodoContext)
    return todoCtx
}

export default useTodos
