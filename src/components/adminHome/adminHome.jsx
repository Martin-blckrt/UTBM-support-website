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

    let [fetchedArticles, setFetchedArticles] = useState(null);
    let [fetchedCategories, setFetchedCategories] = useState(null);

    useEffect(() => {
        const fetchCategories = async (url) => {
            const categories = await axios.get(url)
            setFetchedCategories(categories.data);
        };
        fetchCategories("/api/home")

        const fetchArticles = async (url) => {
            const articles = await axios.get(url)
            setFetchedArticles(articles.data);
        };
        fetchArticles('/api/articles')
    }, [setFetchedCategories, setFetchedArticles]);


    if (!fetchedCategories || !fetchedArticles) {
        return (
            <div>
                Loading page
            </div>
        )
    } else {
        let listCategories = [];
        let listArticles = [];
        fetchedCategories.map((dataElement, index) => listCategories[index] = dataElement.name);
        fetchedArticles.map((dataElement, index) => listArticles[index] = dataElement.articleTitle);


        return (
            <div className={adminHomeStyle.bigContainer}>
                <div className={adminHomeStyle.title}>
                    <h2>Créer</h2>
                </div>

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
                    <ModifyCategoryForm data={listCategories}/>
                </div>
                <div className="separateBlueLine">
                    <svg width="5" height="408" viewBox="0 0 5 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.5" y1="300" x2="2.5" stroke="#3F8BFF" strokeWidth="5"/>
                    </svg>
                </div>
                <div className={adminHomeStyle.fourDiv} id="modifyArticle">
                    <h3>Un article existant</h3>
                    <ModifyArticleForm data={listArticles}/>
                </div>
            </div>
        )
    }
}
