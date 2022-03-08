import {render, screen} from "@testing-library/react"
import Header from "components/Header"
import {mockUser} from "test-utils/mocks"
import {supabase} from "utils/supabase"

jest.mock("utils/supabase", () => {
    return {
        supabase: {
            auth: {
                user: jest.fn(),
            },
        },
    }
})

const mockAuthUser = jest.mocked(supabase.auth.user)

test("shows unauthenticated header", () => {
    mockAuthUser.mockReturnValue(null)

    render(<Header />)

    expect(screen.getByText("home"))
    expect(screen.getByText("signup"))
    expect(screen.getByText("login"))
})

test("shows authenticated header", () => {
    mockAuthUser.mockReturnValue(mockUser)

    render(<Header />)

    expect(screen.getByText("home"))
    expect(screen.getByText("todos"))
    expect(screen.getByText("logout"))
})
