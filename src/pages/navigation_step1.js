import React from "react"
import "../styles/navigation.scss"
import { Link } from "gatsby"

const NavigationStep1 = ({ }) => (

    <div className="navigation-step-1 fade-in">
        <div className="header flex_space_between_row">
            <Link to="/"><span className="gt-america-text">American Evolution</span></Link>
            <Link to="/"><span className="gt-america-text">CLOSE X</span></Link>
        </div>
        <Link to="/navigation_step2"><h1 className="ogg-roman-title">Arrival of the First English Women</h1></Link>
        <h1 className="ogg-roman-title">Establishment of the First Legislature</h1>
        <h1 className="ogg-roman-title">Arrival of the First Africans</h1>
    </div>
)

export default NavigationStep1
