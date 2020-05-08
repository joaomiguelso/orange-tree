import React from "react"
import Layout from "../components/layout"
import "../styles/pages/chapter_navigation.scss"

const Commemoration = ({ }) => (
    <Layout title="Democracy. Diversity. Opportunity">
        <div id="chapter_navigation" className="fade-in">
        <div className="flex_space_around_row">
            <h1 className="cn_title">Arrival of the First Africans</h1>
            </div>
            <div className="cn_content_container flex_space_around_row">
                <div className="cn_info_container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur porttitor sapien, sit amet ullamcorper nisi tristique in. Maecenas tempor orci vitae odio blandit blandit. Etiam a enim vel tortor viverra fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    <p>Phasellus hendrerit ornare varius. Sed et facilisis dolor. Vestibulum convallis tortor quis scelerisque ultricies. </p>
                </div>
                <img id="commemoration_photo" src="/images/wheel.png" alt="alt" />
            </div>
        </div>
    </Layout>
)

export default Commemoration
