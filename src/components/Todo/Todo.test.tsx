import {render, screen} from "@testing-library/react"
import Todo from "components/Todo"

test("renders", () => {
    render(<Todo />)
    expect(screen.getByText("Todo"))
})
