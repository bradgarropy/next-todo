import Navigation from "components/Navigation"
import {render, screen} from "test-utils/render"

test("shows navigation", () => {
    render(<Navigation />)
    expect(screen.getByText("Home"))
    expect(screen.getByText("About"))
})
