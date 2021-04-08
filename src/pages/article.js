import "../styles/global.css"
import Layout from "../components/layout";
import React from "react";
import axios from "axios";


export default function Article() {


    function getarticle(){
        const res = axios.get("/api/article");
        console.log("res = ", res);
    }


    return (
        <Layout>
            <div id="articleContent">
                <p>hello</p>
                <button onClick={getarticle}>click</button>
            </div>
        </Layout>
    )


}

