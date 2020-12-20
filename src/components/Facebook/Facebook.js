import Head from "next/head"
import PropTypes from "prop-types"

const Facebook = ({
    url = "https://next-starter.bradgarropy.vercel.app",
    type = "website",
    title = "next starter",
    description = "⏭ next.js starter",
    image = "https://next-starter.bradgarropy.vercel.app/facebook.png",
}) => {
    return (
        <Head>
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    )
}

Facebook.propTypes = {
    url: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default Facebook
