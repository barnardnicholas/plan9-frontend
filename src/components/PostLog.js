import React, { Component, Suspense, useEffect } from "react";
import { MyContext } from "../Context";
import Loading from "./Loading";
import PostCard from "./PostCard";
import * as api from "../api/api";

export default class PostLog extends Component {
  render() {
    return (
      <Suspense fallback={Loading}>
        <MyContext.Consumer>
          {(context) => {
            const handleFetchPosts = () => {
              const cb = () => {
                console.log("Fetched Posts");
              };
              context.getAllPosts(cb);
            };
            const makePostsArray = (postsObj) => {
              const postArray = [];
              for (let key in postsObj) {
                postArray.push(postsObj[key]);
              }
              postArray.sort((a, b) => a.post_timestamp - b.post_timestamp);
              return postArray;
            };
            const postsArray = makePostsArray(context.state.posts);

            return (
              <section>
                <h3>Post Log</h3>
                <button onClick={handleFetchPosts}>Fetch Posts</button>
                <ol>
                  {postsArray.map((post) => {
                    return <PostCard post={post} key={post.post_id} />;
                  })}
                </ol>
              </section>
            );
          }}
        </MyContext.Consumer>
      </Suspense>
    );
  }

  componentDidMount() {
    return (
      <MyContext.Consumer>
        {(context) => {
          const cb = () => {
            console.log("Fetched Posts");
          };
          context.getAllPosts(cb);
        }}
      </MyContext.Consumer>
    );
  }
}
