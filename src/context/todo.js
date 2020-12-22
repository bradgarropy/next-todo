import PropTypes from "prop-types"
import {createContext, useState} from "react"
import {useEffect} from "react"
import firebase from "utils/firebase"

const TodoContext = createContext()

const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const readTodos = async () => {
            const snapshot = await firebase
                .firestore()
                .collection("todos")
                .get()

            const todos = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))

            setTodos(todos)
        }

        readTodos()
    }, [])

    const createTodo = async todo => {
        const ref = await firebase
            .firestore()
            .collection("todos")
            .add({text: todo.text})

        setTodos(todos => [...todos, {id: ref.id, ...todo}])
    }

    const deleteTodo = async id => {
        await firebase.firestore().collection("todos").doc(id).delete()
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
