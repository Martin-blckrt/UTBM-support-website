import React from "react"
import { useStaticQuery, graphql, Link} from "gatsby"
import {css} from "@emotion/react";

import ConnectButton from "./connectButton";

const headingBackground = css`
  background-color: white;
  box-shadow: 0 0 20px rgba(0,0,0,.25);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export default function Header() {
    const data = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    )

    return (
        <div css={headingBackground}>
            <Link to={"/"}>
                {data.site.siteMetadata.title}
            </Link>
            <ConnectButton/>
        </div>
    )
}

