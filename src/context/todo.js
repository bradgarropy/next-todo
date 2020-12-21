import PropTypes from "prop-types"
import {createContext, useState} from "react"
import {useEffect} from "react"

const TodoContext = createContext()

const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        console.log("Getting todos.")
    }, [])

    const createTodo = todo => {
        setTodos(todos => [...todos, todo])
    }

    const deleteTodo = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const context = {
        todos,
        createTodo,
        deleteTodo,
    }

    return (
        <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
    )
}

TodoProvider.propTypes = {
    children: PropTypes.node,
}

export {TodoContext, TodoProvider}
