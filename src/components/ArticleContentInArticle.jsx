import React, {useEffect, useState} from "react";
import axios from "axios";
import {css} from "@emotion/react";

export default function ArticleContentInArticle(props) {

    let [articleInfos, setArticleInfos] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const articleInfos = await axios.get(url, {params: parameters})
            setArticleInfos(articleInfos.data);
        };

        fetchData("/api/getArticleInfo", {idArticle: props.articleState.id})
    }, [props.articleState]);

    if (!articleInfos) {
        return (
            <div>
                <p>loading articles</p>
            </div>
        )
    } else {
        console.log('data of this article = ', articleInfos)
        return (
            <div css={articlesArticlesStyle} id="articlesArticle">
                {

                    <div css={articleStyle} id={'titre' + articleInfos[0].articleTitle}>
                        <h2>{articleInfos[0].articleTitle}</h2>
                    </div>
                }
            </div>
        )
    }
}
const articleStyle = css`
  box-shadow: 0 0 50px rgba(63, 139, 255, .20);
  padding: 15px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  height: 200px;
  margin: 20px;
`;

const articlesArticlesStyle = css`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
