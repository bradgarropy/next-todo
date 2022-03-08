import SEO from "@bradgarropy/next-seo"
import AuthForm from "components/AuthForm"
import Layout from "components/Layout"
import {useRouter} from "next/router"
import {FC} from "react"
import {supabase} from "utils/supabase"

type LoginPageProps = unknown

const LoginPage: FC<LoginPageProps> = () => {
    const router = useRouter()

    const handleLogin = async (email: string, password: string) => {
        await supabase.auth.signIn({
            email,
            password,
        })

        router.push("/todos")
    }

    return (
        <Layout>
            <SEO title="next todo" />

            <h1>login</h1>
            <AuthForm type="login" onSubmit={handleLogin} />
        </Layout>
    )
}

export default LoginPage
