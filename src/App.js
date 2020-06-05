import React, { Component, Suspense } from "react";
import { MyProvider, MyContext } from "./Context";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import RepeatTest from "./components/RepeatTest";

const loading = <p>Loading...</p>;

const renderSite = <div></div>;

const renderLogin = (
  <Suspense fallback={loading}>
    <Login />
  </Suspense>
);

function App() {
  return (
    <MyProvider>
      <div className="App">
        <MyContext.Consumer>
          {(context) => {
            if (context.state.currentUid) {
              return (
                <Suspense fallback={loading}>
                  <Header />
                  <Dashboard />
                </Suspense>
              );
            } else {
              if (context.state.loginPending) {
                return loading;
              } else {
                return renderLogin;
              }
            }
          }}
        </MyContext.Consumer>
      </div>
    </MyProvider>
  );
}

export default App;
