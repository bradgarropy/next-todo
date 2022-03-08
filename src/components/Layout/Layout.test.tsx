import {render, screen} from "@testing-library/react"
import Layout from "components/Layout"
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

test("shows layout", () => {
    mockAuthUser.mockReturnValue(null)

    render(
        <Layout>
            <p>testing</p>
        </Layout>,
    )

    expect(screen.getByText("home"))
    expect(screen.getByText("signup"))
    expect(screen.getByText("login"))
    expect(screen.getByText("testing"))
})
