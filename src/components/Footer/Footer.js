import styled from "styled-components"
import Container from "styles/Container"

const FooterWrapper = styled.footer`
    background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);
    color: ${({theme}) => theme.colors.offWhite};
    text-align: center;
    padding: 20px 30px;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <p>Footer</p>
            </Container>
        </FooterWrapper>
    )
}

export default Footer
