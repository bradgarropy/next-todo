import Link from "@bradgarropy/next-link"
import {useRouter} from "next/router"
import {FC} from "react"
import {supabase} from "utils/supabase"

import NavigationStyles from "./Navigation.module.css"

const Navigation: FC = () => {
    const user = supabase.auth.user()
    const router = useRouter()

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push("/")
    }

    return (
        <nav className={NavigationStyles.navigation}>
            <Link to="/" className={NavigationStyles.link}>
                home
            </Link>

            {user ? (
                <>
                    <Link to="/todos" className={NavigationStyles.link}>
                        todos
                    </Link>

                    <button
                        className={NavigationStyles.logout}
                        onClick={handleLogout}
                    >
                        logout
                    </button>
                </>
            ) : (
                <>
                    <Link to="/signup" className={NavigationStyles.link}>
                        signup
                    </Link>

                    <Link to="/login" className={NavigationStyles.link}>
                        login
                    </Link>
                </>
            )}
        </nav>
    )
}

export default Navigation
