import "../../styles/index.css"
import React from "react";
import Header from "../../components/header";
import AdminHome from "../../components/adminHome/adminHome";
import {isLoggedIn} from "../../services/auth";
import {navigate} from "gatsby";

export default function Admin() {
    if (isLoggedIn()) {
        return (
            <div id="admin">
                <title>Admin</title>
                <Header admin="yes" headerOpacity={1} boxShadowOpacity={.25}/>
                <AdminHome/>
            </div>
        )
    } else {
        return (
            <div>
                <p> L'accès à cette section est réservée aux adminsitrateurs. Veuillez vous <a href="/"
                                                                                               onClick={event => {
                                                                                                   event.preventDefault()
                                                                                                   navigate(`/login`)
                                                                                               }}
                >
                    connecter
                </a> pour y avoir accès. </p>
            </div>


        )
    }
}
