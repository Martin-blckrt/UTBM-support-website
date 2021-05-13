import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
    return (
        <Autocomplete
            options={props.options}
            style={{width: 300}}
            renderInput={(params) => <TextField {...params} label={props.text} variant="outlined"/>}
        />
    );
}
