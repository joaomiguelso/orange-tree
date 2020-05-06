import React from "react"
import "../styles/commemoration.scss"
import Layout from "../components/layout"

const Commemoration = ({ }) => (
  <Layout title="Democracy. Diversity. Opportunity">
    <div id="commemoration" className="fade-in flex_space_around_row">
      <div className="info_container">
        <h1>Commemoration of the First African Landing  </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sagittis nibh. Pellentesque scelerisque lacus metus, quis accumsan nibh scelerisque sed. Vivamus sed venenatis libero, vel lacinia diam. Etiam imperdiet lectus sed urna vestibulum iaculis. Nullam consequat placerat urna, ut pretium velit blandit eget. Curabitur sagittis vehicula aliquam. Pellentesque in maximus quam. Donec pharetra tellus nulla, vitae posuere est eleifend varius. Etiam ac massa mauris. In metus leo, ullamcorper non lorem vel, consectetur varius libero.</p>
        <p>Cras sagittis libero vel mauris eleifend, sit amet imperdiet justo auctor. Maecenas lacinia quis ex sed blandit. Vivamus tincidunt egestas dapibus. Donec orci metus, tincidunt ac gravida consequat, vulputate sit amet elit. Sed neque ligula, maximus sit amet sagittis ut, efficitur sed massa. Pellentesque et magna sed leo dictum venenatis. Mauris dapibus vel nibh sit amet maximus.</p>
      </div>
      <img id="commemoration_photo" src="/images/commemoration_photo.png" alt="alt" ></img>
    </div>
  </Layout>
)

export default Commemoration
