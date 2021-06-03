import {DeleteButton, ModifyButton} from "../rectangleButton";
import React, {useState} from "react";
import ComboBox from "../combobox";
import axios from "axios";

export default function ModifyArticleForm(props) {

    const [comboboxData, setComboboxData] = useState("");
    
    const comboBoxDataRetriever = (comboboxData) => {
        setComboboxData(comboboxData)
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
            response_del = await axios.delete('/api/articles', {data:{articleName: comboboxData}});
        }
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
