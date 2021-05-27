import React, {useEffect, useState} from "react";
import axios from "axios";
import {css} from "@emotion/react";
import {Link} from "gatsby";

export default function ArboInArticle(props) {

    console.log('props in arbo : ', props)
    let [arboCategoryInfos, setArboCategoryInfos] = useState(null);
    let [arboArticleInfos, setArboArticleInfos] = useState(null);

    useEffect(() => {
        const fetchCategoryData = async (url) => {
            const arboCategoryInfos = await axios.get(url)
            setArboCategoryInfos(arboCategoryInfos.data);
        };
        fetchCategoryData("/api/treeview")
    }, []);

    useEffect(() => {
        const fetchArticleData = async (url, parameters) => {
            const arboArticleInfos = await axios.get(url, {params: parameters})
            setArboArticleInfos(arboArticleInfos.data);
        };
            fetchArticleData("/api/getArticlesOfCategory", {idArticle: props.articleState.articleId, id: 'arbo'})
    }, []);

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
                    <div id="categories">
                        <Link to='/category/' state={{id: category.id, categoryName : category.name}}>
                            <h3>{category.name}</h3>
                        </Link>
                        {
                            i === categoryIndex - 1 &&
                            arboArticleInfos.map((article) => (
                                <div id={'article' + article.articleTitle}>

                                    <Link to='/article/' state={{articleId: article.id, categoryName : category.name}}>

                                        <h4>{article.articleTitle}</h4>

                                    </Link>

                                </div>
                            ))
                        }
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
