import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        color: ${({theme}) => theme.colors.offBlack};
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    }
`

export default GlobalStyles
