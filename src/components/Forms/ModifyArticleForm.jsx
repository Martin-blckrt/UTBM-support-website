import React, {useEffect, useState} from "react";
import axios from "axios";

import {DeleteButton, ModifyButton} from "../rectangleButton";
import ComboBox from "../combobox";

import * as formStyle from './formStyle.module.css'

export default function ModifyArticleForm() {

    const [comboboxData, setComboboxData] = useState("");
    const [fetchedArticles, setFetchedArticles] = useState(null);

    useEffect(() => {
        const fetchArticles = async (url) => {
            const articles = await axios.get(url)
            setFetchedArticles(articles.data);
        };
        fetchArticles('/api/articles')
    }, [setFetchedArticles]);


    const comboBoxDataRetriever = (comboboxData) => {
        setComboboxData(comboboxData)
    }

    const handleDeleting = async event => {
        event.preventDefault();

        if (comboboxData === "") {
            alert("Veuillez sélectionner une valeur.")
        } else {
            await axios.delete('/api/articles', {data: {articleName: comboboxData}})
                .then((response_del) => {
                    console.log(response_del)
                    if (response_del.status === 200 && response_del.data.affectedRows >= 1) {
                        alert("L'article " + comboboxData.articleTitle + " a bien été supprimé.")
                    } else {
                        error("L'article n'a pas pu être supprimé...")
                    }
                });
        }
    }

    return (
        <>
            {
                (!fetchedArticles)
                    ? <ComboBox options={'loading data'}
                                text='Sélectionnez un article'
                                type='article'
                                parentCallback={comboBoxDataRetriever}/>

                    : <ComboBox options={fetchedArticles}
                                text='Sélectionnez un article'
                                type='article'
                                parentCallback={comboBoxDataRetriever}/>
            }

            <ModifyButton buttonText="Modifier" type="article" articleExistingInfo={comboboxData}/>
            <form className={formStyle.formStyle} onSubmit={handleDeleting}>
                <DeleteButton buttonText="Supprimer"/>
            </form>
        </>
    )
}
