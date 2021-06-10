import "../styles/index.css"
import React, {useEffect, useState} from "react";
import Header from "../components/header";
import ArticleContent from "../components/ArticleContent/ArticleContent";
import axios from "axios";
import ArboInArticle from "../components/ArboinArticle/ArboinArticle";

export default function Article(props) {
    /*
    * Article view that show article content and tree view of the db.
    */
    let [articleData, setArticleData] = useState(null);
    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const articleData = await axios.get(url, {params: parameters})
            setArticleData(articleData.data);
        };
        fetchData(`/api/articles/${props.location.state.articleId}`)
    }, []);

    if (!articleData)
    {
        return (
            <div id="article">
                <title>Article</title>
                <Header headerOpacity={1} boxShadowOpacity={.25}/>
                <p>loading article</p>
            </div>
        )
    }
    else
    {

        return (
            <div id="article">
                <title>Article</title>
                <Header headerOpacity={1} boxShadowOpacity={.25} arbo={`${props.location.state.categoryName}`} arboArticle={`${articleData[0].articleTitle}`}/>
                <div className='articleContentContainer'>
                    <ArticleContent articleState = {articleData[0]}/>
                    <ArboInArticle articleState = {props.location.state}/>
                </div>
            </div>
        )
    }
}
