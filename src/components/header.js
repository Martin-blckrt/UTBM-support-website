import React from "react"
import {css} from "@emotion/react";
import {Link} from "gatsby";
import ConnectButton from "./connectButton";

const headingBackground = css`
  background-color: white;
  box-shadow: 0 0 20px rgba(0,0,0,.25);
  width: 100vw;
  position: fixed;
  height: 100px;
`


export default function Header(props) {
    return (
        <div css={headingBackground}>
            <Link to={"/"}>
                UTBM
            </Link>
            <ConnectButton/>
        </div>
    )
}