import * as React from "react"
import {Link} from "gatsby"
import "../styles/index.css"
import Header from "../components/header";
import BrowseCategoriesTable from "../components/browseCategoriesTable";
import axios from "axios";


// markup
const IndexPage = () => {

    return (
        <main>
            <title>Home Page</title>
            <Header headerOpacity={0} boxShadowOpacity={0}/>
            <h1>Rechercher un tutoriel</h1>

            <h2><strong>Parcourir</strong> les catégories</h2>

            <div id={'categories-list-container'}>
                <BrowseCategoriesTable/>
            </div>
            <Link to="/article/">article</Link>

        </main>
    )
}

export default IndexPage
