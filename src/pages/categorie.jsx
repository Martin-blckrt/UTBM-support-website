
import React from "react";
import Header from "../components/header";

export default function Categorie(props) {
    return (
        <div id="categorie">
            <Header headerOpacity={1} boxShadowOpacity={.25}/>
            <p>{props.categorie}</p>
            <listArticles/>
        </div>

)
}