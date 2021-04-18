import React, {useState, useEffect} from "react";
import axios from "axios";
import {css} from "@emotion/react";


export default function ArticlesFromCategorie(props) {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const data = await axios.get(url, {params: parameters})
            setData(data.data);
        };
        fetchData("/api/articles", {idCategorie: props.idCategorie})
    }, []);

    if (!data) {
        return (<div>
            <p>Loading data</p>
        </div>)
    } else {
        return (
            <div css={articlesContainerStyle} id="articlesContainer">
                {
                    data.map((article, index) => (
                            <div css={articleStyle} id={'article' + index}>
                                <h2>{article.titre}</h2>
                                <p>{article.tldr}</p>
                            </div>
                        )
                    )
                }
            </div>

        )
    }
}


const articleStyle = css`
  box-shadow: 0 0 50px rgba(63, 139, 255, .20);
  padding: 15px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  height: 200px;
  margin: 20px;
`;

const articlesContainerStyle = css`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  
`;