import * as React from "react"
import "../styles/global.css"
import Layout from "../components/layout";

export default function Article({data}){
        return(
            <Layout>
                <div id="articleContent">
                    <p>hello</p>
                    <button id="requestButton">Request data from server</button>
                </div>
                <div id="category">

                </div>

            </Layout>
        )

}


