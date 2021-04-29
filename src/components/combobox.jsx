import React, {useEffect, useState} from "react"
import {css} from "@emotion/react";
import axios from "axios";
import {Link} from "gatsby";
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

export default function Combobox(props) {

    const classes = useStyles();

    if (props.use === "category") {

        const [category, setCategory] = useState(null);
        useEffect(() => {
            const fetchCategory = async (url, parameters) => {
                const category = await axios.get(url, {params: parameters})
                setCategory(category.data);
            };
            fetchCategory("/api/getCategory", {id: 'arbo'})
        }, []);

        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Sélectionnez une catégorie</InputLabel>
                    <Select defaultValue="" id="comboboxCategory">
                        {category.map((category, index) => (
                            <MenuItem value={"categorie" + index}>{category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        )
    } else if (props.use === "article") {

        const [data, setData] = useState(null);
        useEffect(() => {
            const fetchData = async (url, parameters) => {
                const data = await axios.get(url, {params: parameters})
                setData(data.data);
            };
            fetchData("/api/getCategory", {id: 'home'})
        }, []);

        let listArticle = [];
        data.map((dataElement, index) => listArticle[index] = dataElement.titles.split(','));

        return (
            <div>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-select">Sélectionnez un article</InputLabel>
                    <Select defaultValue="" id="comboboxArticle">
                        {data.map((dataElement, index) => (
                            <div>
                                <ListSubheader id={"category" + index}>{dataElement.name}</ListSubheader>
                                {listArticle[index].map((article, i) => (
                                    <MenuItem value={"article" + i}>{article}</MenuItem>
                                ))}
                            </div>
                        ))}
                    </Select>
                </FormControl>
            </div>
        )
    } else {
        return (
            <p>DOESNT WORK</p>
        )
    }
}
