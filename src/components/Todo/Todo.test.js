import userEvent from "@testing-library/user-event"
import Todo from "components/Todo"
import {useTodos} from "hooks"
import {mockTodo, mockTodoCtx} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")

test("shows todo", () => {
    render(<Todo todo={mockTodo} />)
    expect(screen.getByText("groceries"))
})

test("deletes todo", () => {
    useTodos.mockReturnValue(mockTodoCtx)

    render(<Todo todo={mockTodo} />)

    userEvent.click(screen.getByText("X"))
    expect(mockTodoCtx.deleteTodo).toHaveBeenCalledTimes(1)
    expect(mockTodoCtx.deleteTodo).toHaveBeenCalledWith(123456789)
})
