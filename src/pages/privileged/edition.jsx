import "../../styles/index.css"
import React from "react";
import Header from "../../components/header";
import "../../styles/index.css"
import {isLoggedIn} from "../../services/auth";
import {navigate} from "gatsby";
import {css} from "@emotion/react";
import EditionHome from "../../components/editionHome/editionHome";

export default function Admin(props) {
    if (isLoggedIn()) {
        console.log("im logged in")
        return (
            <div id="edition">
                <title>Edition</title>
                <Header admin="yes" headerOpacity={1} boxShadowOpacity={.25}/>
                <EditionHome/>
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
