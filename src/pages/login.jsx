import React from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../utils/auth"
import Header from "../components/header";
import {css} from "@emotion/react";
import * as loginStyle from '../components/login/login.module.css'

const connexion_style = css `
  margin-left: 20px;`

const label_style = css `
  
  `

const input_style = css `
  `

const big_div_style = css `
  background: #e4efff;
  border-radius: 30px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  margin: 30px auto 10px auto;
  padding: 0px 10px 10px 20px;
  max-width: 1200px;
  min-height: 200px;
}
  `


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
                <h1 css={connexion_style}>Connexion</h1>
                <div css={big_div_style}>
                    <form
                        method="post"
                        onSubmit={event => {
                            this.handleSubmit(event)
                            navigate(`/privileged/admin`)
                        }}
                    >
                        <label css={label_style}>
                            Utilisateur
                            <input css={input_style} type="text" name="username" onChange={this.handleUpdate} />
                        </label>
                        <label>
                            Mot de passe
                            <input type="password" name="password" onChange={this.handleUpdate} />
                        </label>
                        <input type="submit" value="Log In" />
                    </form>
                </div>
            </>
        )
    }
}

export default Login
