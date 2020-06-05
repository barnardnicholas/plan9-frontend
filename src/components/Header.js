import React, { Component, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MyContext } from "../Context";
import Loading from "./Loading";

class Header extends Component {
  render() {
    return (
      <Suspense fallback={Loading}>
        <MyContext.Consumer>
          {(context) => {
            const handleSignOut = (context) => {
              const cb = () => {
                console.log("Signed out");
              };
              context.logout(cb);
            };
            return (
              <header>
                <h1>Plan 9 Frame-By-Frame</h1>
                <p>
                  {`Logged in as ${
                    context.state.currentDisplayName ||
                    context.state.currentEmail
                  } `}
                  <button
                    onClick={() => {
                      handleSignOut(context);
                    }}
                  >
                    Sign Out
                  </button>
                </p>
              </header>
            );
          }}
        </MyContext.Consumer>
      </Suspense>
    );
  }
}
export default Header;
