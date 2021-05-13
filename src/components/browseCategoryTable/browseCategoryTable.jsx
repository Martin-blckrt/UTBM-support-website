import React, {useState, useEffect} from "react";
import './browseCategoryTable.css'
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
        data.map((dataElement, index) => listArticle[index] = dataElement.titles.split(','));
        return (
            data.map((dataElement, index) => (
                <ul>
                    <Link to='/category/' state={{id: dataElement.id}}>
                        <h3>{dataElement.name}</h3>
                    </Link>
                    {listArticle[index].map(article => (
                        <li>{article}</li>
                    ))}
                </ul>
            ))
        )
    }
}
