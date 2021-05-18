import TextZone from "../textZone";
import {CreateButton, DeleteButton, ModifyButton} from "../rectangleButton";
import React, {useReducer, useState} from "react";
import ComboBox from "../combobox";
import axios from "axios";

export default function CreateCategoryForm(props) {

    const [comboboxData, setComboboxData] = useState("");


    const comboBoxDataRetriever = (comboboxData) => {
        setComboboxData(comboboxData)
    }

    const handleDeleting = async event => {
        event.preventDefault()
        const response = await axios.delete('/api/articles', {data:{articleName: comboboxData}});
        console.log('response delete : ', response)

    }

    return (
        <div>
            <ComboBox options={props.data}
                      text='Sélectionnez un article'
                      type='article'
                      parentCallback={comboBoxDataRetriever}/>
            <ModifyButton buttonText="Modifier" type="article"/>

            <form onSubmit={handleDeleting}>
                <DeleteButton buttonText="Supprimer"/>
            </form>

        </div>
    )
}