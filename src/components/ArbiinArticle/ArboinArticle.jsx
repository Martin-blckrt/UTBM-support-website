import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "gatsby";
//STYLE IMPORT
import * as arboStyle from './ArboinArticle.module.css'


export default function ArboInArticle(props) {


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
            <div className={arboStyle.articleArboStyle} id="categoryArbo">

                <h1>Catégories</h1>

                {arboCategoryInfos.map((category, i) => (
                    <div id="categories">
                        <Link to='/category/' state={{id: category.id, categoryName: category.name}}>
                            <h3>{category.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}


