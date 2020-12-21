import {AuthProvider} from "context/auth"
import PropTypes from "prop-types"

const App = ({Component, pageProps}) => {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    )
}

App.propTypes = {
    Component: PropTypes.node,
    pageProps: PropTypes.object,
}

export default App
