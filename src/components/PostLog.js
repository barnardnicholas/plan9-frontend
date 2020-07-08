import React, { Component, Suspense } from "react";
import Loading from "./Loading";
import PostCard from "./PostCard";
import * as api from "../api/api";
import * as utils from "../utils/utils";

export default class PostLog extends Component {
  state = {
    posts: [],
  };

  render() {
    return (
      <Suspense fallback={Loading}>
        <div className="post-log">
          <h3>Post Log</h3>
          <ol>
            {this.state.posts.map((post, idx) => {
              return <PostCard post={post} key={`post_${idx}`} />;
            })}
          </ol>
        </div>
      </Suspense>
    );
  }

  componentDidMount() {
    api
      .getAllPosts()
      .then((posts) => {
        this.setState({ posts: utils.objectToArray(posts) });
      })
      .catch((err) => {
        console.log(`ERROR: ${err}`);
      });
  }
}
