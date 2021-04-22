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
        let listSubsection = [];
        let listSubtitle = [];
        articleInfos.map((dataElement, index) => {
            listSubtitle[index] = dataElement.subtitle.split(',')
            listSubsection[index] = dataElement.subsection.split(',')
            // ATTENTION CA BUG ICI OU PAS SELON DANS QUELLE CATEGORIE L'ARTICLE EST
            console.log(listSubtitle)
        });

        return (
            articleInfos.map((dataElement, i) => (
                <div css={articlesArticlesStyle} id="articlesArticle">
                    {
                        <div css={articleStyle} id={'titre' + articleInfos[0].id}>
                            <h1>{articleInfos[0].articleTitle}</h1>
                            <p>Cet article concerne : {articleInfos[0].type}.</p>

                            {listSubtitle[i].map((subtitle, index) => (
                                <div>
                                <h2>{subtitle}</h2>
                                <p>{listSubsection[i][index]}</p>
                                </div>
                            ))}
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
  justify-content: space-around;
  flex-wrap: wrap;
`;
