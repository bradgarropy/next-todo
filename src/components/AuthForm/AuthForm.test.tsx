import {render, screen} from "@testing-library/react"
import AuthForm from "components/AuthForm"

test("renders", () => {
    render(<AuthForm />)
    expect(screen.getByText("Login"))
})
