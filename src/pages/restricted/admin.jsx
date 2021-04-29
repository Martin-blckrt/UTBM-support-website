import "../../styles/index.css"
import React from "react";
import Header from "../../components/header";
import {css} from "@emotion/react";
import AdminHome from "../../components/adminHome";

export default function Admin(props) {
    return (
        <div id="admin">
            <title>Admin</title>
            <Header headerOpacity={1} boxShadowOpacity={.25}/>
            <AdminHome/>
        </div>
    )
}
