import React, {useEffect, useMemo, useState} from "react";
import * as editionHomeStyle from './editionHome.module.css'
import TextZone from "../textZone";
import ComboBox from "../combobox";
import axios from "axios";

// Import the Slate editor factory.
import { createEditor } from 'slate'

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react'


export default function EditionHome() {

    let [categories, setFetchedCategories] = useState(null)
    let [articleInformations, setArticleInformations] = useState({
        name: "",
        categoriesId: "",
        tldr: "",
        subtitles: [],
        subsections: []
    });
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

    const createArticle  = () => {
        console.log()
        axios.post('/api/articles', {articleInformations}).then((response) => console.log(response))
    }


    if (!categories) {
        return (
            <div>
                loading data
            </div>
        )
    } else {

        const editor = useMemo(() => withReact(createEditor()), [])
        const [value, setValue] = useState([])

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
                    <Slate
                        editor={editor}
                        value={value}
                        onChange={newValue => setValue(newValue)}
                    >
                        <Editable />
                    </Slate>
                </div>
                <button type="submit" onClick={createArticle}>
                    send data
                </button>
            </div>)
    }


}
