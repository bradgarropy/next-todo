import "../styles/styles.css"

import SEO from "@bradgarropy/next-seo"
import {UserProvider} from "@supabase/supabase-auth-helpers/react"
import type {AppProps} from "next/app"
import {ReactElement} from "react"
import {supabase} from "utils/supabase"

import pkg from "../../package.json"

const App = ({Component, pageProps}: AppProps): ReactElement => {
    return (
        <>
            <SEO
                title={pkg.name}
                description={pkg.description}
                keywords={pkg.keywords}
                icon="/favicon.ico"
                facebook={{
                    image: "https://next-starter.bradgarropy.vercel.app/facebook.png",
                    url: "https://next-starter.bradgarropy.vercel.app",
                    type: "website",
                }}
                twitter={{
                    image: "https://next-starter.bradgarropy.vercel.app/twitter.png",
                    site: "@bradgarropy",
                    card: "summary",
                }}
            />

            <UserProvider supabaseClient={supabase}>
                <Component {...pageProps} />
            </UserProvider>
        </>
    )
}

export default App
