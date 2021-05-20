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
        const fetchData = async (url) => {
            const data = await axios.get(url)
            setData(data.data);
        };

        fetchData(`/api/categories/${props.location.state.id}`)
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
                <Header headerOpacity={1} boxShadowOpacity={.25} arbo={props.location.state.categoryName}/>
                <ShowArticlesinCategory idCategory = {props.location.state.id} categoryName = {props.location.state.categoryName}/>
            </div>
        )
    }
}
