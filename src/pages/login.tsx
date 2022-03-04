import SEO from "@bradgarropy/next-seo"
import {useUser} from "@supabase/supabase-auth-helpers/react"
import Layout from "components/Layout"
import {useRouter} from "next/router"
import {FC, FormEventHandler, useEffect, useState} from "react"
import {supabase} from "utils/supabase"

type LoginPageProps = unknown

const LoginPage: FC<LoginPageProps> = () => {
    const {user} = useUser()
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignin: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()

        await supabase.auth.signIn({
            email,
            password,
        })
    }

    useEffect(() => {
        if (user) {
            router.push("/todos")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <Layout>
            <SEO title="next starter" />

            <h1>login</h1>

            <form onSubmit={handleSignin}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button type="submit">login</button>
            </form>
        </Layout>
    )
}

export default LoginPage
