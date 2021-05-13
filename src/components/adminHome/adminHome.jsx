import React, {useEffect, useState} from "react";
import * as adminHomeStyle from './adminHome.module.css'
import RectangleButton from "../rectangleButton";
import TextZone from "../textZone";
import ComboBox from "../combobox";
import axios from "axios";

export default function AdminHome() {
    const [fetchedCategories, setFetchedCategories] = useState(null);
    const [fetchedArticles, setFetchedArticles] = useState(null);

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
    }, []);


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
        console.log(listCategories)
        console.log(listArticles)

        return (
            <div className={adminHomeStyle.bigContainer}>
                <div className={adminHomeStyle.title}>
                    <h2>Créer</h2>
                </div>
                <div className={adminHomeStyle.fourDiv} id="newCategory">
                    <h3>Une nouvelle catégorie</h3>
                    <TextZone text="Nom" requis={true}/>
                    <RectangleButton buttonText="Créer"/>
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
                    <RectangleButton buttonText="Créer"/>
                </div>
                <div className={adminHomeStyle.title}>
                    <h2>Modifier</h2>
                </div>
                <div className={adminHomeStyle.fourDiv} id="modifyCategory">
                    <h3>Une catégorie existante</h3>
                    <ComboBox options={listCategories} text='Sélectionnez une catégorie'/>
                    <RectangleButton buttonText="Modifier"/>
                    <RectangleButton buttonText="Supprimer"/>
                </div>
                <div className="separateBlueLine">
                    <svg width="5" height="408" viewBox="0 0 5 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="2.5" y1="300" x2="2.5" stroke="#3F8BFF" strokeWidth="5"/>
                    </svg>
                </div>
                <div className={adminHomeStyle.fourDiv} id="modifyArticle">
                    <h3>Un article existant</h3>
                    <ComboBox options={listArticles} text='Sélectionnez un article'/>
                    <RectangleButton buttonText="Modifier"/>
                    <RectangleButton buttonText="Supprimer"/>
                </div>

            </div>
        )
    }
}
