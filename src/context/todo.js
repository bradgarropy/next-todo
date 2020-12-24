import PropTypes from "prop-types"
import {createContext, useState} from "react"
import firebase from "utils/firebase"

const TodoContext = createContext()

const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState([])

    const createTodo = async todo => {
        const ref = await firebase.firestore().collection("todos").add(todo)
        setTodos(todos => [...todos, {id: ref.id, ...todo}])
    }

    const readTodos = async user => {
        if (!user) {
            setTodos([])
            return
        }

        const snapshot = await firebase
            .firestore()
            .collection("todos")
            .where("uid", "==", user.uid)
            .get()

        const todos = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }))

        setTodos(todos)
    }

    const deleteTodo = async id => {
        await firebase.firestore().collection("todos").doc(id).delete()
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const context = {
        todos,
        createTodo,
        readTodos,
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
