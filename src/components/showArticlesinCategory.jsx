import React, {useState, useEffect} from "react";
import axios from "axios";
import {css} from "@emotion/react";
import {Link} from "gatsby";
import {colors} from "@material-ui/core";

export default function ShowArticlesinCategory(props) {

    const [articlesList, setArticlesList] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const articlesList = await axios.get(url, {params: parameters})
            setArticlesList(articlesList.data);
        };
        console.log('id category in show articles : ', props.idCategory)
        fetchData("/api/getArticlesOfCategory", {idCategory: props.idCategory})
    }, []);

    if (!articlesList) {
        return (
            <div>
                <p>Loading Articles</p>
            </div>
        )
    } else {

        return (
            <div css={articlesContainerStyle} id="articlesContainer">
                {
                    articlesList.map((article, index) => (
                            <Link to={`/article/`} state={{id: article.id}}>

                                <div css={articleStyle} id={'article' + index}>
                                    <h2 css={headingStyle}>{article.articleTitle}</h2>
                                    <p css={tldrStyle}>{article.tldr}</p>
                                </div>

                            </Link>
                        )
                    )
                }
            </div>

        )
    }
}

/*Style*/

const articleStyle = css`
  box-shadow: 0 0 50px rgba(63, 139, 255, .20);
  padding: 15px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
  height: 300px;
  width: 300px;
  margin: 20px;
`;

const articlesContainerStyle = css`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

`;

const headingStyle = css`
  font-weight: bold;
`
const tldrStyle = css`
  color: #6A6A6A;  
`