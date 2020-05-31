import React from "react";
import { MyContext } from "../Context";

export default function PostTest() {
  const data = {
    post_status: "Test Status",
    post_image:
      "https://www.telegraph.co.uk/content/dam/Pets/spark/royal-canin/happy-puppy-xlarge.jpg",
    post_screengrab: true,
    post_uploaded_image: true,
    post_sent_tweet: true,
  };

  return (
    <MyContext.Consumer>
      {(context) => {
        const postTestPost = () => {
          const cb = (post) => {
            console.log(post);
          };
          context.postPost(cb, data);
        };
        return <button onClick={postTestPost}>Post Test Post</button>;
      }}
    </MyContext.Consumer>
  );
}
