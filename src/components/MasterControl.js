import React, { Component, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "./Loading";
import * as api from "../api/api";

const buttonStyle = {
  backgroundColor: "transparent",
  color: "#ffffff",
};

const buttonStyleInvert = {
  backgroundColor: "#ffffff",
  color: "#000000",
};

export default class MasterControl extends Component {
  state = {
    last_post: {},
    playing: false,
  };

  handlePlay = () => {
    api
      .playMovie()
      .then(() => {
        this.setState({ playing: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handlePause = () => {
    api
      .stopMovie()
      .then(() => {
        this.setState({ playing: false });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const {
      filename,
      frame_number,
      frame_timestamp,
      image_number,
      log_date,
      log_output,
      log_timestamp,
      status,
    } = this.state.last_post;

    return (
      <Suspense fallback={Loading}>
        <section className="master-control">
          <Container fluid>
            <Row>
              <Col>
                <button
                  style={this.state.playing ? buttonStyleInvert : buttonStyle}
                  onClick={this.handlePlay}
                >
                  Play
                </button>
                <button
                  style={this.state.playing ? buttonStyle : buttonStyleInvert}
                  onClick={this.handlePause}
                >
                  Pause
                </button>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <strong>Status:</strong>{" "}
                  {this.state.playing ? "Playing" : "Paused"}
                </p>
              </Col>
              <Col>
                <p>
                  <strong>Last post:</strong> {log_date || "-"}
                </p>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Container>
        </section>
      </Suspense>
    );
  }

  componentDidMount() {
    api
      .getState()
      .then((state) => {
        this.setState({
          last_post: state.last_post,
          playing: state.is_playing,
        });
      })
      .catch((err) => {
        console.log(`ERROR: ${err}`);
      });
  }
}
