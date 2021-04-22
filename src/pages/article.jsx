import "../styles/index.css"
import React from "react";
import Header from "../components/header";
import ArticleContentInArticle from "../components/ArticleContentInArticle";
import ArboInArticle from "../components/ArboinArticle";
import {css} from "@emotion/react";
export default function Article(props) {
    /*
    * Article view that show article content and tree view of the db.
    */

    return (
        <div id="article">
            <Header headerOpacity={1} boxShadowOpacity={.25}/>
            <ArticleContentInArticle articleState = {props.location.state}/>
            <ArboInArticle articleState = {props.location.state}/>
        </div>
    )
}
