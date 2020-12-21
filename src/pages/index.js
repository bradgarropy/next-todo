import Facebook from "components/Facebook"
import Layout from "components/Layout"
import Meta from "components/Meta"
import Todo from "components/Todo"
import Twitter from "components/Twitter"
import {useTodos} from "hooks"
import {useState} from "react"
import styled from "styled-components"

const FormWrapper = styled.form`
    margin-bottom: 2rem;
`

const IndexPage = () => {
    const todoCtx = useTodos()
    const [todo, setTodo] = useState("")

    const onChange = event => {
        setTodo(event.target.value)
    }

    const onSubmit = event => {
        event.preventDefault()
        todoCtx.createTodo({id: Date.now(), text: todo})
        setTodo("")
    }

    return (
        <Layout>
            <Meta title="next starter" />
            <Facebook />
            <Twitter />

            <FormWrapper onSubmit={onSubmit}>
                <input
                    type="text"
                    name="todo"
                    value={todo}
                    onChange={onChange}
                    autoComplete="off"
                />
            </FormWrapper>

            {todoCtx.todos.length ? (
                todoCtx.todos.map(todo => <Todo key={todo.id} todo={todo} />)
            ) : (
                <p>All done, relax.</p>
            )}
        </Layout>
    )
}

export default IndexPage
