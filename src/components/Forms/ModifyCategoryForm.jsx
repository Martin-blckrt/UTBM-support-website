import TextZone from "../textZone";
import {DeleteButton, ModifyButton} from "../rectangleButton";
import React, { useState} from "react";
import ComboBox from "../combobox";
import axios from "axios";
import {containsBadChar} from "../../utils/verif";


export default function ModifyCategoryForm(props) {

    const [comboboxData, setComboboxData] = useState("")
    const [textZoneData, setTextZoneData] = useState("")

    const comboBoxDataRetriever = (comboboxData) => {
        setComboboxData(comboboxData)
    }
    const textZoneDataRetriever = (value) => {
        setTextZoneData(value)
    }
    const handleModifications = async event => {
        event.preventDefault();
        let response = null;

        if (comboboxData === "")
        {
            alert("Veuillez sélectionner une valeur.")
        }
        else
        {
            response = await axios.put('/api/categories/', {
                categoryName: comboboxData,
                newCategoryName: textZoneData
            });
        }

        if (response.data.alreadyExist === 1) {
            alert('Ce nom de catégorie est déjà attribué à une catégorie.')
        }
        else if (containsBadChar(textZoneData) === 1){
            alert('Vous avez des caractères non conformes!')
        }
        else {
            alert("Nom de la catégorie modifiée!");
        }
    }

    const handleDeleting = async event => {
        event.preventDefault();
        let response_del = null;

        if (comboboxData === "")
        {
            alert("Veuillez sélectionner une valeur.")
        }
        else
        {
            response_del = await axios.delete('/api/categories', {data: {categoryName: comboboxData}});
        }
    }

    return (
        <div>
            {/*TODO. refresh combobox values after modifications*/}
            <ComboBox options={props.data}
                      parentCallback={comboBoxDataRetriever}
                      type='category'
                      text='Sélectionnez une catégorie'/>
            <form onSubmit={handleModifications}>
                <h3>Choisissez un nouveau nom pour la catégorie sélectionnée : </h3>
                <TextZone text="Nom" parentCallback={textZoneDataRetriever} requis={true}/>
                <ModifyButton buttonText="Modifier" type="category"/>
            </form>
            <form onSubmit={handleDeleting}>
                <h3>Supprimer la catégorie sélectionnée : </h3>
                <DeleteButton buttonText="Supprimer" type="category"/>
            </form>
        </div>
    )
}
