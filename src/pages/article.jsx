import "../styles/index.css"
import React, {useEffect, useState} from "react";
import Header from "../components/header";
import axios from "axios";
import ShowArticleinArticle from "../components/showArticleinArticle";


export default function Article(props) {

    /*
    function getArticle() {
        const res = axios.get("/api/article");
        console.log("res = ", res);
    }

    function writeData(){

        axios.post("/api/article", {title: "Mon article"})
            .then(response => {console.log('Success: ', response)})
            .catch(error => {console.log('Error: ', error)

        })
        ;
    }
    */
    let [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const data = await axios.get(url, {params:parameters})
            setData(data.data);
        };
        fetchData( "/api/articles",{idArticle: props.location.state.id, id: 'article'})
    }, []);

    if (!data) {
        return (<div>
            <Header headerOpacity={1} boxShadowOpacity={.25}/>
            <p>Loading data</p>
        </div>)
    } else {
        return (
            <div id="article">
                <Header headerOpacity={1} boxShadowOpacity={.25}/>
                <p>{data[0].title}</p>
                <ShowArticleinArticle idArticle={props.location.state.id}/>
            </div>
        )
    }
}

