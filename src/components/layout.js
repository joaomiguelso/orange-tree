import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/layout.css"

const Layout = ({ children, title }) => {
  return (
    <>
      <header>
        <div id="header" className="flex_space_between_row">
          <span>American Evolution</span>
          <Link to="/navigation_step1"><span className="gt-america-text">MENU</span></Link>
        </div>
      </header>
      <main>{children}</main>
      <footer id="footer" className="flex_space_between_row">
        <span className="gt-america-text">Share</span>
        <span className="ogg-roman-text">{title}</span>
        <span className="gt-america-text">Audio ON</span>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
