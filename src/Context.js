import React, { Component } from "react";
import * as api from "./api/api.js";

let testInterval = null;

export const MyContext = React.createContext();

export class MyProvider extends Component {
  state = {
    currentDisplayName: "",
    currentEmail: "",
    currentEmailVerified: "",
    currentIsAnonymous: "",
    currentPhoneNumber: "",
    currentPhotoURL: "",
    currentUid: "",
    loginPending: false,
    signInError: {
      code: "",
      message: "",
    },
    movieIsPlaying: false,
    last_post_id: "",
    last_post_timestamp: 0,
    last_post_status: "",
    last_post_image: "",
    last_post_screengrab: true,
    last_post_uploaded_image: true,
    last_post_sent_tweet: true,
    postsLoading: false,
    posts: {},
  };

  // User Auth Functions

  logInAsUser = (emailInput, passwordInput, clientCB) => {
    this.setState({ loginPending: true });
    const cb = (user) => {
      if (user.hasOwnProperty("error")) {
        this.setState({
          signInError: { code: user.error.code, message: user.error.message },
          loginPending: false,
        });
        clientCB({
          signInError: { code: user.error.code, message: user.error.message },
        });
      } else {
        const {
          uid,
          displayName,
          email,
          emailVerified,
          phoneNumber,
          photoURL,
          isAnonymous,
        } = user;
        this.setState({
          currentDisplayName: displayName,
          currentEmail: email,
          currentEmailVerified: emailVerified,
          currentIsAnonymous: isAnonymous,
          currentPhoneNumber: phoneNumber,
          currentPhotoURL: photoURL,
          currentUid: uid,
          signInError: { code: "", message: "" },
          loginPending: false,
        });
        clientCB({
          uid: uid === null ? "" : uid,
          email: email === null ? "" : email,
          emailVerified: emailVerified === null ? "" : emailVerified,
          phoneNumber: phoneNumber === null ? "" : phoneNumber,
          displayName: displayName === null ? "" : displayName,
          photoURL: photoURL === null ? "" : photoURL,
          isAnonymous: isAnonymous === null ? "" : isAnonymous,
        });
      }
    };
    api.userSignIn(emailInput, passwordInput, cb);
  };

  logout = (
    clientCB = () => {
      console.log("ERROR - no callback function provided");
    }
  ) => {
    this.setState({
      currentDisplayName: "",
      currentEmail: "",
      currentEmailVerified: "",
      currentIsAnonymous: "",
      currentPhoneNumber: "",
      currentPhotoURL: "",
      currentUid: "",
      signInError: { code: "", message: "" },
    });
    api.userSignOut(clientCB);
  };

  updateUserInfo = (newData, clientCB) => {
    const cb = (userData) => {
      console.log("SUCCESS", userData);
      clientCB(userData);
    };
    api.editUserInfo(newData, cb);
  };

  checkForCurrentUser = (
    clientCB = () => {
      console.log("ERROR - No callback function provided");
    }
  ) => {
    this.setState({ loginPending: true });
    const cb = (user = null) => {
      if (!user) {
        this.setState({ loginPending: false });
      } else {
        const {
          uid,
          displayName,
          email,
          emailVerified,
          phoneNumber,
          photoURL,
          isAnonymous,
        } = user;
        this.setState({
          currentDisplayName: displayName,
          currentEmail: email,
          currentEmailVerified: emailVerified,
          currentIsAnonymous: isAnonymous,
          currentPhoneNumber: phoneNumber,
          currentPhotoURL: photoURL,
          currentUid: uid,
          loginPending: false,
          signInError: { code: "", message: "" },
        });
        clientCB(user);
      }
    };
    api.checkForCurrentUser(cb);
  };

  changeDisplayName = (newName) => {
    this.setState({ currentDisplayName: newName });
  };

  // Post Database Functions

  getAllPosts = (
    clientCB = () => {
      console.log("ERROR - No callback function provided");
    }
  ) => {
    this.setState({ postsLoading: true });
    const cb = (posts = null) => {
      console.log("Context CB");
      if (!posts) {
        console.log("No Posts");
        this.setState({ postsLoading: false });
      } else {
        console.log("Posts: ", posts);
        this.setState({
          postsLoading: false,
          posts: posts,
        });
        clientCB(posts);
      }
    };
    api.getAllPosts(cb);
  };

  postPost = (
    clientCB = () => {
      console.log("ERROR - No callback function provided");
    },
    data = {}
  ) => {
    const cb = (post = null) => {
      console.log("Context CB");
      if (!post) {
        console.log("No Posts");
      } else {
        console.log("Post: ", post);
        clientCB(post);
      }
    };
    api.postPost(cb, data);
  };

  // Bot
  repeatTestStart = () => {
    console.log("repeatTestStart");
    testInterval = setInterval(() => {
      const cb = (post) => {
        console.log("repeatTestPost CB");
      };
      this.postPost(cb);
    }, 10000);
  };

  repeatTestStop = () => {
    console.log("repeatTestStop");
    clearInterval(testInterval);
    testInterval = null;
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          postPost: this.postPost,
          getAllPosts: this.getAllPosts,
          changeDisplayName: this.changeDisplayName,
          logInAsUser: this.logInAsUser,
          logout: this.logout,
          updateUserInfo: this.updateUserInfo,
          checkForCurrentUser: this.checkForCurrentUser,
          repeatTestStart: this.repeatTestStart,
          repeatTestStop: this.repeatTestStop,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }

  componentDidMount() {
    this.checkForCurrentUser(() => {
      console.log("Context user check complete");
    });
  }
}
