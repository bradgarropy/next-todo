import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import TodoForm from "components/TodoForm"
import {mockTodo} from "test-utils/mocks"

const mockOnSubmit = jest.fn()

test("shows todo form", () => {
    render(<TodoForm onSubmit={mockOnSubmit} />)
    expect(screen.getByLabelText("todo"))
    expect(screen.getByText("add"))
})

test("accepts todo input", () => {
    render(<TodoForm onSubmit={mockOnSubmit} />)

    userEvent.type(screen.getByLabelText("todo"), mockTodo.name)
    expect(screen.getByLabelText("todo")).toHaveValue(mockTodo.name)
})

test("adds todo", () => {
    render(<TodoForm onSubmit={mockOnSubmit} />)

    userEvent.type(screen.getByLabelText("todo"), mockTodo.name)
    userEvent.click(screen.getByText("add"))

    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
    expect(mockOnSubmit).toHaveBeenCalledWith(mockTodo.name)
})
