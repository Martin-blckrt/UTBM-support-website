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
    });
    // think of Axios Progress Bar if we waant to animate dataloading

    if (!data) {
        return (<div>
            <p>Loading data</p>
        </div>)
    } else {

        return (

            data.map(categorie =>
                <ul>
                    <h3>{categorie.name}</h3>
                    <li>{categorie.titles}</li>
                </ul>
            )

        )
    }
}