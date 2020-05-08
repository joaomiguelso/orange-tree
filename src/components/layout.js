import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../styles/layout.scss"

const Layout = ({ children, title }) => {
  return (
    <div className="layout_container flex_start_column">
      <header>
        <div id="header" className="flex_space_between_row">
          <Link to="/"><span className="gt-america-text">2019 Commemoration</span></Link>
          <Link to="/navigation_step1">
              <img id="menu" src="/images/menu.png" alt="menu" />
          </Link>
        </div>
      </header>
      <main id="main">{children}</main>
      <footer id="footer" className="flex_space_between_row">
        <span className="gt-america-text">Share</span>
        <span className="gt-america-text">Audio On
        </span>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
