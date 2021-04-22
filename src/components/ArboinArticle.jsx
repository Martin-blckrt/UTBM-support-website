import React, {useEffect, useState} from "react";
import axios from "axios";
import {css} from "@emotion/react";

export default function ArboInArticle(props) {

    let [arboCategoryInfos, setArboCategoryInfos] = useState(null);

    useEffect(() => {
        const fetchCategoryData = async (url, parameters) => {
            const arboCategoryInfos = await axios.get(url, {params: parameters})
            setArboCategoryInfos(arboCategoryInfos.data);
        };
        fetchCategoryData("/api/getCategory", {id: 'arbo'})
    }, [props.articleState]);

    let [arboArticleInfos, setArboArticleInfos] = useState(null);

    useEffect(() => {
        const fetchArticleData = async (url, parameters) => {
            const arboArticleInfos = await axios.get(url, {params: parameters})
            setArboArticleInfos(arboArticleInfos.data);
        };
        fetchArticleData("/api/getArticlesOfCategory", {idArticle: props.articleState.id, id: 'arbo'})
    }, [props.articleState]);

    if (!arboArticleInfos) {
        return (
            <div>
                <p>loading arbo</p>
            </div>
        )
    } else {
        let categoryIndex;
        arboArticleInfos.map((article) => (
            categoryIndex = article.idCategory
        ))
        return (
            <div css={articlesArboStyle} id="categoryArbo">
                <h1>Catégories</h1>
                {arboCategoryInfos.map((category, i) => (
                    <div id = "categories">
                        <h3>{category.name}</h3>
                    </div>
                    // TODO faudrait faire un truc genre if i == categoryIndex then le bout de code en dessous
                ))}
                <h2>Articles de la même catégorie</h2>
                {arboArticleInfos.map((article) => (
                    <div id={'article' + article.articleTitle}>
                        <h4>{article.articleTitle}</h4>
                    </div>
                ))}
            </div>
        )
    }
}

const articlesArboStyle = css`
  box-shadow: 0 0 50px rgba(63, 139, 255, .20);
  padding: 15px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  height: 800px;
  margin: 20px;
  display: block;
  float: right;
  width: 40%;
  justify-content: space-around;
  flex-wrap: wrap;
`;
