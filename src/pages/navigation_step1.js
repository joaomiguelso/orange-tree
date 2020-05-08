import React from "react"
import "../styles/navigation.scss"
import Close from "../components/close"
import { Link } from "gatsby"

const NavigationStep1 = ({ }) => (

    <div className="navigation-step-1 fade-in">
        <div className="header flex_space_between_row">
            <Link to="/"><span className="gt-america-text">2019 Commemoration</span></Link>
            <Close />
        </div>
        <h1 className="ogg-roman-title">Arrival of the First English Women</h1>
        <h1 className="ogg-roman-title">Establishment of the First Legislature</h1>
        <Link to="/navigation_step2"><h1 className="ogg-roman-title">Arrival of the First Africans</h1></Link>
    </div>
)

export default NavigationStep1
