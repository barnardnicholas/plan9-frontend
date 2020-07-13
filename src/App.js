import React, { Component, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Link } from "@reach/router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import ComingSoon from "./components/ComingSoon";
import Loading from "./components/Loading";
import * as api from "./api/api";
import * as auth from "./auth/firebase-auth";

// Import Firebase
import * as firebase from "firebase";

const renderLogin = (
  <Suspense fallback={Loading}>
    <Login />
  </Suspense>
);

export default class App extends Component {
  state = {
    currentUser: {},
  };

  render() {
    return (
      <div className="App">
        <Suspense fallback={Loading}>
          {/* <Header />
          <Router>
            <ComingSoon path="/" />
            <Dashboard path="/dashboard" />
          </Router> */}
          <ComingSoon />
        </Suspense>
      </div>
    );
  }
}
