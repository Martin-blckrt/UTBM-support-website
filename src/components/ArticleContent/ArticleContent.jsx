import React from "react";
import MDEditor from '@uiw/react-md-editor';
import * as ArticleContentStyle from './ArticleContent.module.css'

export default function ArticleContent(props) {
    console.log('props in article content : ', props)
    return (
        <div className={ArticleContentStyle.ArticleContent}>
            <h1>{props.articleState.articleTitle}</h1>
            <MDEditor.Markdown source={props.articleState.content}/>
        </div>
    )
}


