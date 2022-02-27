import {Todo} from "types/todo"

const mockTodos: Todo[] = [
    {
        createdAt: "2022-01-01T00:00:00.000Z",
        id: 1,
        isCompleted: true,
        name: "make one dollar",
    },
    {
        createdAt: "2022-01-02T00:00:00.000Z",
        id: 2,
        isCompleted: false,
        name: "make one million dollars",
    },
]

const mockTodo: Todo = mockTodos[0]

export {mockTodo, mockTodos}
