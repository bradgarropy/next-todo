import Link from "@bradgarropy/next-link"
import {useUser} from "@supabase/supabase-auth-helpers/react"
import {useRouter} from "next/router"
import {FC} from "react"
import {supabase} from "utils/supabase"

import styles from "./Navigation.module.css"

const Navigation: FC = () => {
    const {user} = useUser()
    const router = useRouter()

    const handleLogout = () => {
        supabase.auth.signOut()
        router.push("/")
    }

    return (
        <nav className={styles.navigation}>
            <Link to="/" className={styles.link}>
                home
            </Link>

            {user ? (
                <>
                    <Link to="/todos" className={styles.link}>
                        todos
                    </Link>

                    <button onClick={handleLogout}>logout</button>
                </>
            ) : (
                <>
                    <Link to="/signup" className={styles.link}>
                        signup
                    </Link>

                    <Link to="/login" className={styles.link}>
                        login
                    </Link>
                </>
            )}
        </nav>
    )
}

export default Navigation
