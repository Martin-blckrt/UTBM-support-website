import React from "react"
import {withStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const CssTextField = withStyles({
    root: {
        borderRadius: "100%",
        "& label.Mui-focused": {
            color: "#3F8BFF"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#3F8BFF"
        },
        "& .MuiOutlinedInput-root": {
            borderRadius: 10,
            "& fieldset": {
                borderColor: "#797979"
            },
            "&:hover fieldset": {
                borderColor: "#3F8BFF"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#3F8BFF"
            }
        }
    }
})(TextField);

export default function textZone(props) {
    return (
        <CssTextField
            label={props.text}
            variant="outlined"
            id="custom-css-outlined-input"
        />
    )

}
