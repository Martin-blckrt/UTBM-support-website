import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {

    return (
        <Autocomplete
            onChange={
                (event, value) =>
                    props.parentCallback(value)
            }
            groupBy={(option) => (props.type === "article") ? option.name : ""}
            options={props.options}
            getOptionLabel={(option) => (props.type === "article") ? option.articleTitle : option.name}
            style={{width: 300}}
            renderInput={(params) => <TextField {...params} label={props.text} variant="outlined"/>}
        />
    );
}
