import {AuthContext} from "context/auth"
import {useContext} from "react"

const useAuth = () => {
    const authCtx = useContext(AuthContext)
    return authCtx
}

export default useAuth
