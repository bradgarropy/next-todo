import Facebook from "components/Facebook"
import Layout from "components/Layout"
import Meta from "components/Meta"
import Twitter from "components/Twitter"
import {useAuth} from "hooks"
import {useRouter} from "next/router"
import {useState} from "react"
import styled from "styled-components"

const FormWrapper = styled.form`
    input {
        display: block;
        margin-block-end: 0.5rem;

        &:last-of-type {
            margin-block-end: 1rem;
        }
    }

    button {
        width: 100%;
    }
`

const SignUpPage = () => {
    const authCtx = useAuth()
    const router = useRouter()
    const [credentials, setCredentials] = useState({email: "", password: ""})

    const onChange = event => {
        setCredentials(credentials => {
            return {
                ...credentials,
                [event.target.name]: event.target.value,
            }
        })
    }

    const onSubmit = async event => {
        event.preventDefault()
        authCtx.signup(credentials.email, credentials.password)
        router.push("/")
    }

    return (
        <Layout>
            <Meta title="sign up" />
            <Facebook />
            <Twitter />

            <h1>sign up</h1>

            <FormWrapper onSubmit={onSubmit}>
                <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={onChange}
                />

                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={onChange}
                />

                <button>sign up</button>
            </FormWrapper>
        </Layout>
    )
}

export default SignUpPage
