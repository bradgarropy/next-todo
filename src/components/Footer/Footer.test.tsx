import {render, screen} from "@testing-library/react"
import Footer from "components/Footer"

test("shows footer", () => {
    render(<Footer />)
    expect(screen.getByText("Footer"))
})
