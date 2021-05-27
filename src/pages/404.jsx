import * as React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"

// styles
const headingStyle = css`
  margin-top: 0;
  margin-bottom: 64px;
  max-width: 320px;
  color: blue;
  &:hover {
    text-decoration: underline;
  }
  
`
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const paragraphStyles = {
  marginBottom: 48,
}


// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 css={headingStyle}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
