import Header from "components/Header"
import {useAuth} from "hooks"
import {generateAuthCtx} from "test-utils/generators"
import {render, screen} from "test-utils/render"

jest.mock("hooks")

const mockAuthCtx = generateAuthCtx()

test("shows header", () => {
    useAuth.mockReturnValue(mockAuthCtx)

    render(<Header />)
    expect(screen.getByText("Home"))
    expect(screen.getByText("Logout"))
})
