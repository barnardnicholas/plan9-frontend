import React, { Component, Suspense } from "react";
import { MyContext } from "../Context";
import Loading from "./Loading";

export default class Tweets extends Component {
  render() {
    return (
      <Suspense fallback={Loading}>
        <MyContext.Consumer>
          {(context) => {
            return (
              <div className="tweet-log">
                <h3>Tweets</h3>
              </div>
            );
          }}
        </MyContext.Consumer>
      </Suspense>
    );
  }
}
