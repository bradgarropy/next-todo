import {FC, FormEventHandler, useState} from "react"

import AuthFormStyles from "./AuthForm.module.css"

type AuthFormProps = {
    type: "login" | "signup"
    onSubmit: (email: string, password: string) => Promise<void>
}

const AuthForm: FC<AuthFormProps> = ({type, onSubmit}) => {
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
                autoComplete="email"
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
                autoComplete={
                    type === "login" ? "current-password" : "new-password"
                }
                className={AuthFormStyles.input}
                onChange={event => setPassword(event.target.value)}
            />

            <button className={AuthFormStyles.submit} type="submit">
                {type}
            </button>
        </form>
    )
}

export default AuthForm
