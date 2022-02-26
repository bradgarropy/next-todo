import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import {ChangeEventHandler, FC, FormEventHandler, useState} from "react"
import {Todo} from "types/todo"
import {createTodo, deleteTodo, readAllTodos} from "utils/todos"

type IndexPageProps = {
    initialTodos: Todo[]
}

const IndexPage: FC<IndexPageProps> = ({initialTodos}) => {
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

    const handleDelete = async (id: Todo["id"]) => {
        const deletedTodo = await deleteTodo(id)
        setTodos(todos.filter(todo => todo.id !== deletedTodo.id))
    }

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
        setTodo(event.target.value)
    }

    return (
        <Layout>
            <SEO title="next starter" />
            <form onSubmit={handleAdd}>
                <input type="text" value={todo} onChange={handleChange} />
                <button type="submit">add</button>
            </form>

            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <p>{todo.name}</p>

                        <button
                            type="button"
                            onClick={() => handleDelete(todo.id)}
                        >
                            delete
                        </button>
                    </div>
                )
            })}
        </Layout>
    )
}

const getServerSideProps = async () => {
    const todos = await readAllTodos()

    return {
        props: {
            initialTodos: todos,
        },
    }
}

export default IndexPage
export {getServerSideProps}
