import React, {useEffect, useState} from "react";
import Header from "../components/header";
import {fetchData} from "../dbinteraction";

export default function Categorie(props) {

    let [data, setData] = useState(null);

    useEffect((uri, params) => {
        data = fetchData("/api/categories", {id : props.location.state.id})
        setData(data.data);
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
                <listArticles idCategorie = {props.location.state.id}/>
            </div>
        )
    }
}