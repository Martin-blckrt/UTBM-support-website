import TextZone from "../textZone";
import {CreateButton} from "../rectangleButton";
import React, {useReducer, useState} from "react";
import axios from "axios";
import {containsBadChar} from "../../utils/verif";

export default function CreateCategoryForm() {

    const [textZoneData, setTextZoneData] = useState("")

    const handleSubmit =  async event => {
        event.preventDefault();

        const response = await axios.post('/api/categories', {categoryName : textZoneData});

        if (response.data.alreadyExist === 1 ){
            alert('Cette catégorie existe déjà!')
        }
        else if (containsBadChar(textZoneData) === 1){
            alert('Vous avez des caractères non conformes!')
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
