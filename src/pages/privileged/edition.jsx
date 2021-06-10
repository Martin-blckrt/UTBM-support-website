import React from "react";
import {navigate} from "gatsby";

//import utils
import {isLoggedIn} from "../../utils/auth";

//Import Components
import Header from "../../components/header/header";
import ArticleCreatorLab from "../../components/ArticleLab/articleCreatorLab";
import ArticleModifierLab from "../../components/ArticleLab/articleModifierLab";

//import STYLE
import "../../styles/index.css"

export default function Edition(props) {
    if (isLoggedIn()) {
        if (typeof (props.location.state.articleExistingInfo) == 'undefined') {
            console.log('on est dans l\'article creator : ', props.location.state.articleExistingInfo)
            return (
                <div id="edition">
                    <title>Création d'un article</title>
                    <Header admin="yes" headerOpacity={1} boxShadowOpacity={.25} arbo="Création"/>
                    <ArticleCreatorLab/>
                </div>
            )
        } else {
            return (
                <div id="edition">
                    <title>Modification d'un article</title>
                    <Header admin="yes" headerOpacity={1} boxShadowOpacity={.25} arbo="Edition"/>
                    <ArticleModifierLab articleExistingInfo={props.location.state.articleExistingInfo}/>
                </div>
            )
        }
    } else {
        return (
            <div>
                <p> L'accès à cette section est réservée aux adminsitrateurs. Veuillez vous
                    <a href="/"
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
