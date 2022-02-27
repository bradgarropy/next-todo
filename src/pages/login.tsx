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

        router.push("/")
    }

    return (
        <Layout>
            <SEO title="next starter" />

            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <input
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
