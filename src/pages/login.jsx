import React from "react"
import {navigate} from "gatsby"

import {handleLogin, isLoggedIn} from "../utils/auth"
import Header from "../components/header/header";

import * as loginStyle from '../components/login/login.module.css'


export default class Login extends React.Component {
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
                <h1 className={loginStyle.titleStyle}>Connexion</h1>
                <div className={loginStyle.formContainer}>
                    <form
                        method="post"
                        onSubmit={event => {
                            this.handleSubmit(event)
                            navigate(`/privileged/admin`)
                        }}
                    >
                        <label className={loginStyle.labels}>Utilisateur</label>
                        <input className={loginStyle.inputs} type="text" name="username" onChange={this.handleUpdate}/>
                        <label className={loginStyle.labels}>Mot de passe</label>
                        <input className={loginStyle.inputs} type="password" name="password" onChange={this.handleUpdate}/>

                        <input type="submit" value="Log In"/>
                    </form>
                </div>
            </>
        )
    }
}

