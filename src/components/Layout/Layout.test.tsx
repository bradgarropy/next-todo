import {render, screen} from "@testing-library/react"
import Layout from "components/Layout"

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
