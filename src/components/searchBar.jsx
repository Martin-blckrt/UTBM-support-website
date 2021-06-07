import React, {useEffect, useState} from "react";
import {TextField} from "@material-ui/core";
import axios from "axios";
import {Link} from "gatsby";
import {Autocomplete} from "@material-ui/lab";


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
        <div className={"searchContainer"}>
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
