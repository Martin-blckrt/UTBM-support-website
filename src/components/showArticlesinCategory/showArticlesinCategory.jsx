import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "gatsby";
import * as showArticles from './showArticlesinCategory.module.css'

export default function ShowArticlesinCategory(props) {

    const [articlesList, setArticlesList] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const articlesList = await axios.get(url, {params: parameters})
            setArticlesList(articlesList.data);
        };
        fetchData("/api/getArticlesOfCategory", {idCategory: props.idCategory})
    }, []);

    if (!articlesList) {
        const loadingList = [1, 2, 3, 4, 5, 6]
        return (
            <div className={showArticles.articlesBigContainer}>
                {
                    loadingList.map(() => (
                        <a>
                            <h2 className={showArticles.headingStyle}>Chargement...</h2>
                            <p className={showArticles.tldrStyle}>chargement...</p>
                        </a>
                    ))
                }
            </div>
        )
    } else {

        return (
            <div className={showArticles.articlesBigContainer}>
                {
                    articlesList.map((article) => (
                            <Link to={`/article/`}
                                  state={{articleId: article.id, categoryName: props.categoryName}}
                                  className={showArticles.articleContainer}>

                                <h2 className={showArticles.headingStyle}>{article.articleTitle}</h2>
                                <p className={showArticles.tldrStyle}>{article.tldr}</p>
                            </Link>

                        )
                    )
                }
            </div>

        )
    }
}





