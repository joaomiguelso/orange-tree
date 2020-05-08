import React from "react"
import { Link } from "gatsby"
import "../styles/pages/landing.scss"

const paintings = [
    { className: "first-painting", over_text: "Click to Explore", under_text: "Establishment of the First Legislature" },
    { className: "second-painting", over_text: "Click to Explore", under_text: "Establishment of the First Legislature" },
    { className: "third-painting", over_text: "Click to Explore", under_text: "Establishment of the First Legislature" },
]

const LandingPage = () => (
    <div id="landing" className="fade-in">
        {/* {paintings.map((painting) => <Link to="/">
            <div className={painting.className}>
                <h2 className="text-over ogg-roman">{painting.over_text}</h2>
                <h1 className="text-under ogg-roman">{painting.under_text}</h1>
            </div>
        </Link>
        )}*/}
    </div>
)

export default LandingPage
