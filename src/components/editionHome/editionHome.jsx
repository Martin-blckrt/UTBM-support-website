import React, {useEffect, useState} from "react";
import * as editionHomeStyle from './editionHome.module.css'
import TextZone from "../textZone";
import ComboBox from "../combobox";
import axios from "axios";


export default function EditionHome() {

    let [categories, setFetchedCategories] = useState(null)
    let [articleInformations, setArticleInformations] = useState({
        name: "",
        categoriesId: "",
        tldr: "",
        subtitles: [],
        subsections: []
    })
    useEffect(() => {
        const fetchCategories = async (url) => {
            const categories = await axios.get(url)
            setFetchedCategories(categories.data);
        };
        fetchCategories('/api/treeview')
    }, [])

    console.log(categories)

    const retrieveComboboxValue = (comboboxdata) => {
        //retrieve combobox data and update the new article informations with the id of the selected category.
        setArticleInformations({...articleInformations, categoriesId: comboboxdata.id})
    }

    const retrieveTitle = (title) => {
        setArticleInformations({...articleInformations, name: title})
    }


    if (!categories) {
        return (
            <div>
                loading data
            </div>
        )
    } else {


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
                    <ComboBox options={categories} text='Sélectionnez une catégorie'
                              parentCallback={retrieveComboboxValue}/>
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
                    <TextZone text="Article Title" requis={true} parentCallback={retrieveTitle}/>

                </div>
                <div>
                    <p>
                        Contenu de l'article
                    </p>
                    <p>
                        C'est ici qu'on modifie tout
                    </p>
                </div>
            </div>)
    }


}
