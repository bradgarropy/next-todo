import PropTypes from "prop-types"
import {createContext, useState} from "react"
import firebase from "utils/firebase"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})

    firebase.auth().onAuthStateChanged(user => {
        console.log("onAuthStateChanged")
        console.log(user?.email)
        setUser(user)
    })

    const signup = (email, password) => {
        console.log("signup")
        firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        console.log("login")
        firebase.auth().signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        console.log("logout")
        firebase.auth().signOut()
    }

    const context = {
        user,
        signup,
        login,
        logout,
    }

    return (
        <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export {AuthContext, AuthProvider}
