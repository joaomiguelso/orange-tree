import React from "react"
import { Link } from "gatsby"
import { Player } from 'video-react';
import "../styles/video-react/video-react.scss"; // or import scss

import Layout from "../components/layout"

import "../styles/pages.scss"

const IndexPage = () => (
  <Layout title="Democracy. Diversity. Opportunity">
    <Player
      playsInline
      poster="/images/index_placeholder.png"
      src="https://embed-ssl.wistia.com/deliveries/456a9f531d806cb8987f184f45b9781f.mp4"
    />
  </Layout>
)

export default IndexPage
