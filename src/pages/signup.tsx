import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import {FC, FormEventHandler, useState} from "react"
import {supabase} from "utils/supabase"

type SignupPageProps = unknown

const SignupPage: FC<SignupPageProps> = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignup: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()

        await supabase.auth.signUp({
            email,
            password,
        })
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
                <button type="submit">signup</button>
            </form>
        </Layout>
    )
}

export default SignupPage
