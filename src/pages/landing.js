import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "../styles/pages.scss"

const LandingPage = () => (
    <Layout title="Democracy. Diversity. Opportunity">
        <div id="landing-background">
            <Link to="/">
                <div className="first-painting">
                    <h2 className="text-over ogg-roman">Click to Explore</h2>
                    <h1 className="text-under ogg-roman">Establishment of the First Legislature</h1>
                </div>
            </Link>
            <Link to="/">
                <div className="second-painting">
                    <h2 className="text-over ogg-roman">Click to Explore</h2>
                    <h1 className="text-under ogg-roman">Establishment of the First Legislature</h1>
                </div>
            </Link>
            <Link to="/">
                <div className="third-painting">
                    <h2 className="text-over ogg-roman">Click to Explore</h2>
                    <h1 className="text-under ogg-roman">Establishment of the First Legislature</h1>
                </div>
            </Link>
        </div>
    </Layout>
)

export default LandingPage
