import React, {useEffect, useState} from "react";
import axios from "axios";

export default function listArticles(props) {
    /*let [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const data = await axios.get(url, {params: parameters})
            setData(data.data);
        };
        fetchData("/api/articles", {idCategorie: props.location.state.idCategorie})
    }, []);
    console.log(data)

    if (!data) {
        console.log("i'm in if", props);
        return (
            <div id="listArticles">
                <p>loading articles</p>
            </div>
        )
    } else {
*/
        console.log("i'm in else", props);
        return (
            /*data.map(article => (
                    <div>
                        <h3>{article.titre}</h3>
                        <p>{article.tldr}</p>
                    </div>
                )
            )*/
            <div>
                <p>Hello im in the list article</p>

            </div>
        )

}