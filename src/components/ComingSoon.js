import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import plan9poster from "../assets/plan9poster.jpg";

export default function ComingSoon() {
  return (
    <Container>
      <Row>
        <Col>
          <center>
            <img
              src={plan9poster}
              alt="Plan 9 From Outer Space"
              height="50%"
              width="auto"
              style={{ margin: "30px" }}
            />
            <h1>Coming Soon...</h1>
          </center>
        </Col>
      </Row>
    </Container>
  );
}
