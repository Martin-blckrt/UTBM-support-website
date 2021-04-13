import React from "react"
import {Link} from "gatsby"
import {css} from "@emotion/react";
import logo from '../assets/UTBM.png';
import ConnectButton from "./connectButton";

const headingBackground = function (headerOpacity,boxShadowOpacity) {
    return css`
      box-shadow: 0 0 20px rgba(0, 0, 0, ${boxShadowOpacity} );
      padding: 30px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgba(255, 255, 255, ${headerOpacity});
    `
}


export default function Header(props) {

    return (
        <div css={headingBackground(props.headerOpacity, props.boxShadowOpacity)}>
            <Link to={"/"}>
                <img src={logo} alt="UTBM logo" width="95" height="107"/>
            </Link>
            <ConnectButton/>
        </div>
    )
}

