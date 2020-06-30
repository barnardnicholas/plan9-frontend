import React, { Component, Suspense } from "react";
import Loading from "./Loading";
import PostCard from "./PostCard";
import * as api from "../api/api";

export default class PostLog extends Component {
  state = {
    postsArray: [],
  };

  render() {
    return (
      <Suspense fallback={Loading}>
        <div className="post-log">
          <h3>Post Log</h3>
          <button>Fetch Posts</button>
          <ol>
            {this.state.postsArray.map((post) => {
              return <PostCard post={post} key={post.post_id} />;
            })}
          </ol>
        </div>
      </Suspense>
    );
  }
}
