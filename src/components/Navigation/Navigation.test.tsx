import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Navigation from "components/Navigation"
import {mockUser} from "test-utils/mocks"
import {supabase} from "utils/supabase"

jest.mock("utils/supabase", () => {
    return {
        supabase: {
            auth: {
                user: jest.fn(),
                signOut: jest.fn(),
            },
        },
    }
})

const mockAuthUser = jest.mocked(supabase.auth.user)
const mockAuthSignOut = jest.mocked(supabase.auth.signOut)

test("shows unauthenticated navigation", () => {
    mockAuthUser.mockReturnValue(null)

    render(<Navigation />)

    expect(screen.getByText("home"))
    expect(screen.getByText("signup"))
    expect(screen.getByText("login"))
})

test("shows authenticated navigation", () => {
    mockAuthUser.mockReturnValue(mockUser)

    render(<Navigation />)

    expect(screen.getByText("home"))
    expect(screen.getByText("todos"))
    expect(screen.getByText("logout"))
})

test("logs out", () => {
    mockAuthUser.mockReturnValue(mockUser)

    render(<Navigation />)

    userEvent.click(screen.getByText("logout"))
    expect(mockAuthSignOut).toHaveBeenCalledTimes(1)
})
