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

                <h1 className={arboStyle.ArboTitle}>Catégories</h1>

                {arboCategoryInfos.map((category) => (
                    <div className={arboStyle.categories}>
                        <Link to='/category/' state={{id: category.id, categoryName: category.name}}>
                            <h3>{category.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}


