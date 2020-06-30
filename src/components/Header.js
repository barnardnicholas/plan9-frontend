import React, { Component, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Loading from "./Loading";

class Header extends Component {
  render() {
    return (
      <Suspense fallback={Loading}>
        <header>
          <h1>Plan 9 Frame-By-Frame</h1>
          <p>
            <button onClick={() => {}}>Sign Out</button>
          </p>
        </header>
      </Suspense>
    );
  }
}
export default Header;
