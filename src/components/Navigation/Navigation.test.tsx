import {render, screen} from "@testing-library/react"
import Navigation from "components/Navigation"

test("shows navigation", () => {
    render(<Navigation />)
    expect(screen.getByText("Home"))
})
