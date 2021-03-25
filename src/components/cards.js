import React from "react";
import { css } from "@emotion/react"
import { Link } from "gatsby"

const color = "white";

export default function Cards(props){
    return(
    <div css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: 30px;
        background-color: blue;
      `}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <Link to={`/`}>Home</Link>

    </div>


    )
}