import * as React from "react"
import Header from "../components/header";
import "../styles/global.css"


export default function Article({data}){
    return(
        <div>
            <Header/>
            <div id="articleContent">
                <p>hello</p>
            </div>
            <div id="category">

            </div>
        </div>
    )
}

