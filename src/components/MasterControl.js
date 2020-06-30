import React, { Component, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "./Loading";

export default class MasterControl extends Component {
  render() {
    return (
      <Suspense fallback={Loading}>
        <section className="master-control">
          <Container fluid>
            <Row>
              <Col>
                <p>
                  <strong>Status:</strong> Playing
                </p>
              </Col>
              <Col>
                <p>
                  <strong>Last post:</strong> 2020-01-01
                </p>
              </Col>
              <Col>
                <p>
                  <strong>Next post:</strong> 2020-01-01
                </p>
              </Col>
              <Col>
                <p>
                  <strong>Last Post:</strong> 2020-01-01
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </Suspense>
    );
  }
}
