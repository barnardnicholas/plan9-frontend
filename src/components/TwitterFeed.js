import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function TwitterFeed() {
  return (
    <Container>
      <Row>
        <Col>
          <a
            className="twitter-timeline"
            data-width="100%"
            data-height="100%"
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
