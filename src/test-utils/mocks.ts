import {User} from "@supabase/supabase-js"
import {Todo} from "types/todo"

const mockTodos: Todo[] = [
    {
        createdAt: "2022-01-01T00:00:00.000Z",
        id: 1,
        isCompleted: true,
        name: "complete todo",
    },
    {
        createdAt: "2022-01-02T00:00:00.000Z",
        id: 2,
        isCompleted: false,
        name: "incomplete todo",
    },
]

const mockTodo: Todo = mockTodos[0]
const mockCompleteTodo: Todo = mockTodos[0]
const mockIncompleteTodo: Todo = mockTodos[1]

const mockUser: User = {
    app_metadata: {
        provider: "email",
    },
    aud: "authenticated",
    created_at: "2022-03-01T00:00:00.00000Z",
    id: "abc123",
    user_metadata: {},
}

export {mockCompleteTodo, mockIncompleteTodo, mockTodo, mockTodos, mockUser}
