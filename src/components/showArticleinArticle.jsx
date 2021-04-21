import React, {useEffect, useState} from "react";
import axios from "axios";
import {css} from "@emotion/react";

export default function showArticleinArticle(props) {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const data = await axios.get(url, {params: parameters})
            setData(data.data);
        };
        fetchData("/api/articles", {idArticle: props.location.state.idArticle, id: 'article'})
    }, []);

    if (!data) {
        return (
            <div>
                <p>loading articles</p>
            </div>
        )
    } else {
        return (
            <div css={articlesArticlesStyle} id="articlesArticle">
                {
                    data.map((titre) => (
                        <div css={articleStyle} id={'titre'+titre}>
                            <h2>{titre.title}</h2>
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

const articlesArticlesStyle = css`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;
