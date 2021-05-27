import React, {useEffect, useState} from "react";
import * as editionHomeStyle from './editionHome.module.css'
import TextZone from "../textZone";
import ComboBox from "../combobox";
import axios from "axios";
import MDEditor from '@uiw/react-md-editor';
import {TextField} from "@material-ui/core";
import {containsBadChar} from "../../utils/verif";

export default function EditionHome(props) {

    let [categories, setFetchedCategories] = useState(null)
    let [articleInformation, setArticleInformation] = useState({
        articleTitle: "",
        categoriesId: "",
        tldr: "",
        content: "## Rédiger\n Le corps de l'article sera le rendu que vous voyez à droite.\n\n Vous pouvez éditer le corps de l'article dans la partie gauche de l'éditeur  ✌️\n PS : L'éditeur de gauche supporte le `Mardown` !! "
    });

    if (props.articleExistingInfo) {
        useEffect(() => {
            const fetchedDetailedExistingInfo = async (url) => {
                const existingData = await axios.get(url)
                setArticleInformation({
                    articleTitle: existingData.data[0].articleTitle,
                    tldr: existingData.data[0].tldr,
                    content: existingData.data[0].content,
                    categoriesId: existingData.data[0].idCategory
                });
            };
            fetchedDetailedExistingInfo(`/api/articles/${props.articleExistingInfo.id}`)
        }, [])
    }


    useEffect(() => {
        const fetchCategories = async (url) => {
            const categories = await axios.get(url)
            setFetchedCategories(categories.data);
        };
        fetchCategories('/api/treeview')

    }, [])


    function retrieveComboboxValue(comboBoxData) {
        //retrieve combobox data and update the new article informations with the id of the selected category.
        setArticleInformation(prevState => {
            return {...prevState, categoriesId: comboBoxData.id}
        });
    }

    function retrieveTitle(title) {
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
    const createArticle = () => {
        if (containsBadChar(articleInformation.content) === 1) {
            //TODO. Modifier le containsBadChar pour checker tous les elements d'une liste
            alert('vous ne pouvez pas utiliser de guillemets " " dans les zones de texte')
        } else {
            axios.post('/api/articles', {articleInformation}).then((response) => console.log(response))
        }

    }

    const modifyArticle = () => {
        if (containsBadChar(articleInformation.content) === 1) {
            //TODO. Modifier le containsBadChar pour checker tous les elements d'une liste
            alert('vous ne pouvez pas utiliser de guillemets " " dans les zones de texte')
        } else {
            axios.post('/api/articles', {articleInformation}).then((response) => console.log(response))
        }

    }


    if (!categories) {
        return (
            <div>
                loading data
            </div>
        )
    } else {
        if (props.articleExistingInfo !== null) {

            console.log('categories list = ', categories)
            console.log('article info : ', articleInformation)
            let categoryName = '';
            for (let i = 0; i < categories.length; i++) {
                console.log('')
                if (categories[i].id === articleInformation.idCategory) {
                    categoryName = categories[i].name
                    console.log('categoryName : ', categoryName)
                    break
                }
            }
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
                        <ComboBox options={categories}
                                  text='Sélectionnez une catégorie'
                                  defaultValue={categoryName}
                                  defaultValueId={articleInformation.idCategory}
                                  parentCallback={retrieveComboboxValue}/>
                    </div>

                    <div>
                        <p>
                            Titre de l'article
                        </p>
                        <TextZone text="Article Title" defaultValue={articleInformation.articleTitle} requis={true}
                                  parentCallback={retrieveTitle}/>
                    </div>
                    <div className="container">
                        <MDEditor
                            value={articleInformation.content}
                            onChange={handleEditorChange}
                            minHeights={300}
                        />
                    </div>
                    <div className={editionHomeStyle.tldrContainer}>
                        <TextField
                            defaultValue={articleInformation.tldr}
                            id="outlined-multiline-static"
                            label="Résumé"
                            multiline
                            rows={4}
                            variant="outlined"
                            onChange={(event) => handleTLDRChange(event.target.value)}
                        />
                    </div>
                    {/*TODO. ajouter un feedback de créeation + clear le tout (ou revenir à la page admin?)*/}
                    <button type="submit" onClick={modifyArticle}>
                        send data
                    </button>
                </div>)

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
                            Titre de l'article
                        </p>
                        <TextZone text="Article Title" requis={true} parentCallback={retrieveTitle}/>
                    </div>
                    <div className="container">
                        <MDEditor
                            value={articleInformation.content}
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


}
