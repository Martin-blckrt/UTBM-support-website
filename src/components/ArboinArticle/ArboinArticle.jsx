import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "gatsby";
//STYLE IMPORT
import * as arboStyle from './ArboinArticle.module.css'


export default function ArboInArticle() {


    let [arboCategoryInfos, setArboCategoryInfos] = useState(null);

    useEffect(() => {
        const fetchCategoryData = async (url) => {
            const arboCategoryInfos = await axios.get(url)
            setArboCategoryInfos(arboCategoryInfos.data);
        };
        fetchCategoryData("/api/treeview")
    }, []);

    if (!arboCategoryInfos) {
        return (
            <div>
                <p>loading arbo</p>
            </div>
        )
    } else {
        return (
            <div className={arboStyle.articleArboStyle} id="categoryArbo">

                <h1 className={arboStyle.arboTitle}>Catégories</h1>

                {arboCategoryInfos.map((category) => (
                    <div className={arboStyle.categories}>
                        <svg width="11" height="12" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.25 18.25L9.75 10L1.25 1.75" stroke="#303030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <Link to='/category/' state={{id: category.id, categoryName: category.name}}>
                            <h3 className={arboStyle.titles}>{category.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}


