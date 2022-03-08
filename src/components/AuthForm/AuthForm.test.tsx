import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import AuthForm from "components/AuthForm"

const mockOnSubmit = jest.fn()

test("shows labels", () => {
    render(<AuthForm text="submit" onSubmit={mockOnSubmit} />)
    expect(screen.getByText("email"))
    expect(screen.getByText("password"))
})

test("shows submit button", () => {
    render(<AuthForm text="submit" onSubmit={mockOnSubmit} />)
    expect(screen.getByText("submit"))
})

test("accepts email and password input", () => {
    render(<AuthForm text="submit" onSubmit={mockOnSubmit} />)

    userEvent.type(screen.getByLabelText("email"), "me@gmail.com")
    userEvent.type(screen.getByLabelText("password"), "secret")

    expect(screen.getByLabelText("email")).toHaveValue("me@gmail.com")
    expect(screen.getByLabelText("password")).toHaveValue("secret")
})

test("submits the authentication form", () => {
    render(<AuthForm text="submit" onSubmit={mockOnSubmit} />)

    userEvent.type(screen.getByLabelText("email"), "me@gmail.com")
    userEvent.type(screen.getByLabelText("password"), "secret")
    userEvent.click(screen.getByText("submit"))

    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
    expect(mockOnSubmit).toHaveBeenCalledWith("me@gmail.com", "secret")
})
