import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Todo from "components/Todo"
import TodoForm from "components/TodoForm"
import {
    ChangeEventHandler,
    FC,
    FormEventHandler,
    useEffect,
    useState,
} from "react"
import {Todo as TodoType} from "types/todo"
import {createTodo, deleteTodo, readAllTodos, updateTodo} from "utils/todos"

type TodosPageProps = null

const TodosPage: FC<TodosPageProps> = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const fetchTodos = async () => {
            const todos = await readAllTodos()
            setTodos(todos)
        }

        fetchTodos()
    }, [])

    const handleAdd = async (todo: string) => {
        const newTodo = await createTodo({
            name: todo,
            isCompleted: false,
        })

        setTodos([newTodo, ...todos])
    }

    const handleCompleted = async (id: TodoType["id"]) => {
        const index = todos.findIndex(todo => todo.id === id)

        const updatedTodo = await updateTodo(id, {
            isCompleted: !todos[index].isCompleted,
        })

        const newTodos = [...todos]
        newTodos[index] = updatedTodo

        setTodos(newTodos)
    }

    const handleDelete = async (id: TodoType["id"]) => {
        const deletedTodo = await deleteTodo(id)
        setTodos(todos.filter(todo => todo.id !== deletedTodo.id))
    }

    return (
        <Layout>
            <SEO title="next starter" />

            <h1>todos</h1>

            <TodoForm onSubmit={handleAdd} />

            {todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onCompleted={handleCompleted}
                        onDelete={handleDelete}
                    />
                )
            })}
        </Layout>
    )
}

export default TodosPage
