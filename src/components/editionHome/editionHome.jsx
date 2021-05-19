import React, {useEffect, useState} from "react";
import * as editionHomeStyle from './editionHome.module.css'
import TextZone from "../textZone";
import ComboBox from "../combobox";
import axios from "axios";
import MDEditor from '@uiw/react-md-editor';
import {TextField} from "@material-ui/core";

export default function EditionHome() {

    let [categories, setFetchedCategories] = useState(null)
    let [articleInformations, setArticleInformations] = useState({
        name: "",
        categoriesId: "",
        tldr: "",
        body: "## Sous titre 1\n" +
            "\n" +
            "Notez la description de la première sous partie de l'article ici.\n" +
            "\n" +
            "Cette éditeur supporte la syntax `MarkDown`.\n" +
            "Vous pouvez utiliser la barre d'outils pour personnaliser le texte. \n" +
            "\n" +
            "## Sous  partie 2\n"
    });


    useEffect(() => {
        const fetchCategories = async (url) => {
            const categories = await axios.get(url)
            setFetchedCategories(categories.data);
        };
        fetchCategories('/api/treeview')
    }, [])

    function retrieveComboboxValue(comboBoxData) {
        //retrieve combobox data and update the new article informations with the id of the selected category.
        setArticleInformations({...articleInformations, categoriesId: comboBoxData.id})
        console.log('retrieve ID ', articleInformations)
    }

    function retrieveTitle(title){
        setArticleInformations({...articleInformations, name: title})
        console.log('retrieve Title ', articleInformations)
    }

    const createArticle = () => {
        /*TODO. Fix the problem with data erased sometimes*/
        console.log('submit with this :', articleInformations)
        axios.post('/api/articles', {articleInformations}).then((response) => console.log(response))
    }

    const handleEditorChange = (content) => {
        setArticleInformations({...articleInformations, body: content})
    }
    const handleTLDRChange = (tldrValue) => {
        setArticleInformations({...articleInformations, tldr: tldrValue});
        console.log('retrieve TLDR ', articleInformations)
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
                <div className="container">
                    <MDEditor
                        value={articleInformations.body}
                        onChange={handleEditorChange}
                        minHeights={300}
                    />
                </div>
                <div className={editionHomeStyle.tldrContainer}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Résumé"
                        multiline
                        rows={4}
                        variant="outlined"
                        onChange={(event) => handleTLDRChange(event.target.value) }
                    />
                </div>
                {/*TODO. ajouter un feedback de créeation + clear le tout (ou revenir à la page admin?)*/}
                <button type="submit" onClick={createArticle}>
                    send data
                </button>
            </div>)
    }


}
