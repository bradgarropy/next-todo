const mockAuthCtx = {
    user: {email: "test@gmail.com"},
    signup: jest.fn(),
    login: jest.fn(),
    logout: jest.fn(),
}

const mockTodo = {
    id: 123456789,
    text: "groceries",
}

const mockTodos = [
    {
        id: 123456789,
        text: "groceries",
    },
    {
        id: 987654321,
        text: "groceries",
    },
]

const mockTodoCtx = {
    todos: mockTodos,
    createTodo: jest.fn(),
    deleteTodo: jest.fn(),
}

export {mockAuthCtx, mockTodo, mockTodoCtx, mockTodos}
