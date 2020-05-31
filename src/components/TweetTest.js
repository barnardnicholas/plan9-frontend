import React from "react";
import timestamp from "timestamp";
import * as utils from "../utils/utils";
import * as twitter from "../utils/twitter";

export default function TweetTest() {
  const handleTestTweet = () => {
    const time = timestamp();
    const formattedTime = utils.formatTimeStamp(time);
    const status = `TEST TWEET = ${formattedTime}`;
    twitter.postTestTweet(status);
  };
  return <button onClick={handleTestTweet}>Post Test Tweet (Text only)</button>;
}
