import React, { Component, Suspense } from "react";
import Loading from "./Loading";
import TwitterFeed from "./TwitterFeed";

export default class Tweets extends Component {
  render() {
    return (
      <Suspense fallback={Loading}>
        <div className="tweet-log">
          <h3>Tweets</h3>
          <TwitterFeed />
        </div>
      </Suspense>
    );
  }
}
