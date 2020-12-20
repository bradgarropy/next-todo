import Navigation from "components/Navigation"
import styled from "styled-components"
import Container from "styles/Container"

const HeaderWrapper = styled.header`
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
    padding: 20px 30px;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <Navigation />
            </Container>
        </HeaderWrapper>
    )
}

export default Header
