import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import plan9logo from "../assets/img/Plan9_InvadingSoon_White.svg";
// import plan9LogoColour from "../assets/img/Plan9FBF_Logo_Colour-01.svg";

export default function ComingSoon() {
  return (
    <Container>
      <Row
        style={{
          height: "80vh",
        }}
      >
        <Col
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <center>
            <img
              src={plan9logo}
              alt="Plan 9 From Outer Space"
              height="auto"
              width="100%"
              style={{ maxWidth: "300px" }}
            />
          </center>
        </Col>
      </Row>
    </Container>
  );
}
