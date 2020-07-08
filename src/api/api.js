// import { v1 as uuidv1 } from "uuid";
// import timestamp from "timestamp";
import * as utils from "../utils/utils";

// Import Firebase
import * as firebase from "firebase";

// Auth variables
import * as auth from "../auth/firebase-auth";
// import * as auth from "../env_variables/env";

// Initialize Firebase
firebase.initializeApp(auth.firebaseConfig);

// Database Reference
const database = firebase.database();

// User Authentication --------------------------------------
// Sign into Firebase
export const userSignIn = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      return Promise.resolve(response.user);
    })
    .catch(() => {
      return Promise.reject(null);
    });
};

// Sign out of Firebase
export const userSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      return Promise.resolve();
    })
    .catch(() => {
      return Promise.reject();
    });
};

// Get current authenticated user
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    if (firebase.auth().currentUser) {
      resolve(firebase.auth().currentUser);
    } else {
      reject(new Error(null));
    }
  });
};

// Database functions --------------------------------------

export const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    const allPostsRef = database.ref("/posts");
    allPostsRef.on("value", (snapshot) => {
      resolve(snapshot.val());
    });
  });
};

export const getPostByID = (id, cb) => {
  const singlePostRef = database.ref(`/posts/${id}`);
  singlePostRef.on("value", (snapshot) => {
    console.log("getPostByID: ", snapshot.val());
    cb(snapshot.val());
    return snapshot.val();
  });
};

// Get last post & store locally
export const getLastPost = () => {
  return new Promise((resolve, reject) => {
    database
      .ref("/state/last_post")
      .once("value")
      .then((snapshot) => {
        if (snapshot.val()) {
          resolve(snapshot.val());
        } else {
          reject(new Error("Failed to fetch last post"));
        }
      });
  });
};

// Play movie
const playMovie = () => {
  return new Promise((resolve, reject) => {
    database
      .ref(`/state/playing`)
      .set(true)
      .then((response) => {
        console.log(response);
        resolve();
      });
  });
};
