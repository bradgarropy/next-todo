import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import Todo from "components/Todo"
import {GetServerSideProps} from "next"
import {useRouter} from "next/router"
import {
    ChangeEventHandler,
    FC,
    FormEventHandler,
    useEffect,
    useState,
} from "react"
import {Todo as TodoType} from "types/todo"
import {supabase} from "utils/supabase"
import {createTodo, deleteTodo, readAllTodos, updateTodo} from "utils/todos"

type IndexPageProps = {
    initialTodos: TodoType[]
}

const IndexPage: FC<IndexPageProps> = ({initialTodos}) => {
    const router = useRouter()

    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState(initialTodos)

    useEffect(() => {
        const user = supabase.auth.user()

        if (!user) {
            router.push("/login")
        }
    }, [router])

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

const getServerSideProps: GetServerSideProps = async () => {
    const todos = await readAllTodos()

    return {
        props: {
            initialTodos: todos,
        },
    }
}

export default IndexPage
export {getServerSideProps}
