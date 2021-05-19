import "../styles/index.css"
import React, {useEffect, useState} from "react";
import Header from "../components/header";
import ArticleContentInArticle from "../components/ArticleContentInArticle";
import ArboInArticle from "../components/ArboinArticle";
import {css} from "@emotion/react";
import axios from "axios";

export default function Article(props) {
    /*
    * Article view that show article content and tree view of the db.
    */
    let [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (url) => {
            const data = await axios.get(url)
            setData(data.data);
        };

        fetchData(`/api/articles/${props.location.state.id}`)
    }, []);

    if (!data)
    {
        return (
            <div id="article">
                <title>Article</title>
                <Header headerOpacity={1} boxShadowOpacity={.25}/>
                <ArticleContentInArticle articleState = {props.location.state}/>
                <ArboInArticle articleState = {props.location.state}/>
            </div>
        )
    }
    else
    {
        return (
            <div id="article">
                <title>Article</title>
                <Header headerOpacity={1} boxShadowOpacity={.25} arbo={`${data[0].name}-->${data[0].articleTitle}`}/>
                <ArticleContentInArticle articleState = {props.location.state}/>
                <ArboInArticle articleState = {props.location.state}/>
            </div>
        )
    }
}
