import TextZone from "../textZone";
import {DeleteButton, ModifyButton} from "../rectangleButton";
import React, {useState} from "react";
import ComboBox from "../combobox";

export default function CreateCategoryForm(props) {

    const [comboboxData, setComboboxData] = useState("")

    const comboBoxDataRetriever = (comboboxData) => {
        setComboboxData(comboboxData)
    }
    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
    }

    return (
        <form onSubmit={handleSubmit}>
            <ComboBox options={props.data} parentCallback={comboBoxDataRetriever} text='Sélectionnez une catégorie'/>
            {/* <input name='Nom de la catégorie' required={true} onChange={handleChange}/>*/}
            <ModifyButton buttonText="Modifier" type="category" categoryName={comboboxData}/>
            <DeleteButton buttonText="Supprimer"/>
        </form>
    )
}