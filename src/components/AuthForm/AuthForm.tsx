import {FC, FormEventHandler, useState} from "react"

import AuthFormStyles from "./AuthForm.module.css"

type AuthFormProps = {
    text: string
    onSubmit: (email: string, password: string) => void
}

const AuthForm: FC<AuthFormProps> = ({text, onSubmit}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()
        onSubmit(email, password)
    }

    return (
        <form className={AuthFormStyles.form} onSubmit={handleSubmit}>
            <label className={AuthFormStyles.label} htmlFor="email">
                email
            </label>

            <input
                id="email"
                type="email"
                value={email}
                className={AuthFormStyles.input}
                onChange={event => setEmail(event.target.value)}
            />

            <label className={AuthFormStyles.label} htmlFor="password">
                password
            </label>

            <input
                id="password"
                type="password"
                value={password}
                className={AuthFormStyles.input}
                onChange={event => setPassword(event.target.value)}
            />

            <button className={AuthFormStyles.submit} type="submit">
                {text}
            </button>
        </form>
    )
}

export default AuthForm
