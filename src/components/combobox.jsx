import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={props.options}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label={props.text} variant="outlined" />}
        />
    );
}
