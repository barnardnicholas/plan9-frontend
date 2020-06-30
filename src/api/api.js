import { v1 as uuidv1 } from "uuid";
import timestamp from "timestamp";
import * as utils from "../utils/utils";

// Import Firebase
import * as firebase from "firebase";

// Auth variables
import * as auth from "../auth/firebase-auth";
// import * as auth from "../env_variables/env";

// Initialize Firebase
firebase.initializeApp(auth.firebaseConfig);

// Database functions --------------------------------------

// Database Reference
const database = firebase.database();

export const getAllPosts = (cb) => {
  const allPostsRef = database.ref("/posts");
  allPostsRef.on("value", (snapshot) => {
    console.log("getAllPosts: ", snapshot.val());
    cb(snapshot.val());
    return snapshot.val();
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

export const postPost = (cb, data) => {
  const time = timestamp();
  const uid = `p9_${time}`;
  const formattedDate = utils.formatTimeStamp(time);
  const newData = {
    ...data,
    post_id: uid,
    post_timestamp: time,
    post_date: formattedDate,
  };
  console.log("API postPost");
  database.ref(`/posts/${uid}`).set(newData);
  const newPostRef = database.ref(`/posts/${uid}`);
  newPostRef.on("value", (snapshot) => {
    cb(snapshot.val());
    return snapshot.val();
  });
};

// User Authentication --------------------------------------

// export const userSignIn = (email, password) => {
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then((response) => {
//       console.dir(response);
//     })
//     .catch((error) => {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       console.log(errorCode, errorMessage);
//     });
// };

// User Authentication --------------------------------------

// Sign into Firebase
export const userSignIn = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      return Promise.resolve();
    })
    .catch(() => {
      return Promise.reject();
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

export const editUserInfo = (
  data = {},
  cb = () => {
    console.log("ERROR - no callback function provided");
  }
) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile(data)
    .then(() => {
      cb(data);
    })
    .catch((error) => {
      cb({ error });
    });
};

export const getCurrentUser = (
  cb = () => {
    console.log("ERROR - no callback function provided");
  }
) => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) {
    cb(currentUser);
  } else {
    cb(null);
  }
};

export const checkForCurrentUser = (
  cb = () => {
    console.log("ERROR - no callback function provided");
  }
) => {
  firebase.auth().onAuthStateChanged((user = null) => {
    if (user) {
      const {
        uid,
        email,
        emailVerified,
        phoneNumber,
        displayName,
        photoURL,
        isAnonymous,
      } = user;
      cb({
        uid: uid === null ? "" : uid,
        email: email === null ? "" : email,
        emailVerified: emailVerified === null ? "" : emailVerified,
        phoneNumber: phoneNumber === null ? "" : phoneNumber,
        displayName: displayName === null ? "" : displayName,
        photoURL: photoURL === null ? "" : photoURL,
        isAnonymous: isAnonymous === null ? "" : isAnonymous,
      });
    } else {
      cb(null);
    }
  });
};
