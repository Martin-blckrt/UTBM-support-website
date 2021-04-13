import "../styles/index.css"
import React from "react";
import axios from "axios";
import Header from "../components/header";


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

            <div id="articleContent">
                <Header headerOpacity={1} boxShadowOpacity={.25}/>
                <p>hello</p>
                <button onClick={getArticle}>get</button>
                <button onClick={writeData}>post</button>
            </div>
    )


}

