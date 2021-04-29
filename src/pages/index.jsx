import * as React from "react"
import "../styles/index.css"
import Header from "../components/header";
import BrowseCategoryTable from "../components/browseCategoryTable";


const IndexPage = () => {

    /*
    * This view is listing all categories and their 3 first articles present in the database.
    */

    return (
        <main>
            <title>Home Page</title>
            <Header headerOpacity={0} boxShadowOpacity={0}/>
            <h1>Rechercher un tutoriel</h1>

            <h2><strong>Parcourir</strong> les catégories</h2>

            <div id={'category-list-container'}>
                <BrowseCategoryTable/>
            </div>

        </main>
    )
}

export default IndexPage
