import "../styles/global.css"
import Layout from "../components/layout";
import React from "react";
import axios from "axios";

function fetchdata(){
    const res = axios({
        URL: "https://localhost:1337/api/v1/articles",
        Method :  "GET"
    });

    console.log(res);

}

export default function Article() {

    return (
        <Layout>
            <div id="articleContent">
                <p>hello</p>
            </div>
            <button onClick={fetchdata}>Click</button>

        </Layout>
    )


}

