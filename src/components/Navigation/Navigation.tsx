import Link from "@bradgarropy/next-link"
import {useRouter} from "next/router"
import {FC} from "react"
import {supabase} from "utils/supabase"

import styles from "./Navigation.module.css"

const Navigation: FC = () => {
    const user = supabase.auth.user()
    const router = useRouter()

    const handleLogout = async () => {
        await supabase.auth.signOut()
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
