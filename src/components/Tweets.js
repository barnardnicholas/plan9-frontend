import React, { Component, Suspense } from "react";
import Loading from "./Loading";

export default class Tweets extends Component {
  render() {
    return (
      <Suspense fallback={Loading}>
        <div className="tweet-log">
          <h3>Tweets</h3>
        </div>
      </Suspense>
    );
  }
}
