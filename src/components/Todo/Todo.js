import {useTodos} from "hooks"
import PropTypes from "prop-types"
import styled from "styled-components"

const TodoWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    margin-bottom: 1rem;
`

const Todo = ({todo}) => {
    const todoCtx = useTodos()

    const onClick = () => {
        todoCtx.deleteTodo(todo.id)
    }

    return (
        <TodoWrapper>
            <span key={todo.id}>{todo.text}</span>
            <button onClick={onClick}>X</button>
        </TodoWrapper>
    )
}

Todo.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default Todo
