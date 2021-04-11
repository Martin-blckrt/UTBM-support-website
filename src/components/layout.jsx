import React from "react"
import Header from "./header"

const Layout = ({children}) => (
    <>
        <Header headerOpacity={1} boxShadowOpacity={.25}/>
        {children}
    </>
)
export default Layout