import React from "react";
import RectangleButton from "../components/rectangleButton";
import TextZone from "../components/textZone";

export default function AdminHome(props) {

    return (
        <div id="bigContainer">
            <div className="title">
                <h2>Créer</h2>
            </div>
            <div className="fourDivs" id="newCategory">
                <h3>Une nouvelle catégorie</h3>
                <TextZone text="Nom" requis={true}/>
                <RectangleButton buttonText="Créer"/>
            </div>
            <div className="separateBlueLine">
                <svg width="5" height="408" viewBox="0 0 5 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.5" y1="408" x2="2.5" stroke="#3F8BFF" stroke-width="5"/>
                </svg>
            </div>
            <div className="fourDivs" id="newArticle">
                <h3>Un nouvel article</h3>
                <p id="textCreateNewArticle">
                    Accédez à l'outil de création en cliquant sur le bouton suivant
                </p>
                <RectangleButton buttonText="Créer"/>
            </div>
            <div className="fourDivs" id="modifyCategory">
                <h3>Une catégorie existante</h3>
                <RectangleButton buttonText="Modifier"/>
                <RectangleButton buttonText="Supprimer"/>
            </div>
            <div className="separateBlueLine">
                <svg width="5" height="408" viewBox="0 0 5 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.5" y1="408" x2="2.5" stroke="#3F8BFF" strokeWidth="5"/>
                </svg>
            </div>
            <div className="fourDivs" id="modifyArticle">
                <h3>Un article existant</h3>
                  <RectangleButton buttonText="Modifier"/>
                  <RectangleButton buttonText="Supprimer"/>
            </div>
            <div className="title">
                <h2>Modifier</h2>
            </div>
        </div>
    )

}
