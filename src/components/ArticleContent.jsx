import React from "react";
import MDEditor from '@uiw/react-md-editor';

export default function ArticleContent(props) {
    console.log('props in article content : ', props)
    return (
        <div>
            <h1>{props.articleState.articleTitle}</h1>
            <MDEditor.Markdown source={props.articleState.content}/>
        </div>
    )
}


