import React from "react"
import {css} from "@emotion/react";
import {Link, navigate} from "gatsby";
import {logout} from "../utils/auth";

const rectangleButtonStyle = css`
  background-color: #3F8BFF;
  border: 0;
  min-width: 100px;
  padding: 15px;
  margin: 5px;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  box-shadow: 0 0 15px rgba(63, 139, 255, 0.5);
  transition: box-shadow 300ms;

  &:hover {
    box-shadow: 0 0 30px rgba(63, 139, 255, 0.7);
  }
`

export function ConnectButton(props) {
    return (

        <button css={rectangleButtonStyle}>
            <Link to={`/privileged/admin/`} style={{color: 'white'}}>
                {props.buttonText}
            </Link>
        </button>

    )
}

export function CreateButton(props) {

    if (props.type === "category") {
        return (

            <button type="submit" css={rectangleButtonStyle}>
                {props.buttonText}
            </button>

        )
    } else {
        return (

            <button type='submit' css={rectangleButtonStyle}>
                <Link style={{color: 'white'}} to={`/privileged/edition/`}>
                    {props.buttonText}
                </Link>
            </button>

        )
    }
}

export function ModifyButton(props) {

    if (props.type === "category") {
        return (

            <button css={rectangleButtonStyle}>
                {props.buttonText}
            </button>

        )
    } else {
        return (
            <button css={rectangleButtonStyle}>
                <Link to={`/privileged/edition/`}
                      state={{articleExistingInfo: props.articleExistingInfo}}
                      style={{color: 'white'}}>
                    {props.buttonText}
                </Link>
            </button>
        )
    }
}

export function DeleteButton() {
    return (
        <button type='submit'
                css={rectangleButtonStyle}>
            Supprimer
        </button>
    )
}

export function DisconnectButton(props) {
    return (

        <button css={rectangleButtonStyle}>
            <a
                href="/"
                style={{color: 'white'}}
                onClick={event => {
                    event.preventDefault()
                    logout(() => navigate(`/`))
                }}
            >
                {props.buttonText}
            </a>
        </button>

    )
}
