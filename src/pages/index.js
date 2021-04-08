import * as React from "react"
import {Link} from "gatsby"
import "../styles/global.css"
import Layout from "../components/layout";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
        <Layout>
          <Link to="/about/">about</Link> <br/>
          <Link to="/article/">article</Link>
        </Layout>

    </main>
  )
}

export default IndexPage
