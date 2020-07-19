import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import plan9logo from "../assets/img/Plan9FBF_Logo_Colour-01.png";
import nodejslogo from "../assets/img/nodejs-logo.svg";
import cronlogo from "../assets/img/cron-logo.png";
import firebaselogo from "../assets/img/firebase-logo.svg";
import reactlogo from "../assets/img/react-logo.svg";
import twitterlogo from "../assets/img/twitter-logo.svg";
// import plan9LogoColour from "../assets/img/Plan9FBF_Logo_Colour-01.svg";

export default function ComingSoon() {
  return (
    <section className="about">
      <a href="https://twitter.com/Plan9FBF">
        <img
          src={plan9logo}
          alt="Plan 9 From Outer Space"
          height="auto"
          width="100%"
          style={{
            maxWidth: "3400px",
            marginBottom: "40px",
            border: "8px solid #ffffff",
          }}
        />
      </a>
      <p>
        Welcome to Plan 9 Frame-by-Frame, a lockdown Twitter bot project
        programmed by Nick Barnard.
      </p>
      <p>
        Plan 9 Frame-by-Frame began as an experiment to see if it would be
        possible to screen a movie one frame at a time on Twitter, possibly
        breaking a record for the slowest movie screening in history. You can
        see the most recent tweets on this page, or view the live screening at{" "}
        <a href="https://twitter.com/Plan9FBF">https://twitter.com/Plan9FBF</a>
      </p>
      <Container>
        <Row className="tech-logos">
          <Col className="tech-logo-container">
            <a href="https://nodejs.org/">
              <img
                src={nodejslogo}
                alt="Node JS"
                height="auto"
                width="100%"
                style={{ maxWidth: "300px", margin: "20px" }}
              />
            </a>
          </Col>
          <Col className="tech-logo-container">
            <a href="https://reactjs.org/">
              <img
                src={reactlogo}
                alt="React JS"
                height="auto"
                width="100%"
                style={{ maxWidth: "300px", margin: "20px" }}
              />
            </a>
          </Col>
          <Col className="tech-logo-container">
            <a href="https://firebase.google.com/">
              <img
                src={firebaselogo}
                alt="Google Firebase"
                height="auto"
                width="100%"
                style={{ maxWidth: "300px", margin: "20px" }}
              />
            </a>
          </Col>
          <Col className="tech-logo-container">
            <a href="https://twitter.com/Plan9FBF">
              <img
                src={twitterlogo}
                alt="Twitter"
                height="auto"
                width="100%"
                style={{ maxWidth: "300px", margin: "20px" }}
              />
            </a>
          </Col>
          <Col className="tech-logo-container">
            <a href="https://cron-job.org/">
              <img
                src={cronlogo}
                alt="Cron Job"
                height="auto"
                width="100%"
                style={{ maxWidth: "300px", margin: "20px" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
      <p>
        Plan 9 Frame-By-Frame was built using Node.js, React JS, Google
        Firebase, Cron-job.org and, of course, Twitter. You can view the source
        code for the app on GitHub at the following links:
      </p>
      <p>
        <a href="https://github.com/barnardnicholas/plan9-frontend">
          https://github.com/barnardnicholas/plan9-frontend
        </a>
      </p>
      <p>
        <a href="https://github.com/barnardnicholas/plan9-bot">
          https://github.com/barnardnicholas/plan9-bot
        </a>
      </p>
      <p>
        Ed Wood's black-and-white B-Movie <i>Plan 9 From Outer Space</i> has
        found a substantial cult following in the decades since its release on
        22nd July 1959, and is widely regarded to be endearingly bad. It is
        also, crucially for this project, in the Public Domain, meaning that
        nobody is considered to own the intellectual property rights to the
        movie. This makes it an ideal movie for this project.
      </p>
    </section>
  );
}
