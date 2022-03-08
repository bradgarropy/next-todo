import TodoForm from "components/TodoForm"
import {render, screen} from "@testing-library/react"

test("renders", () => {
    render(<TodoForm />)
    expect(screen.getByText("TodoForm"))
})
