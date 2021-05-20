import React, {useEffect, useState} from "react";
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import axios from "axios";
import {Link} from "gatsby";


export default function SearchBar() {

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
        <div>
            <Autocomplete
                style={{width: 500}}
                freeSolo
                autoComplete
                autoHighlight
                options={searchBarInfo}
                groupBy={(option) => option.type}
                getOptionLabel={(option) => (option.type === "Catégories") ? option.name : option.articleTitle}
                renderInput={(params) => (
                    <TextField {...params}
                               onChange={getSearchBarInfo}
                               variant="outlined"
                               label="Recherchez ce que vous cherchez ici"
                    />
                )}
                renderOption={(option) => (
                    <span style={{cursor: "pointer"}}>
                        {(option.type === "Catégories")
                            ? <Link to='/category/' state={{id:option.idCategory}}>
                                {option.name}
                            </Link>
                            : <Link to='/article/' state={{id:option.idArticle}}>
                                {option.articleTitle}
                            </Link>
                        }
                    </span>
                )}
            />
        </div>
    );
}

function uniq(a) {
    let seen = {};
    return a.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
