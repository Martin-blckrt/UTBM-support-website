import React from "react"

const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}

export default function Header(props) {
    return <h1 style={headingStyles}>{props.text}</h1>
}