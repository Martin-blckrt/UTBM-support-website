import React, {useEffect, useState} from "react";
import * as adminHomeStyle from './adminHome.module.css'
import RectangleButton from "../rectangleButton";
import TextZone from "../textZone";
import ComboBox from "../combobox";
import axios from "axios";

export default function AdminHome() {
    const [fetchedData,setFetchedData ] = useState(null);

    useEffect(() => {
        const fetchData = async (url) => {
            const data = await axios.get(url)
            setFetchedData(data.data);
        };
        fetchData("/api/home")
    }, []);
    console.log(fetchedData)
    if (!fetchedData) {
        return (
            <div>
                Loading page
            </div>
        )
    } else {
        let listCategories = [];
        let listArticles = [];
        fetchedData.map((dataElement, index) => listCategories[index] = dataElement.name);
        fetchedData.map((dataElement, index) => listArticles[index] = dataElement.name.split(','));


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
