import React, { Component } from 'react';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import "../styles/video-react/video-react.scss"; // or import scss
import Landing from "../components/landing";
import Layout from "../components/layout"

import "../styles/pages.scss"

export default class IndexPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  componentDidMount = () => {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({ player: state });
  }

  render() {
    const display_style = (this.state.player && this.state.player.ended ? "none" : "initial") || "initial";

    return (
      <Layout title="Democracy. Diversity. Opportunity">
        <div style={{ display: display_style }}>
          <Player
            ref={player => {
              this.player = player;
            }}
            playsInline
            poster="/images/Placeholder Image.png"
            src="https://embed-ssl.wistia.com/deliveries/456a9f531d806cb8987f184f45b9781f.mp4"
          >
            <ControlBar autoHide={true} autoHideTime={1000} />
            <BigPlayButton position="center" />
          </Player>
        </div >
        {this.state.player && this.state.player.ended && <Landing />}
      </Layout >
    );
  }
}