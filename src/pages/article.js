import "../styles/global.css"
import Layout from "../components/layout";
import React from "react";
import axios from "axios";


export default function Article() {


    const res = axios.get("/api/articles");
    console.log("res = ", res);

    return (
        <Layout>
            <div id="articleContent">
                <p>hello</p>

            </div>
        </Layout>
    )


}

