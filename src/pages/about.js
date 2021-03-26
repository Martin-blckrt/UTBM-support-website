import React from "react"
import Cards from "../components/cards";

export default function About() {
    return (
        <div>
            <Cards key={1}
                   title={"This is the title"}
                   description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                   "Aliquet congue curabitur morbi odio eget ut fringilla sit varius. Pharetra justo at eu massa libero, " +
                   "amet ac."}/>
        </div>
    )
}