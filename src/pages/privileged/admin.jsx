import "../../styles/global.css"
import React from "react";
import Header from "../../components/header";

import AdminHome from "../../components/adminHome";
import {isLoggedIn} from "../../utils/auth";
import {Link} from "@material-ui/core";

export default function Admin() {
    if (isLoggedIn())
    {
        return (
            <div id="admin">
                <title>Admin</title>
                <Header headerOpacity={1} boxShadowOpacity={.25}/>
                <AdminHome/>
            </div>
        )
    }
    else {
        return (
            <p>
                EH SALE CHIEN CO TOI <Link to="/login">jsuis ta pute dsl</Link>
            </p>
        )
    }
}
