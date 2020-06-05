import React, { Suspense } from "react";
import { MyContext } from "../Context";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "./Loading";
import PostTest from "./PostTest";
import TweetTest from "./TweetTest";
import RepeatTest from "./RepeatTest";

export default function UtilsPanel() {
  return (
    <Suspense fallback={Loading}>
      <MyContext.Consumer>
        {(context) => {
          return (
            <section>
              <Container>
                <Row>
                  <Col>
                    <h2>Utilities</h2>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <PostTest />
                  </Col>
                  <Col>
                    <TweetTest />
                  </Col>
                  <Col>
                    <RepeatTest />
                  </Col>
                </Row>
              </Container>
            </section>
          );
        }}
      </MyContext.Consumer>
    </Suspense>
  );
}
