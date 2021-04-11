import React from "react";
import { css } from "@emotion/react"
import { Link } from "gatsby"

const paragraphStyle =  css`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

export default function Cards(props){
    return(
    <div css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: 30px;
        background-color: blue;
        &hover{
          background: white;
        }
      `}>
        <h2>{props.title}</h2>
        <p css={paragraphStyle}>{props.description}</p>
        <Link to={`/`}>Home</Link>

    </div>


    )
}