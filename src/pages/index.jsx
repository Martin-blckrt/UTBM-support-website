import * as React from "react"
import "../styles/global.css"
import Header from "../components/header";
import {Router, Location} from "@reach/router"
import {TransitionGroup, CSSTransition} from "react-transition-group"
import Home from "../components/home/home";
import Login from "../components/login/login";
import Admin from "./privileged/admin";
import PrivateRoute from "../components/privateRoute";


const IndexPage = () => {
    /*
    * This view is listing all categories and their 3 first articles present in the database.
    * It also manage the router.
    */
    return (
        <main>
            <Header headerOpacity={1} boxShadowOpacity={0.2}/>
            <Location>
                {({location}) => (
                    <TransitionGroup className="transition-group">
                        <CSSTransition key={location.key} classNames="fade" timeout={500}>
                            <Router location={location} className="router">
                                <Home path="/"/>
                                <Login path="/restricted/login" />
                                <PrivateRoute path="/restricted/admin" component={Admin} />
                            </Router>
                        </CSSTransition>
                    </TransitionGroup>
                )}
            </Location>
        </main>
    )
}

export default IndexPage
