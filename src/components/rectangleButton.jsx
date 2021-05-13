import React from "react"
import {css} from "@emotion/react";
import {Link, navigate} from "gatsby";
import {logout} from "../services/auth";

const rectangleButtonStyle = css`
  background-color: #3F8BFF;
  border: 0;
  padding: 15px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 0 15px rgba(63, 139, 255, 0.5);
  transition: box-shadow 200ms;

  &:hover {
    box-shadow: 0 0 30px rgba(63, 139, 255, 0.5);
  }
`
const textButtonStyle = css`
  color: white;
  text-decoration: none;
  font-weight: bold;
`

export default function ConnectButton(props) {
    return (
        <div>
            <button css={rectangleButtonStyle}>
                <Link css={textButtonStyle} to={`/privileged/admin/`}>
                    {props.buttonText}
                </Link>
            </button>
        </div>
    )
}

export function CreateButton(props) {

    if (props.type === "category")
    {
        return (
            <div>
                <button css={rectangleButtonStyle}>

                </button>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <button css={rectangleButtonStyle}>
                    <Link css={textButtonStyle} to={`/privileged/edition/`}>
                        {props.buttonText}
                    </Link>
                </button>
            </div>
        )
    }
}

export function ModifyButton(props) {

    if (props.type === "category")
    {
        return (
            <div>
                <button css={rectangleButtonStyle}>

                </button>
            </div>
        )
    }
    else
    {
        return (
            <div>
                <button css={rectangleButtonStyle}>
                    <Link css={textButtonStyle} to={`/privileged/edition/`}>
                        {props.buttonText}
                    </Link>
                </button>
            </div>
        )
    }

}

export function DeleteButton(props) {
    return (
        <div>
            <button css={rectangleButtonStyle}>

            </button>
        </div>
    )
}

export function DisconnectButton(props) {
    return (
        <div>
            <button css={rectangleButtonStyle}>
                <a
                    css={textButtonStyle}
                    href="/"
                    onClick={event => {
                        event.preventDefault()
                        logout(() => navigate(`/`))
                    }}
                >
                    {props.buttonText}
                </a>
            </button>
        </div>
    )
}
