import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "../styles/pages.scss"

const IndexPage = () => (
  <Layout title="Democracy. Diversity. Opportunity">
    <Link to="/landing"><div id="index-background"></div></Link>
  </Layout>
)

export default IndexPage
