import Navigation from "components/Navigation"
import {useAuth} from "hooks"
import {generateAuthCtx} from "test-utils/generators"
import {render, screen} from "test-utils/render"

jest.mock("hooks")

const mockLoggedInAuthCtx = generateAuthCtx({
    user: {email: "test@gmail.com"},
})

const mockLoggedOutAuthCtx = generateAuthCtx({user: undefined})

test("shows authenticated navigation", () => {
    useAuth.mockReturnValue(mockLoggedInAuthCtx)

    render(<Navigation />)
    expect(screen.getByText("Home"))
    expect(screen.getByText("Logout"))
})

test("shows unauthenticated navigation", () => {
    useAuth.mockReturnValue(mockLoggedOutAuthCtx)

    render(<Navigation />)
    expect(screen.getByText("Home"))
    expect(screen.getByText("Sign Up"))
    expect(screen.getByText("Login"))
})
