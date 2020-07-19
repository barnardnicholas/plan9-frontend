import React, { Component, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
// import ComingSoon from "./components/ComingSoon";
import Loading from "./components/Loading";
import { Container, Row, Col } from "react-bootstrap";

// Import Firebase
import * as firebase from "firebase";
import Tweets from "./components/Tweets";

const renderLogin = (
  <Suspense fallback={Loading}>
    <Login />
  </Suspense>
);

export default class App extends Component {
  state = {
    currentUser: "",
    loginDisplay: true,
  };

  renderLeftColumn = () => {
    const { currentUser, loginDisplay } = this.state;
    if (currentUser) return <Dashboard />;
    else
      return (
        <>
          {/* <ComingSoon /> */}
          <About />
          <Login confirmLogin={this.confirmLogin} />
        </>
      );
  };

  renderLogin = () => {
    const { currentUser, loginDisplay } = this.state;
    if (loginDisplay) return;
    else return <></>;
  };

  requestLogin = () => {
    this.setState({ loginDisplay: true });
  };

  confirmLogin = (uid) => {
    this.setState({ loginDisplay: false, currentUser: uid });
  };

  render() {
    return (
      <div className="App">
        <h1 style={{ position: "absolute", visibility: "hidden" }}>
          Plan 9 Frame-By-Frame
        </h1>
        <Suspense fallback={Loading}>
          {/* <Header /> */}
          <Container>
            <Row>
              <Col
                xs={12}
                md={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {this.renderLeftColumn()}
              </Col>
              <Col xs={12} md={6}>
                <Tweets />
              </Col>
            </Row>
          </Container>
          {/* <ComingSoon /> */}
        </Suspense>
      </div>
    );
  }

  componentDidMount() {
    if (firebase.auth().currentUser) {
      this.setState({
        currentUser: firebase.auth().currentUser.uid,
        loginDisplay: false,
      });
    } else {
      this.setState({ currentUser: "", loginDisplay: false });
    }
  }
}
