import React, {useState, useEffect} from "react";
import '../styles/browseCategoriesTable.css'
import axios from "axios";

export default function BrowseCategoriesTable() {

    const [data, setData] = useState(null);

    const fetchData = async () => {
        const id = '*';
        const newData = await axios.get("/api/categories", {params: {id: id}})
        setData(newData.data);
    };

    useEffect(() => {
        fetchData();
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
                    <li>Hello</li>
                    <li>Hello</li>
                    <li>Hello</li>
                </ul>
            )

        )
    }
}