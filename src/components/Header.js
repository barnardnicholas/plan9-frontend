import React, { Component, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "./Loading";
import * as api from "../api/api";

class Header extends Component {
  render() {
    return (
      <Suspense fallback={Loading}>
        <header>
          <Container>
            <Row>
              <Col>
                <h1>PLAN 9 FROM OUTER SPACE</h1>
                <p>
                  <button
                    onClick={() => {
                      api.userSignOut();
                    }}
                  >
                    Sign Out
                  </button>
                </p>
              </Col>
            </Row>
          </Container>
        </header>
      </Suspense>
    );
  }
}
export default Header;
