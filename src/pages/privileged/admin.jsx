import "../../styles/index.css"
import React from "react";
import Header from "../../components/header";
import {css} from "@emotion/react";
import AdminHome from "../../components/adminHome";
import {getUser, isLoggedIn, logout} from "../../services/auth";
import {Link} from "@material-ui/core";
import {navigate} from "gatsby";

export default function Admin() {
    if (isLoggedIn())
    {
        return (
            <div id="admin">
                <title>Admin</title>
                <Header admin="yes" headerOpacity={1} boxShadowOpacity={.25}/>
                <AdminHome/>
            </div>
        )
    }
    else {
        return (
            <div>
                <p> L'accès à cette section est réservée aux adminsitrateurs. Veuillez vous <a href="/" onClick={event => {event.preventDefault()
                    navigate(`/login`)
                }}
                >
                    connecter
                </a> pour y avoir accès. </p>
            </div>


        )
    }
}
