import SEO from "@bradgarropy/next-seo"
import Layout from "components/Layout"
import {FC} from "react"
import {supabase} from "utils/supabase"

const IndexPage: FC = () => {
    const user = supabase.auth.user()

    return (
        <Layout>
            <SEO title="next starter" />

            <h1>home</h1>
            <pre>{user?.email}</pre>
        </Layout>
    )
}

export default IndexPage
