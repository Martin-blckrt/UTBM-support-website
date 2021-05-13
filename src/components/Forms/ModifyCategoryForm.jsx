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
    const handleChange = event => {

        setFormData(event.target.value);
    }
    console.log(formData)
    return (
        <form onSubmit={handleSubmit}>
            <ComboBox options={props.data} text='Sélectionnez une catégorie'/>
            <input name='Nom de la catégorie' required={true} onChange={handleChange}/>
            <ModifyButton buttonText="Modifier" type="category"/>
            <DeleteButton buttonText="Supprimer"/>
        </form>
    )
}