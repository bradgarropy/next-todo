import {useAuth} from "hooks"
import Link from "next/link"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
`

const AuthButtons = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 2rem;
`

const NavigationLink = styled.a`
    color: ${({theme}) => theme.colors.gray};
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.colors.offBlack};
    }
`

const Navigation = () => {
    const authCtx = useAuth()

    return (
        <NavigationWrapper>
            <Link href="/">
                <NavigationLink>Home</NavigationLink>
            </Link>

            <AuthButtons>
                {authCtx.user ? (
                    <NavigationLink onClick={authCtx.logout}>
                        Logout
                    </NavigationLink>
                ) : (
                    <>
                        <Link href="/signup">
                            <NavigationLink>Sign Up</NavigationLink>
                        </Link>

                        <Link href="/login">
                            <NavigationLink>Login</NavigationLink>
                        </Link>
                    </>
                )}
            </AuthButtons>
        </NavigationWrapper>
    )
}

export default Navigation
