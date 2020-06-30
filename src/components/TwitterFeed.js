import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function TwitterFeed() {
  return (
    <Container>
      <Row>
        <Col>
          <a
            className="twitter-timeline"
            data-width="300"
            data-height="550"
            data-dnt="true"
            data-theme="dark"
            href="https://twitter.com/Plan9FBF?ref_src=twsrc%5Etfw"
          >
            Tweets by Plan9FBF
          </a>
        </Col>
      </Row>
    </Container>
  );
}
