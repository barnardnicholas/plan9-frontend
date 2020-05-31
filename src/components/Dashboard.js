import React from "react";
import { MyContext } from "../Context";
import { Container, Row, Col } from "react-bootstrap";
import PostLog from "./PostLog";
import PostTest from "./PostTest";
import TweetTest from "./TweetTest";

export default function Dashboard() {
  return (
    <MyContext.Consumer>
      {(context) => {
        return (
          <main>
            <Container>
              <Row>
                <h2>Dashboard</h2>
              </Row>
              <Row>
                <Col>
                  <PostLog />
                  <PostTest />
                  <TweetTest />
                </Col>
              </Row>
            </Container>
          </main>
        );
      }}
    </MyContext.Consumer>
  );
}
