import React, {useState, useEffect} from "react";
import '../styles/browseCategoriesTable.css'
import axios from "axios";

export default function BrowseCategoriesTable() {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (id) => {
            const data = await axios.get("/api/categories", {params: {id: id}})
            setData(data.data);
        };
        fetchData('home')
    }, []);
    // think of Axios Progress Bar if we waant to animate dataloading

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
                    <h3>{dataElement.name}</h3>
                    {listArticle[index].map(article => (
                        <li>{article}</li>
                    ))}
                </ul>
            ))
        )
    }
}