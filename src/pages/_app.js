import {AuthProvider} from "context/auth"
import {TodoProvider} from "context/todo"
import PropTypes from "prop-types"

const App = ({Component, pageProps}) => {
    return (
        <AuthProvider>
            <TodoProvider>
                <Component {...pageProps} />
            </TodoProvider>
        </AuthProvider>
    )
}

App.propTypes = {
    Component: PropTypes.func,
    pageProps: PropTypes.object,
}

export default App
