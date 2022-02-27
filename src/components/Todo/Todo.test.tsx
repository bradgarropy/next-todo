import {render, screen} from "@testing-library/react"
import Todo from "components/Todo"
import {mockTodo} from "test-utils/mocks"

const mockOnCompleted = jest.fn()
const mockOnDelete = jest.fn()

test("renders", () => {
    render(
        <Todo
            todo={mockTodo}
            onCompleted={mockOnCompleted}
            onDelete={mockOnDelete}
        />,
    )

    expect(screen.getByText(mockTodo.name))
})
