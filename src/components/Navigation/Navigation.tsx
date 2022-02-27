import Link from "@bradgarropy/next-link"
import {FC} from "react"

import styles from "./Navigation.module.css"

const Navigation: FC = () => {
    return (
        <nav className={styles.navigation}>
            <Link to="/" className={styles.link}>
                Home
            </Link>

            <Link to="/signup" className={styles.link}>
                signup
            </Link>

            <Link to="/login" className={styles.link}>
                login
            </Link>
        </nav>
    )
}

export default Navigation
