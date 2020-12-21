import Layout from "components/Layout"
import {useAuth} from "hooks"
import {generateAuthCtx} from "test-utils/generators"
import {render, screen} from "test-utils/render"

jest.mock("hooks")

const mockAuthCtx = generateAuthCtx()

test("shows layout", () => {
    useAuth.mockReturnValue(mockAuthCtx)

    render(
        <Layout>
            <p>Testing</p>
        </Layout>,
    )

    expect(screen.getByText("Home"))
    expect(screen.getByText("Logout"))
    expect(screen.getByText("Testing"))
    expect(screen.getByText("Footer"))
})
