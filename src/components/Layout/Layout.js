import Footer from "components/Footer"
import Header from "components/Header"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import Container from "styles/Container"
import GlobalStyles from "styles/GlobalStyles"
import theme from "styles/theme"

const LayoutWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />

                <LayoutWrapper>
                    <Header />
                    <Container>{children}</Container>
                    <Footer />
                </LayoutWrapper>
            </>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
