import SEO from "@bradgarropy/next-seo"
import {withAuthRequired} from "@supabase/supabase-auth-helpers/nextjs"
import Layout from "components/Layout"
import Todo from "components/Todo"
import {ChangeEventHandler, FC, FormEventHandler, useState} from "react"
import {Todo as TodoType} from "types/todo"
import {createTodo, deleteTodo, readAllTodos, updateTodo} from "utils/todos"

type TodosPageProps = {
    initialTodos: TodoType[]
}

const TodosPage: FC<TodosPageProps> = ({initialTodos}) => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState(initialTodos)

    const handleAdd: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()

        const newTodo = await createTodo({
            name: todo,
            isCompleted: false,
        })

        setTodos([newTodo, ...todos])
        setTodo("")
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

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        setTodo(event.target.value)
    }

    return (
        <Layout>
            <SEO title="next starter" />

            <h1>todos</h1>

            <form onSubmit={handleAdd}>
                <input type="text" value={todo} onChange={handleChange} />
                <button type="submit">add</button>
            </form>

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

const getServerSideProps = withAuthRequired({
    redirectTo: "/login",
    getServerSideProps: async ctx => {
        const todos = await readAllTodos(ctx)

        return {
            props: {
                initialTodos: todos,
            },
        }
    },
})

export default TodosPage
export {getServerSideProps}