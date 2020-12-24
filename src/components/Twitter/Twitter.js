import Head from "next/head"
import PropTypes from "prop-types"

const Twitter = ({
    card = "summary",
    site = "@bradgarropy",
    title = "next todo",
    description = "✅ next.js todo",
    image = "https://next-todo.bradgarropy.vercel.app/twitter.png",
}) => {
    return (
        <Head>
            <meta name="twitter:card" content={card} />
            <meta name="twitter:site" content={site} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Head>
    )
}

Twitter.propTypes = {
    card: PropTypes.string,
    site: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

export default Twitter
