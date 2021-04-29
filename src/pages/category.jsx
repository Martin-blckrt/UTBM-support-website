import React, {useEffect, useState} from "react";
import Header from "../components/header";
import axios from "axios";
import ShowArticlesinCategory from "../components/showArticlesinCategory";

export default function Category(props) {
    /*
    * This view is listing all articles from a categorie.
    */
    let [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const data = await axios.get(url, {params: parameters})
            setData(data.data);
        };

        fetchData("/api/getCategory", {id: props.location.state.id})
    }, []);

    if (!data) {
        return (
            <div>
                <title>Catégorie - Chargement</title>
                <Header headerOpacity={1} boxShadowOpacity={.25}/>
                <p>Loading data</p>
            </div>
        )
    } else {
        return (
            <div id="category">
                <title>Catégorie</title>
                <Header headerOpacity={1} boxShadowOpacity={.25}/>
                <p>{data[0].name}</p>
                <ShowArticlesinCategory idCategory = {props.location.state.id}/>
            </div>
        )
    }
}
