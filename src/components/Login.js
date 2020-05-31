import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MyProvider, MyContext } from "../Context";
import * as api from "../api/api";

export default class Login extends Component {
  state = {
    emailInput: "",
    passwordInput: "",
  };

  handleChangeInput = (event) => {
    const { id, value } = event.target;
    const newData = {};
    newData[id] = value;
    this.setState(newData);
  };

  handleSubmit = () => {
    const { emailInput, passwordInput } = this.state;

    api.userSignIn(emailInput, passwordInput);
  };

  render() {
    return (
      <MyContext.Consumer>
        {(context) => {
          const handleSubmitLogin = (event) => {
            event.preventDefault();
            const { emailInput, passwordInput } = this.state;
            const clientCB = (user) => {
              if (user.hasOwnProperty("uid")) {
                console.log("handleSubmitLogin success");
              }
            };
            context.logInAsUser(emailInput, passwordInput, clientCB);
          };
          const { code, message } = context.state.signInError;

          const displayError = (
            <p>
              <i>{code}</i> - {message}
            </p>
          );

          return (
            <Container>
              <Row className="flex-horizontal justify-start">
                <Col>
                  <h1 className="graphik-semibold-web gradient-text">
                    Plan 9 Frame-By-Frame
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2>Please enter your login details to continue</h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <form
                    onSubmit={(e) => {
                      handleSubmitLogin(e);
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
                        <Col>
                          {context.state.signInError.code ? displayError : null}
                        </Col>
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
        }}
      </MyContext.Consumer>
    );
  }
}
