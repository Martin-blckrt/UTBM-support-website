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
        articleTitle: "",
        categoriesId: "",
        tldr: "",
        content: ""
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
        setArticleInformations(prevState => {
            return { ...prevState, categoriesId: comboBoxData.id }
        });
    }

    function retrieveTitle(title) {
        setArticleInformations(prevState => {
            return { ...prevState, articleTitle: title }
        });
    }

    const handleEditorChange = (content) => {
        setArticleInformations(prevState => {
            return { ...prevState, content: content }
        });
    }
    const handleTLDRChange = (tldrValue) => {
        setArticleInformations(prevState => {
            return { ...prevState, tldr: tldrValue }
        });
    }
    const createArticle = () => {
        /*TODO. Fix the problem with data erased sometimes*/
        console.log('MDobj = ', articleInformations)
        axios.post('/api/articles', {articleInformations}).then((response) => console.log(response))

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
                        value={articleInformations.content}
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
                        onChange={(event) => handleTLDRChange(event.target.value)}
                    />
                </div>
                {/*TODO. ajouter un feedback de créeation + clear le tout (ou revenir à la page admin?)*/}
                <button type="submit" onClick={createArticle}>
                    send data
                </button>
            </div>)
    }


}
