import TextZone from "../textZone";
import {CreateButton} from "../rectangleButton";
import React, {useReducer, useState} from "react";
import axios from "axios";

export default function CreateCategoryForm() {

    const [textZoneData, setTextZoneData] = useState("")

    const handleSubmit =  async event => {
        event.preventDefault();

        const response = await axios.post('/api/createStuff/category', {categoryName : textZoneData});

        if (response.data.alreadyExist === 1 ){
            alert('Cette catégorie existe déjà!')
        }
        else{
            alert("Catégorie créée!");
        }

    }

    const textZoneDataRetriever = (value) => {
        setTextZoneData(value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextZone text="Nom" parentCallback={textZoneDataRetriever} requis={true}/>
            <CreateButton buttonText="Créer" type="category"/>
        </form>
    )
}