import {DeleteButton, ModifyButton} from "../rectangleButton";
import React, {useEffect, useState} from "react";
import ComboBox from "../combobox";
import axios from "axios";

export default function ModifyArticleForm(props) {

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
        <div>
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

            <form onSubmit={handleDeleting}>
                <DeleteButton buttonText="Supprimer"/>
            </form>
        </div>
    )
}
