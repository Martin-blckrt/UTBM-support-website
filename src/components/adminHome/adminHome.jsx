import React, {useEffect, useState} from "react";
import axios from "axios";

//STYLE IMPORT
import * as adminHomeStyle from './adminHome.module.css'

//COMPONENTS IMPORT
import {CreateButton} from "../rectangleButton";
import CreateCategoryForm from "../Forms/CreateCategoryForm"
import ModifyCategoryForm from "../Forms/ModifyCategoryForm"
import ModifyArticleForm from "../Forms/ModifyArticleForm"


export default function AdminHome() {

    return (
        <div className={adminHomeStyle.bigContainer}>
            <div className={adminHomeStyle.title}>
                <h2>Créer</h2>
            </div>
            console.log(req.params)

            <div className={adminHomeStyle.fourDiv} id="newCategory">
                <h3>Une nouvelle catégorie</h3>
                <CreateCategoryForm/>
            </div>

            <div className="separateBlueLine">
                <svg width="5" height="408" viewBox="0 0 5 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.5" y1="300" x2="2.5" stroke="#3F8BFF" strokeWidth="5"/>
                </svg>
            </div>

            <div className={adminHomeStyle.fourDiv} id="newArticle">
                <h3>Un nouvel article</h3>
                <p id="textCreateNewArticle">
                    Accédez à l'outil de création en cliquant sur le bouton suivant
                </p>
                <CreateButton buttonText="Créer" type="article"/>
            </div>

            <div className={adminHomeStyle.title}>
                <h2>Modifier</h2>
            </div>
            <div className={adminHomeStyle.fourDiv} id="modifyCategory">
                <h3>Une catégorie existante</h3>
                <ModifyCategoryForm/>
            </div>

            <div className="separateBlueLine">
                <svg width="5" height="408" viewBox="0 0 5 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.5" y1="300" x2="2.5" stroke="#3F8BFF" strokeWidth="5"/>
                </svg>
            </div>

            <div className={adminHomeStyle.fourDiv} id="modifyArticle">
                <h3>Un article existant</h3>
                <ModifyArticleForm/>
            </div>

        </div>
    )

}
