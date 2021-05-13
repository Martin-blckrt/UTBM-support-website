import TextZone from "../textZone";
import {CreateButton} from "../rectangleButton";
import React, {useReducer, useState} from "react";

export default function CreateCategoryForm() {

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
            <input name = 'Nom' required={true} onChange={handleChange}/>
            <CreateButton buttonText="Créer" type="category" idArticle={formData}/>
        </form>
)
}