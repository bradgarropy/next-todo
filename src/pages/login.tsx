import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import {useRouter} from "next/router"
import {FC, FormEventHandler, useState} from "react"
import {supabase} from "utils/supabase"

type LoginPageProps = unknown

const LoginPage: FC<LoginPageProps> = () => {
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()

        await supabase.auth.signIn({
            email,
            password,
        })

        router.push("/todos")
    }

    return (
        <Layout>
            <SEO title="next starter" />

            <h1>login</h1>

            <form onSubmit={handleSignup}>
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
