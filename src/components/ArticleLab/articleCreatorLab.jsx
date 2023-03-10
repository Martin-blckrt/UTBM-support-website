import React, {useEffect, useState} from "react";
import * as editionHomeStyle from './CreatorLab.module.css'
import TextZone from "../textZone";
import ComboBox from "../combobox";
import axios from "axios";
import MDEditor from '@uiw/react-md-editor';
import {TextField} from "@material-ui/core";
import {replaceBadChar} from "../../utils/verif";
import { navigate } from "gatsby"

export default function ArticleCreatorLab() {

    let [categories, setFetchedCategories] = useState(null)
    let [articleInformation, setArticleInformation] = useState({
        articleTitle: "",
        categoriesId: "",
        tldr: "",
        content: "## Rédiger\n Le corps de l'article sera le rendu que vous voyez à droite.\n\n Vous pouvez éditer le corps de l'article dans la partie gauche de l'éditeur  ✌️\n PS : L'éditeur de gauche supporte le `Mardown` !! "
    });

    useEffect(() => {
        const fetchCategories = async (url) => {
            const categories = await axios.get(url)
            setFetchedCategories(categories.data);
        };
        fetchCategories('/api/treeview')

    }, [])


    const retrieveComboboxValue = (comboBoxData) => {
        //retrieve combobox data and update the new article informations with the id of the selected category.
        setArticleInformation(prevState => {
            if (comboBoxData)
                return {...prevState, categoriesId: comboBoxData.id}
        });
    }

    const retrieveTitle = (title) => {
        setArticleInformation(prevState => {
            return {...prevState, articleTitle: title}
        });
    }

    const handleEditorChange = (content) => {
        setArticleInformation(prevState => {
            return {...prevState, content: content}
        });
    }
    const handleTLDRChange = (tldrValue) => {
        setArticleInformation(prevState => {
            return {...prevState, tldr: tldrValue}
        });
    }
    const createArticle = async () => {
        articleInformation.articleTitle = replaceBadChar(articleInformation.articleTitle)
        articleInformation.tldr = replaceBadChar(articleInformation.tldr)
        articleInformation.content = replaceBadChar(articleInformation.content)

        await axios.post('/api/articles', {articleInformation}).then((response) => {
            if (response.status === 200) {
                alert("Article créé !")
            } else {
                alert('Impossible de créer l\'article')
                console.log(response.status)
            }
        })
        navigate("/privileged/admin")
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
                <div className={editionHomeStyle.littleContainer}>
                    <h2> Création d'un article </h2>
                </div>
                <div className={editionHomeStyle.littleContainer}>
                    <p>
                        Sélectionnez la catégorie à laquelle appartient l’article
                    </p>
                    <ComboBox options={categories} text='Sélectionnez une catégorie'
                              parentCallback={retrieveComboboxValue}/>
                </div>

                <div className={editionHomeStyle.littleContainer}>
                    <p>
                        Titre de l'article
                    </p>
                    <TextZone text="Article Title" requis={true} parentCallback={retrieveTitle}/>
                </div>
                <div className={editionHomeStyle.littleContainer}>
                    <MDEditor
                        value={(articleInformation ? articleInformation.content : "## Rédiger\n" +
                            " Le corps de l'article sera le rendu que vous voyez à droite.\n" +
                            "\n" +
                            " Vous pouvez éditer le corps de l'article dans la partie gauche de l'éditeur  ✌️\n" +
                            " PS : L'éditeur de gauche supporte le `Mardown` !! ")}
                        onChange={handleEditorChange}
                        minHeights={500}
                    />
                </div>
                <div className={editionHomeStyle.littleContainer}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Résumé"
                        multiline
                        rows={4}
                        variant="outlined"
                        onChange={(event) => handleTLDRChange(event.target.value)}
                    />
                </div>
                <button type="submit" onClick={createArticle}>
                    Créer l'article
                </button>

            </div>)
    }

}
