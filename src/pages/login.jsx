import {navigate} from "gatsby"
import React, {useState} from "react";

import {handleLogin, isLoggedIn} from "../utils/auth"
import Header from "../components/header/header";

import * as loginStyle from './login/login.module.css'


export default function Login() {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })


    const handleUpdate = event => {
        setCredentials(prevState => {
            return {...prevState, [event.target.name]: event.target.value}
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleLogin(credentials)
    }


    if (isLoggedIn()) {
        navigate(`/privileged/admin`)
    } else {
        return (
            <>
                <Header headerOpacity={1} boxShadowOpacity={.25} arbo="Connexion"/>
                <h1 className={loginStyle.titleStyle}>Connexion</h1>
                <div className={loginStyle.formContainer}>
                    <form
                        method="post"
                        onSubmit={event => {
                            handleSubmit(event)
                            navigate(`/privileged/admin`)
                        }}
                    >
                        <label className={loginStyle.labels}>Utilisateur</label>
                        <input className={loginStyle.inputs} type="text" name="username" onChange={handleUpdate}/>
                        <label className={loginStyle.labels}>Mot de passe</label>
                        <input className={loginStyle.inputs} type="password" name="password" onChange={handleUpdate}/>

                        <input type="submit" value="Log In"/>
                    </form>
                </div>
            </>
        )
    }
}

