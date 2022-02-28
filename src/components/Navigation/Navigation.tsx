import Link from "@bradgarropy/next-link"
import {useRouter} from "next/router"
import {FC} from "react"
import {supabase} from "utils/supabase"

import styles from "./Navigation.module.css"

const Navigation: FC = () => {
    const router = useRouter()

    const handleLogout = () => {
        supabase.auth.signOut()
        router.push("/login")
    }

    return (
        <nav className={styles.navigation}>
            <Link to="/" className={styles.link}>
                Home
            </Link>

            {!supabase.auth.user() && (
                <>
                    <Link to="/signup" className={styles.link}>
                        signup
                    </Link>

                    <Link to="/login" className={styles.link}>
                        login
                    </Link>
                </>
            )}

            {supabase.auth.user() && (
                <button onClick={handleLogout}>logout</button>
            )}
        </nav>
    )
}

export default Navigation
