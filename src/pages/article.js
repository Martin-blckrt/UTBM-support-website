import * as React from "react"
import Header from "../components/header";
import "../styles/global.css"
import requestDB from '../scripts/requestDB'

export default function Article({data}){
        return(
            <div>
                <Header/>
                <div id="articleContent">
                    <p>hello</p>
                    <button onClick={requestDB} id="requestButton">Request data from server</button>
                </div>
                <div id="category">

                </div>
            </div>
        )

}


