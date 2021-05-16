import TextZone from "../textZone";
import {CreateButton, DeleteButton, ModifyButton} from "../rectangleButton";
import React, {useReducer, useState} from "react";
import ComboBox from "../combobox";

export default function CreateCategoryForm(props) {

    const [formData, setFormData] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
    }

    console.log(formData)
    return (
        <form onSubmit={handleSubmit}>
            <ComboBox options={props.data} text='Sélectionnez un article'/>
            <ModifyButton buttonText="Modifier" type="article"/>
            <DeleteButton buttonText="Supprimer"/>
        </form>
)
}