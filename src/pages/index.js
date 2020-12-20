import Facebook from "components/Facebook"
import Layout from "components/Layout"
import Meta from "components/Meta"
import Twitter from "components/Twitter"

const indexPage = () => (
    <Layout>
        <Meta title="next starter" />
        <Facebook />
        <Twitter />

        <p>home</p>
    </Layout>
)

export default indexPage
