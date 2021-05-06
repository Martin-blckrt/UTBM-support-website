import BrowseCategoryTable from "../browseCategoryTable/browseCategoryTable";
import * as React from "react";
import './home.module.css'

export default function Home() {
    return (
        <div id={'home'}>
            <title>Home Page</title>

            <h1>Rechercher un tutoriel</h1>

            <h2><strong>Parcourir</strong> les catégories</h2>

            <div className='categories-container'>
                <BrowseCategoryTable/>
            </div>
        </div>
)
}