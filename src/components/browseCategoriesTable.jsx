import React, {useState, useEffect} from "react";
import '../styles/browseCategoriesTable.css'
import axios from "axios";
import {Link} from "gatsby";

export default function BrowseCategoriesTable() {
    /*
    * This component is shown in the index.js file and allow to list the principal categories and their articles.
    */
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const data = await axios.get(url, {params:parameters})
            setData(data.data);
        };
        fetchData( "/api/getCategories",{id: 'home'})
    }, []);

    if (!data) {
        return (<div>
            <p>Loading data</p>
        </div>)
    } else {

        let listArticle = [];
        data.map((dataElement, index) => listArticle[index] = dataElement.titles.split(','));
        return (
            data.map((dataElement,index) => (
                <ul>
                    <Link to = '/categorie/' state={{id:dataElement.id}}>
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
