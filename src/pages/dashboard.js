import Facebook from "components/Facebook"
import Layout from "components/Layout"
import Meta from "components/Meta"
import Twitter from "components/Twitter"

const indexPage = () => (
    <Layout>
        <Meta title="dashboard" />
        <Facebook />
        <Twitter />

        <p>dashboard</p>
    </Layout>
)

export default indexPage
