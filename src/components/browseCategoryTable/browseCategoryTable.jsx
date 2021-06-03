import React, {useState, useEffect} from "react";
import './browseCategoryTable.module.css'
import axios from "axios";
import {Link} from "gatsby";

export default function BrowseCategoryTable() {
    /*
    * This component is shown in the index.js file and allow to list the principal categories and their articles.
    */
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async (url) => {
            const data = await axios.get(url)
            setData(data.data);
        };
        fetchData("/api/home")
    }, []);

    if (!data) {
        return (<div>
            <p>Loading Data</p>
        </div>)
    } else {

        let listArticle = [];
        let idArticle = [];
        data.map((dataElement, index) => {
            listArticle[index] = dataElement.titles.split(',')
            idArticle[index] = dataElement.idArticles.split(',')
        });

        return (
            data.map((dataElement, index) => (
                <ul>
                    <Link to={'/category/'} state={{id: dataElement.id, categoryName : dataElement.name}}>
                        <h3>{dataElement.name}</h3>
                    </Link>
                    {listArticle[index].slice(0,3).map((article, i) => (
                        <Link to='/article/'  hash={idArticle[index][i]} state={{articleId: idArticle[index][i], categoryName : dataElement.name}}>
                            <li>{article}</li>
                        </Link>
                    ))}
                </ul>
            ))
        )
    }
}
