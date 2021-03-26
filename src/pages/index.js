import * as React from "react"
import {Link} from "gatsby"
import "../styles/global.css"

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>

        <Link to="/about/">about</Link> <br/>
        <Link to="/contact/">contact</Link> <br/>
        <Link to="/article/">article</Link>

    </main>
  )
}

export default IndexPage
