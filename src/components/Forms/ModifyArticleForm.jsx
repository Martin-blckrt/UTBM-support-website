import {DeleteButton, ModifyButton} from "../rectangleButton";
import React, {useState} from "react";
import ComboBox from "../combobox";
import axios from "axios";

export default function CreateCategoryForm(props) {

    const [comboboxData, setComboboxData] = useState("");
    
    const comboBoxDataRetriever = (comboboxData) => {
        setComboboxData(comboboxData)
        console.log(props.data)
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
            <ModifyButton buttonText="Modifier" type="article" articleExistingInfo={comboboxData}/>

            <form onSubmit={handleDeleting}>
                <DeleteButton buttonText="Supprimer"/>
            </form>
        </div>
    )
}
