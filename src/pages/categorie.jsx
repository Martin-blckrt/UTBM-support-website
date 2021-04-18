import React, {useEffect, useState} from "react";
import Header from "../components/header";
import axios from "axios";
import ArticlesFromCategorie from "../components/articlesFromCategorie";

export default function Categorie(props) {

    let [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const data = await axios.get(url, {params:parameters})
            setData(data.data);
        };
        fetchData( "/api/categories",{id: props.location.state.id})
    }, []);

    if (!data) {
        return (<div>
            <Header headerOpacity={1} boxShadowOpacity={.25}/>
            <p>Loading data</p>
        </div>)
    } else {
        return (
            <div id="categorie">
                <Header headerOpacity={1} boxShadowOpacity={.25}/>
                <p>{data[0].name}</p>
                <ArticlesFromCategorie idCategorie={props.location.state.id}/>
            </div>
        )
    }
}