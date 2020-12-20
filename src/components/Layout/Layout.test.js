import Layout from "components/Layout"
import {render, screen} from "test-utils/render"

test("shows layout", () => {
    render(
        <Layout>
            <p>Testing</p>
        </Layout>,
    )

    expect(screen.getByText("Home"))
    expect(screen.getByText("About"))
    expect(screen.getByText("Testing"))
    expect(screen.getByText("Footer"))
})
