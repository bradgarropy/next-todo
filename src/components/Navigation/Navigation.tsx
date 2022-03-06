import Link from "@bradgarropy/next-link"
import {useUser} from "@supabase/supabase-auth-helpers/react"
import {FC} from "react"

import styles from "./Navigation.module.css"

const Navigation: FC = () => {
    const {user} = useUser()

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

                    <Link to="/api/auth/logout" className={styles.link}>
                        logout
                    </Link>
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
