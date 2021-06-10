import "../../styles/index.css"
import React from "react";
import Header from "../../components/header/header";
import AdminHome from "../../components/adminHome/adminHome";
import {isLoggedIn} from "../../utils/auth";
import {navigate} from "gatsby";
import {css} from "@emotion/react";


const admin_msg_style = css`
  font-weight: normal;`

const connect_click_style = css`
  color: #3f8bff;
  text-decoration: underline;`


export default function Admin() {
    if (isLoggedIn()) {
        return (
            <div id="admin">
                <title>Admin</title>
                <Header admin="yes" headerOpacity={1} boxShadowOpacity={.25} arbo="Edition"/>
                <AdminHome/>
            </div>
        )
    } else {
        return (
            <div>
                <p css={admin_msg_style}> L'accès à cette section est réservée aux adminsitrateurs. Veuillez vous <a
                    css={connect_click_style} href="/" onClick={event => {
                    event.preventDefault()
                    navigate(`/login`)
                }}
                >
                    connecter
                </a> pour y avoir accès. Si vous n'avez pas d'accès administrateur, veuillez <a
                    css={connect_click_style} href="/" onClick={event => {
                    event.preventDefault()
                    navigate(`/`)
                }}
                >
                    retourner à la page d'accueil
                </a>.</p>
            </div>


        )
    }
}
