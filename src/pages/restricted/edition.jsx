import "../../styles/index.css"
import React from "react";
import Header from "../../components/header";
import {css} from "@emotion/react";

export default function Admin(props) {
    return (
        <div id="admin">
            <Header headerOpacity={1} boxShadowOpacity={.25}/>
            <p>EDITION ARTICLE</p>
        </div>
    )
}
