import React from "react"
import {css} from "@emotion/react";
import {Link} from "gatsby";

const rectangleButtonStyle = css`
  background-color: #3F8BFF;
  border : 0;
  padding: 15px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 0 15px rgba(63, 139, 255, 0.5);
  transition: box-shadow 200ms;  
  &:hover{
    box-shadow: 0 0 30px rgba(63, 139, 255, 0.5);
  }
`
const textButtonStyle = css`
  color: white;
  text-decoration: none;
  font-weight: bold;
`

export default function ConnectButton(props){
    return(
        <div>
                <button css={rectangleButtonStyle}>
                    <Link css={textButtonStyle} to={`/restricted/admin`}>
                        {props.buttonText}
                    </Link>
                </button>
        </div>
    )
}
