import React from "react"
import PropTypes from "prop-types"

import "../styles/layout.css"
import "../styles/flexbox.css"

const Layout = ({ children, title }) => {
  return (
    <>
      <header>
        <div id="header" className="flex_space_between_row">
          <span>American Evolution</span>
          <span>Menu</span>
        </div>
      </header>
      <main>{children}</main>
      <footer id="footer" className="flex_space_between_row">
        <span>Share</span>
        <span>{title}</span>
        <span>Audio On</span>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
