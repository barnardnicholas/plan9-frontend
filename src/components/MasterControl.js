import React, { Component, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "./Loading";
import * as api from "../api/api";

export default class MasterControl extends Component {
  state = {
    last_post: {},
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
                <button>Play</button>
                <button>Pause</button>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  <strong>Status:</strong> Playing
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
      .getLastPost()
      .then((lastPost) => {
        this.setState({ last_post: lastPost });
      })
      .catch((err) => {
        console.log(`ERROR: ${err}`);
      });
  }
}
