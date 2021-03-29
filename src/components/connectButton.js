import React from "react"
import {css} from "@emotion/react";

const connectButton = css`
  background-color: #3F8BFF;
  border : 0;
  padding: 10px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 0 15px rgba(63, 139, 255, 0.5);
  transition: box-shadow 200ms;  
  &:hover{
    box-shadow: 0 0 30px rgba(63, 139, 255, 0.5);
  }
`

export default function ConnectButton(){
    return(
        <div>
                <button css={connectButton}>
                    Connexion
                </button>
        </div>
    )
}