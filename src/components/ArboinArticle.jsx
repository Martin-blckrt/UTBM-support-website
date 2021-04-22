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

    console.log("arboCategoryInfos, ", arboCategoryInfos)
    console.log("arboArticleInfos, ", arboArticleInfos)


    // TODO. jsp pk mais check les log il fait chaque requete deux fois a la premiere y a que arbocategoryinfos qui est rempli l'autre est null puis a la deuxieme c'est bon c'est pour ca que dans mon if j'ai mis l'autre
    if (!arboArticleInfos) {
        return (
            <div>
                <p>loading arbo</p>
            </div>
        )
    } else {
        return (
            <div css={articlesArboStyle} id="categoryArbo">
                {arboCategoryInfos.map((category, i) => (
                    <div id = "categories">
                        <h3>{category.name}</h3>
                    </div>
                ))}
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
