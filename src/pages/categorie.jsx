import React, {useEffect, useState} from "react";
import Header from "../components/header";
import axios from "axios";
import ShowArticlesinCategorie from "../components/showArticlesinCategorie";

export default function Categorie(props) {
    /*
    * This view is listing all articles from a categorie.
    */
    let [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const data = await axios.get(url, {params: parameters})
            setData(data.data);
        };
        fetchData("/api/categories", {id: props.location.state.id});
    }, []);

    if (!data) {
        return (
            <div>
                <Header headerOpacity={1} boxShadowOpacity={.25}/>
                <p>Loading data</p>
            </div>
        )
    } else {
        return (
            <div id="categorie">
                <Header headerOpacity={1} boxShadowOpacity={.25}/>
                <p>{data[0].name}</p>
                <ShowArticlesinCategorie idCategory={props.location.state.id}/>
            </div>
        )
    }
}
