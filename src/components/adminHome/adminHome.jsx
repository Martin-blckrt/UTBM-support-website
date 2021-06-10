import React from "react";

//STYLE IMPORT
import * as adminHomeStyle from './adminHome.module.css'

//COMPONENTS IMPORT
import {CreateButton} from "../rectangleButton";
import CreateCategoryForm from "../Forms/CreateCategoryForm"
import ModifyCategoryForm from "../Forms/ModifyCategoryForm"
import ModifyArticleForm from "../Forms/ModifyArticleForm"


export default function AdminHome() {

    return (
        <div className={adminHomeStyle.adminHomeContainer}>
            <div className={adminHomeStyle.createContainer}>
                <div className={adminHomeStyle.title}>
                    <h2>Créer</h2>
                </div>

                <div className={adminHomeStyle.fourDiv} id="newCategory">
                    <h3>Une nouvelle catégorie</h3>
                    <CreateCategoryForm/>
                </div>

                <div className={adminHomeStyle.fourDiv} id="newArticle">
                    <h3>Un nouvel article</h3>
                    <p id="textCreateNewArticle">
                        Accédez à l'outil de création en cliquant sur le bouton suivant
                    </p>
                    <CreateButton buttonText="Créer" type="article"/>
                </div>
            </div>
            <div className={adminHomeStyle.modifyContainer}>
                <div className={adminHomeStyle.fourDiv} id="modifyArticle">
                    <h3>Un article existant</h3>
                    <ModifyArticleForm/>
                </div>

                <div className={adminHomeStyle.title}>
                    <h2>Modifier</h2>
                </div>
                <div className={adminHomeStyle.fourDiv} id="modifyCategory">
                    <h3>Une catégorie existante</h3>
                    <ModifyCategoryForm/>
                </div>
            </div>
        </div>


)

}
