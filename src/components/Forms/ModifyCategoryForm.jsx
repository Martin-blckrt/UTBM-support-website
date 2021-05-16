import TextZone from "../textZone";
import {DeleteButton, ModifyButton} from "../rectangleButton";
import React, {useState} from "react";
import ComboBox from "../combobox";
import axios from "axios";

export default function CreateCategoryForm(props) {

    const [comboboxData, setComboboxData] = useState("")
    const [textZoneData, setTextZoneData] = useState("")

    const comboBoxDataRetriever = (comboboxData) => {
        setComboboxData(comboboxData)
    }
    const handleModifications = async event => {
        event.preventDefault();

        const response = await axios.post('/api/modifyCategory/', {
            categoryName: comboboxData,
            newCategoryName: textZoneData
        });

        if (response.data.alreadyExist === 1) {
            alert('Ce nom de catégorie est déjà attribué à une catégorie.')
        } else {
            alert("Nom de la catégorie modifiée!");
        }

    }
    const handleDeleting = async event => {
        event.preventDefault()
    }

    const textZoneDataRetriever = (value) => {
        setTextZoneData(value)
    }

    return (
        <div>
            <ComboBox options={props.data} parentCallback={comboBoxDataRetriever} text='Sélectionnez une catégorie'/>
            <form onSubmit={handleModifications}>
                <h2>Choisissez un nouveau nom pour la catégorie sélectionnée : </h2>
                <TextZone text="Nom" parentCallback={textZoneDataRetriever} requis={true}/>
                <ModifyButton buttonText="Modifier" type="category"/>
            </form>
            <form onSubmit={handleDeleting}>
                <h2>Supprimer la catégorie sélectionnée : </h2>
                <DeleteButton buttonText="Supprimer" type="category"/>
            </form>
        </div>
    )
}