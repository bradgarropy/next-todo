import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Todo from "components/Todo"
import {mockCompleteTodo, mockIncompleteTodo} from "test-utils/mocks"

const mockOnCompleted = jest.fn()
const mockOnDelete = jest.fn()

test("shows complete todo", () => {
    render(
        <Todo
            todo={mockCompleteTodo}
            onCompleted={mockOnCompleted}
            onDelete={mockOnDelete}
        />,
    )

    expect(screen.getByText(mockCompleteTodo.name))
    expect(screen.getByLabelText("complete"))
    expect(screen.getByLabelText("delete"))
})

test("shows incomplete todo", () => {
    render(
        <Todo
            todo={mockIncompleteTodo}
            onCompleted={mockOnCompleted}
            onDelete={mockOnDelete}
        />,
    )

    expect(screen.getByText(mockIncompleteTodo.name))
    expect(screen.getByLabelText("incomplete"))
    expect(screen.getByLabelText("delete"))
})

test("marks todo complete", () => {
    render(
        <Todo
            todo={mockIncompleteTodo}
            onCompleted={mockOnCompleted}
            onDelete={mockOnDelete}
        />,
    )

    userEvent.click(screen.getByLabelText("incomplete"))
    expect(mockOnCompleted).toHaveBeenCalledTimes(1)
    expect(mockOnCompleted).toHaveBeenCalledWith(mockIncompleteTodo.id)
})

test("marks todo incomplete", () => {
    render(
        <Todo
            todo={mockCompleteTodo}
            onCompleted={mockOnCompleted}
            onDelete={mockOnDelete}
        />,
    )

    userEvent.click(screen.getByLabelText("complete"))
    expect(mockOnCompleted).toHaveBeenCalledTimes(1)
    expect(mockOnCompleted).toHaveBeenCalledWith(mockCompleteTodo.id)
})

test("deletes todo", () => {
    render(
        <Todo
            todo={mockCompleteTodo}
            onCompleted={mockOnCompleted}
            onDelete={mockOnDelete}
        />,
    )

    userEvent.click(screen.getByLabelText("delete"))
    expect(mockOnDelete).toHaveBeenCalledTimes(1)
    expect(mockOnDelete).toHaveBeenCalledWith(mockCompleteTodo.id)
})
