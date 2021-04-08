import "../styles/global.css"
import Layout from "../components/layout";
import React from "react";
import axios from "axios";


export default function Article() {


    function getArticle() {
        const res = axios.get("/api/article");
        console.log("res = ", res);
    }

    function writeData(){

        axios.post("/api/article", {title: "Mon article"})
            .then(response => {console.log('Success: ', response)})
            .catch(error => {console.log('Error: ', error)

        })
        ;


    }


    return (
        <Layout>
            <div id="articleContent">
                <p>hello</p>
                <button onClick={getArticle}>get</button>
                <button onClick={writeData}>post</button>
            </div>
        </Layout>
    )


}

