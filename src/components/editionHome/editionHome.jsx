import React from "react";
import * as editionHomeStyle from './editionHome.module.css'
import TextZone from "../textZone";
import ComboBox from "../combobox";


export default function EditionHome() {

    return (
        <div className={editionHomeStyle.bigContainer}>
            <div>
                <h2> Modification d'un article </h2>
            </div>
            <div>
                <h3> Article Name </h3>
            </div>
            <div>
                <p>
                    Sélectionnez la catégorie à laquelle appartient l’article
                </p>
                <ComboBox options={[1, 2, 3, 4]} text='Sélectionnez une catégorie'/>
            </div>
            <div>
                <p>
                    A qui s'applique cet article ?
                </p>
                <ul>
                    <li>Etudiants</li>
                    <li>Enseignants</li>
                    <li>Personnels</li>
                </ul>
            </div>
            <div>
                <p>
                    Titre de l'article
                </p>
                <TextZone text="Article Title" requis={true}/>
            </div>
            <div>
                <p>
                    Contenu de l'article
                </p>
                <p>
                    C'est ici qu'on modifie tout
                </p>
            </div>
        </div>
    )
}
