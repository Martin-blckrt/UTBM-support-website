import React from "react"
import {css} from "@emotion/react";

const connectButton = css`
  background-color: #3F8BFF;
  border : 0;
  padding: 10px;
  border-radius: 10px;
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