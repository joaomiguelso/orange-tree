import React from "react"
import { Link } from "gatsby"
import "../styles/components/close.scss"

const Close = () => (
    <Link to={"/"}>
        <span className="close">Close
        <img id="close_img" src="/images/close.png" alt="close" />
        </span>
    </Link>
)

export default Close
