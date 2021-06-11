import React, {useEffect, useState} from "react";
import axios from "axios";

import {DeleteButton, ModifyButton} from "../rectangleButton";
import ComboBox from "../combobox";

import * as formStyle from './formStyle.module.css'

export default function ModifyArticleForm() {

    const [comboboxData, setComboboxData] = useState("");

    let [fetchedArticles, setFetchedArticles] = useState(null);
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
            await axios.delete('/api/articles', {data: {articleName: comboboxData}}).then((response_del) => console.log(response_del));
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



            <form className={formStyle.formStyle} onSubmit={handleDeleting}>
                <ModifyButton buttonText="Modifier" type="article" articleExistingInfo={comboboxData}/>
                <DeleteButton buttonText="Supprimer"/>
            </form>
        </>
    )
}
