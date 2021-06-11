import React, {useEffect, useState} from "react";
import * as editionHomeStyle from './CreatorLab.module.css'
import TextZone from "../textZone";
import ComboBox from "../combobox";
import axios from "axios";
import MDEditor from '@uiw/react-md-editor';
import {TextField} from "@material-ui/core";
import {replaceBadChar} from "../../utils/verif";

export default function ArticleCreatorLab(props) {

    let [categories, setFetchedCategories] = useState(null)
    let [articleInformation, setArticleInformation] = useState({
        articleTitle: "",
        categoriesId: "",
        tldr: "",
        content: "## Rédiger\n Le corps de l'article sera le rendu que vous voyez à droite.\n\n Vous pouvez éditer le corps de l'article dans la partie gauche de l'éditeur  ✌️\n PS : L'éditeur de gauche supporte le `Mardown` !! "
    });


    useEffect(() => {
        if (props.articleExistingInfo) {
            console.log('existing info in article modifier : ', props.articleExistingInfo)
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
        }
        const fetchCategories = async (url) => {
            const categories = await axios.get(url)
            setFetchedCategories(categories.data);
        };
        fetchCategories('/api/treeview')
    }, [])
    useEffect(() => {


    }, [])

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


    const modifyArticle = async () => {

        articleInformation.articleTitle = replaceBadChar(articleInformation.articleTitle)
        articleInformation.tldr = replaceBadChar(articleInformation.tldr)
        articleInformation.content = replaceBadChar(articleInformation.content)

        await axios.put('/api/articles', {
            articleInformation: articleInformation,
            articleId: props.articleExistingInfo.id
        }).then((res) => {
            if (res.status === 200){
                alert('Article modifié !')
            }
            else{
                alert('Problème avec la modification de l\'article')
            }
        })


    }

    if (!categories) {
        return (
            <div>
                loading data
            </div>
        )
    } else {

        let categoryName = '';

        for (let i = 0; i < categories.length; i++) {
            if (articleInformation) {
                if (categories[i].id === articleInformation.categoriesId) {
                    categoryName = categories[i].name
                    break
                }
            }
        }
        console.log('article info in else : ', articleInformation)
        return (
            <div className={editionHomeStyle.bigContainer}>
                <div className={editionHomeStyle.littleContainer}>
                    <h2> Modification d'un article </h2>
                </div>
                <div className={editionHomeStyle.littleContainer}>
                    <p>
                        Sélectionnez la catégorie à laquelle appartient l’article
                    </p>
                    <ComboBox options={categories}
                              text='Sélectionnez une catégorie'
                              defaultValue={categoryName}
                              defaultValueId={(articleInformation ? articleInformation.categoriesId : "")}
                              parentCallback={retrieveComboboxValue}/>
                </div>

                <div className={editionHomeStyle.littleContainer}>
                    <p>
                        Titre de l'article
                    </p>
                    <TextZone text="Article Title"
                              defaultValue={(articleInformation ? articleInformation.articleTitle : "")} requis={true}
                              parentCallback={retrieveTitle}/>
                </div>
                <div className={editionHomeStyle.littleContainer}>
                    <MDEditor
                        value={(articleInformation ? articleInformation.content : "")}
                        onChange={handleEditorChange}
                        minHeights={500}
                    />
                </div>
                <div className={editionHomeStyle.littleContainer}>
                    <TextField
                        defaultValue={(articleInformation ? articleInformation.tldr : "")}
                        id="outlined-multiline-static"
                        label="Résumé"
                        multiline
                        rows={4}
                        required
                        variant="outlined"
                        onChange={(event) => handleTLDRChange(event.target.value)}
                    />
                </div>
                <button className={editionHomeStyle.SubmitButton} onClick={modifyArticle}>
                    send data
                </button>
            </div>)


    }


}
