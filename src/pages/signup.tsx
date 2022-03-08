import SEO from "@bradgarropy/next-seo"
import {User} from "@supabase/supabase-js"
import AuthForm from "components/AuthForm"
import Layout from "components/Layout"
import {FC, useState} from "react"
import {supabase} from "utils/supabase"

const SignupPage: FC = () => {
    const [user, setUser] = useState<User>(null)

    const handleSignup = async (email: string, password: string) => {
        const {user} = await supabase.auth.signUp({
            email,
            password,
        })

        setUser(user)
    }

    return (
        <Layout>
            <SEO title="next todo" />

            <h1>signup</h1>

            {user ? (
                <p>{`Go check your email, ${user.email}.`}</p>
            ) : (
                <AuthForm type="signup" onSubmit={handleSignup} />
            )}
        </Layout>
    )
}

export default SignupPage
