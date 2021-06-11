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
                <div className={adminHomeStyle.titleContainer}>
                    <h2 className={adminHomeStyle.title}>Créer</h2>
                </div>

                <div className={adminHomeStyle.createCategory}>
                    <h3>Une nouvelle catégorie</h3>
                    <CreateCategoryForm/>
                </div>

                <div className={adminHomeStyle.createArticle}>
                    <h3>Un nouvel article</h3>
                    <p className={adminHomeStyle.textCreateNewArticle}>
                        Accédez à l'outil de création en cliquant sur le bouton suivant
                    </p>
                    <CreateButton buttonText="Créer" type="article"/>
                </div>
            </div>
            <div className={adminHomeStyle.modifyContainer}>
                <div className={adminHomeStyle.titleContainer}>
                    <h2 className={adminHomeStyle.title}>Modifier</h2>
                </div>
                <div className={adminHomeStyle.modifyArticle}>
                    <h3>Un article existant</h3>
                    <ModifyArticleForm/>
                </div>
                <div className={adminHomeStyle.modifyCategory}>
                    <h3>Une catégorie existante</h3>
                    <ModifyCategoryForm/>
                </div>
            </div>
        </div>


)

}
