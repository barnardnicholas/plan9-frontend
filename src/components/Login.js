import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as api from "../api/api";
import firebase from "firebase";

export default class Login extends Component {
  state = {
    emailInput: "",
    passwordInput: "",
    displayLoginForm: false,
  };

  handleChangeInput = (event) => {
    const { id, value } = event.target;
    const newData = {};
    newData[id] = value;
    this.setState(newData);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { emailInput, passwordInput } = this.state;
    const { confirmLogin } = this.props;
    api
      .userSignIn(emailInput, passwordInput)
      .then((user) => {
        confirmLogin(user.uid);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleRequestLoginForm = () => {
    this.setState({ displayLoginForm: true });
  };

  render() {
    if (this.state.displayLoginForm) {
      return (
        <Container
          style={
            {
              // position: "absolute",
              // top: "20px",
              // backgroundColor: "#161616",
              // zIndex: 10,
            }
          }
        >
          <Row>
            <Col>
              <h2>Please enter your login details to continue</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <form
                onSubmit={(e) => {
                  this.handleSubmit(e);
                }}
              >
                <Container className="no-padding">
                  <Row>
                    <Col xs={4} md={2}>
                      <label>Email address:</label>
                    </Col>
                    <Col>
                      <input
                        id="emailInput"
                        type="text"
                        onChange={this.handleChangeInput}
                        value={this.state.emailInput}
                      ></input>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={2}>
                      <label>Password:</label>
                    </Col>
                    <Col>
                      <input
                        id="passwordInput"
                        type="password"
                        onChange={this.handleChangeInput}
                        value={this.state.passwordInput}
                      ></input>
                    </Col>
                  </Row>
                  <Row>
                    <Col></Col>
                  </Row>
                  <Row>
                    <Col>
                      <input type="submit" value="Submit"></input>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <Row>
            <Col>
              <center>
                <button onClick={this.handleRequestLoginForm}>Login</button>
              </center>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}
