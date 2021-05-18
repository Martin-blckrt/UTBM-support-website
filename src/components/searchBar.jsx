import {useEffect, useState} from "react";
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";


export default function SearchBar(props) {

    let listCategories = [];
    let listArticles = [];
    let indexCategories = [];
    let indexArticles = [];

    let [searchBarInfo, setSearchBarInfo] = useState([])

    const fetchSearchBarInfo = () => {
        fetch("api/searchBar").then((response) => {
            return response.json()
        }).then((res) => {
            for (let i = 0; i < res.length; i++) {

                listCategories[i] = res[i].name
                listArticles[i] = res[i].articleTitle
                indexCategories[i] = res[i].idCategory
                indexArticles[i] = res[i].idArticle
                /*
                searchBarInfo.push(res.data[i].name)
                searchBarInfo.push(res.data[i].articleTitle)*/
            }
            searchBarInfo = []
            let options = listCategories.concat(listArticles)
            options = uniq(options)

            indexCategories = uniq(indexCategories)
            indexArticles = uniq(indexArticles)
            let optionsIndex = indexCategories.concat(indexArticles)

            for (let i = 0; i < options.length; i++) {
                searchBarInfo.push(options[i])
            }

            setSearchBarInfo(searchBarInfo)
            console.log(searchBarInfo)
        })
    }

    return (
        <div>
            <Autocomplete
                style={{ width: 500 }}
                freeSolo
                autoComplete
                autoHighlight
                options={searchBarInfo}
                getOptionLabel={(option) => option.toString()}
                renderInput={(params) => (
                    <TextField {...params}
                               onChange={fetchSearchBarInfo}
                               variant="outlined"
                               label="Recherchez ce que vous cherchez ici"
                    />
                )}
            />
        </div>
    );
}

function uniq(a) {
    let seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
