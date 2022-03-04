import SEO from "@bradgarropy/next-seo"
import {useUser} from "@supabase/supabase-auth-helpers/react"
import Layout from "components/Layout"
import {FC} from "react"

type IndexPageProps = null

const IndexPage: FC<IndexPageProps> = () => {
    const {user} = useUser()

    return (
        <Layout>
            <SEO title="next starter" />

            <h1>home</h1>
            <pre>{user?.email}</pre>
        </Layout>
    )
}

export default IndexPage
