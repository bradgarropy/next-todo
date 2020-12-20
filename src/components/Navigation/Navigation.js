import Link from "next/link"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
`

const NavigationLink = styled.a`
    color: ${({theme}) => theme.colors.gray};
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.colors.offBlack};
    }
`

const Navigation = () => {
    return (
        <NavigationWrapper>
            <Link href="/">
                <NavigationLink>Home</NavigationLink>
            </Link>

            <Link href="/about">
                <NavigationLink>About</NavigationLink>
            </Link>
        </NavigationWrapper>
    )
}

export default Navigation
