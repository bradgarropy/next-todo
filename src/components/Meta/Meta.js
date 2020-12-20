import Head from "next/head"
import PropTypes from "prop-types"

import config from "../../../package.json"

const Meta = ({title}) => {
    const {description, keywords} = config

    return (
        <Head>
            <html lang="en" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

Meta.propTypes = {
    title: PropTypes.string,
}

export default Meta
