import timestamp from "timestamp";

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

// Get all posts
export const getAllPosts = () => {
  return new Promise((resolve, reject) => {
    const allPostsRef = database.ref("/posts");
    allPostsRef.on("value", (snapshot) => {
      resolve(snapshot.val());
    });
  });
};

// Get n posts
export const getNPosts = (n = 10) => {
  return new Promise((resolve, reject) => {
    const allPostsRef = database.ref("/posts").limitToLast(n);
    allPostsRef.on("value", (snapshot) => {
      resolve(snapshot.val());
    });
  });
};

// Get single post
export const getPostByID = (id, cb) => {
  const singlePostRef = database.ref(`/posts/${id}`);
  singlePostRef.on("value", (snapshot) => {
    console.log("getPostByID: ", snapshot.val());
    cb(snapshot.val());
    return snapshot.val();
  });
};

// Get state
export const getState = () => {
  return new Promise((resolve, reject) => {
    database
      .ref("/state")
      .once("value")
      .then((snapshot) => {
        if (snapshot.val()) {
          resolve(snapshot.val());
        } else {
          reject(new Error("Failed to fetch state"));
        }
      });
  });
};

// Get last post
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
export const playMovie = () => {
  return new Promise((resolve, reject) => {
    database
      .ref(`/state/is_playing`)
      .set(true)
      .then((response) => {
        console.log(response);
        resolve();
      });
  });
};

// Play movie
export const stopMovie = () => {
  return new Promise((resolve, reject) => {
    database
      .ref(`/state/is_playing`)
      .set(false)
      .then((response) => {
        console.log(response);
        resolve();
      });
  });
};

// Reset last post in database
export const _resetLastPost = () => {
  const time = timestamp();
  const initialLastPost = {
    frame_timestamp: 7500,
    image_number: 4,
    filename: "img_004.jpg",
    frame_number: 180,
    subtitle: null,
    log_timestamp: time,
    log_status: "",
    comment: "Manual Reset",
    log_date: new Date(time).toLocaleString(),
    log_id: time,
    status: "",
    log_output: [],
  };
  console.log("Performing Manual Reset of last post information...");
  return new Promise((resolve, reject) => {
    database
      .ref(`/state/last_post`)
      .set(initialLastPost)
      .then(() => {
        console.log("Success!");
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

// Erase all posts in database
export const _eraseAllPosts = () => {
  return new Promise((resolve, reject) => {
    const time = timestamp();
    database.ref(`/state/date_last_erased`).set(time);
    database.ref("/posts").set(null);
    const newPostRef = database.ref(`/posts`);
    newPostRef.on("value", (snapshot) => {
      console.log(snapshot.val());
      resolve(snapshot.val());
    });
  });
};
