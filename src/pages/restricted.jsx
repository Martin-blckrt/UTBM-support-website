import React from "react"
import PrivateRoute from "../components/privateRoute"
import Admin from "./privileged/admin"
import Login from "./login"
import {Router} from "@reach/router"

const App = () => (
    <Router>
        <PrivateRoute path="/restricted/admin" component={Admin} />
        <Login path="/restricted/login" />
    </Router>
)

export default App
