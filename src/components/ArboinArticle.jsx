import React, {useEffect, useState} from "react";
import axios from "axios";
import {css} from "@emotion/react";

export default function ArboInArticle(props) {

    let [arboInfos, setArboInfos] = useState(null);

    useEffect(() => {
        const fetchData = async (url, parameters) => {
            const arboInfos = await axios.get(url, {params: parameters})
            setArboInfos(arboInfos.data);
        };
        fetchData("/api/getCategory", {id: 'arbo'})
        fetchData("api/getArticlesOfCategory", {idCategory: props.articleState.idCategory})
    }, [props.articleState]);

    console.log(arboInfos)
    if (!arboInfos) {
        return (
            <div>
                <p>loading articles</p>
            </div>
        )
    } else {

    }
}
