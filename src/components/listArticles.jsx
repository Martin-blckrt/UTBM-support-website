import React from "react";
import {Link} from "gatsby";

export default function listArticles() {
    if (!data) {
        return (
            <div>
                ca marche po
            </div>
        )
    } else {
        return (
            data.map(dataElement => (
                    <ul>
                        <Link to="l'article en question">
                            <h3>{dataElement.titre}</h3>
                        </Link>

                        <li>{dataElement.tldr}</li>
                    </ul>
                )
            )
        )
    }
}