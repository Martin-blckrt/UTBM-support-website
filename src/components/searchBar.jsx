import React, {useEffect, useState} from "react";
import {makeStyles, TextField} from "@material-ui/core";
import axios from "axios";
import {Link} from "gatsby";
import {Autocomplete} from "@material-ui/lab";

/*search bar style tweak*/
const useStyles = makeStyles({
    inputRoot: {
        backgroundColor: "white",
        borderRadius: '10px',
        width: '800px',
        "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: '2px',
            transition: '.3s',
            borderRadius: '10px'
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderColor: "#3F8BFF",
            transition: '.3s'
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderColor: "#3F8BFF"
        }
    },
    options: {
        // Hover options
        '&[data-focus="true"]': {
            backgroundColor: 'rgba(63,139,255,0.15)',
            borderColor: 'transparent',
            transition: '.3s'
        },
    },
});

export default function SearchBar() {
    const classes = useStyles();
    let [searchBarInfo, setSearchBarInfo] = useState([])
    let [searchBarCategoryInfo, setSearchBarCategoryInfo] = useState([])
    let [searchBarArticleInfo, setSearchBarArticleInfo] = useState([])

    useEffect(() => {
        const fetchSearchBarCategory = async (url) => {
            const category = await axios.get(url)
            setSearchBarCategoryInfo(category.data);
        };
        fetchSearchBarCategory("/api/searchBar/category")

        const fetchSearchBarArticle = async (url) => {
            const article = await axios.get(url)
            setSearchBarArticleInfo(article.data);
        };
        fetchSearchBarArticle("/api/searchBar/article")
    }, []);

    const getSearchBarInfo = () => {
        searchBarInfo = []
        for (let i = 0; i < searchBarCategoryInfo.length; i++) {
            searchBarInfo.push(searchBarCategoryInfo[i])
            searchBarInfo[i].type = "Catégories"
        }
        for (let i = 0; i < searchBarArticleInfo.length; i++) {
            searchBarInfo.push(searchBarArticleInfo[i])
            searchBarInfo[i + searchBarCategoryInfo.length].type = "Articles"
        }
        setSearchBarInfo(searchBarInfo)
    }


    return (
        <div className={"searchContainer"}>
            <Autocomplete
                style={{width: 800}}
                freeSolo
                autoComplete
                autoHighlight
                classes={{
                    root: classes.inputRoot,
                    option: classes.options
                }}
                options={searchBarInfo}
                groupBy={(option) => option.type}
                getOptionLabel={(option) => (option.type === "Catégories") ? option.name : option.articleTitle}
                renderInput={(params) => (
                    <TextField {...params}
                               onChange={getSearchBarInfo}
                               variant="outlined"
                               label="Recherchez un article ou une catégorie ici"
                    />
                )}
                renderOption={(option) => (
                    <span style={{cursor: "pointer"}}>
                        {(option.type === "Catégories")
                            ? <Link to='/category/' state={{id: option.idCategory, categoryName: option.name}}>
                                {option.name}
                            </Link>
                            : <Link to='/article/' state={{articleId: option.articleId, categoryName: option.name}}>
                                {option.articleTitle}
                            </Link>
                        }
                    </span>
                )}
            />
        </div>
    );
}
