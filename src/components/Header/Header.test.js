import Header from "components/Header"
import {render, screen} from "test-utils/render"

test("shows header", () => {
    render(<Header />)
    expect(screen.getByText("Home"))
    expect(screen.getByText("About"))
})
