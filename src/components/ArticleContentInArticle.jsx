import React, {useEffect, useState} from "react";
import axios from "axios";
import {css} from "@emotion/react";
import MDEditor from "@uiw/react-md-editor";

export default function ArticleContentInArticle(props) {

    let [articleInfos, setArticleInfos] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const articleInfos = await axios.get(url, {params: parameters})
            setArticleInfos(articleInfos.data);
        };

        fetchData("/api/getArticleInfo", {idArticle: props.articleState.id})
        console.log("res : ",articleInfos)
    }, [props.articleState]);

    if (!articleInfos) {
        return (
            <div>
                <p>loading articles</p>
            </div>
        )
    } else {

        return (
            articleInfos.map((dataElement, i) => (
                <div css={articlesArticlesStyle} id="articlesArticle">
                    {
                        <div css={articleStyle} id={'titre' + articleInfos[0].id}>
                            <h1>{articleInfos[0].articleTitle}</h1>
                            <p>Cet article concerne : {articleInfos[0].type}.</p>

                            {/* A UTILISER POUR AFFICHER LE CONTENU DE L'ARTICLE
                            <MDEditor.Markdown source={MDvalue}/>*/}
                        </div>
                    }
                </div>
                )
            )
        )
    }
}

const articleStyle = css`
  box-shadow: 0 0 50px rgba(63, 139, 255, .20);
  padding: 15px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  height: 800px;
  margin: 20px;
`;

const articlesArticlesStyle = css`
  display: flex;
  float: left;
  width: 50%;
  justify-content: space-around;
  flex-wrap: wrap;
`;
