import SEO from "@bradgarropy/next-seo"
import {User} from "@supabase/supabase-js"
import Layout from "components/Layout"
import {FC, FormEventHandler, useState} from "react"
import {supabase} from "utils/supabase"

type SignupPageProps = unknown

const SignupPage: FC<SignupPageProps> = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState<User>(null)

    const handleSignup: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()

        const {user} = await supabase.auth.signUp({
            email,
            password,
        })

        setUser(user)
    }

    return (
        <Layout>
            <SEO title="next starter" />

            <h1>signup</h1>

            {user ? (
                <p>{`Go check your email, ${user.email}.`}</p>
            ) : (
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
                    <button type="submit">signup</button>
                </form>
            )}
        </Layout>
    )
}

export default SignupPage
