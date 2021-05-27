import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../utils/auth"
import Header from "../components/header";

class Login extends React.Component {
    state = {
        username: ``,
        password: ``,
    }

    handleUpdate = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        handleLogin(this.state)
    }

    render() {
        if (isLoggedIn()) {
            navigate(`/privileged/admin`)
        }

        return (
            <>
                <Header headerOpacity={1} boxShadowOpacity={.25} arbo="Connexion"/>
                <h1>Log in</h1>
                <form
                    method="post"
                    onSubmit={event => {
                        this.handleSubmit(event)
                        navigate(`/privileged/admin`)
                    }}
                >
                    <label>
                        Username
                        <input type="text" name="username" onChange={this.handleUpdate} />
                    </label>
                    <label>
                        Password
                        <input type="password" name="password" onChange={this.handleUpdate} />
                    </label>
                    <input type="submit" value="Log In" />
                </form>
            </>
        )
    }
}

export default Login
