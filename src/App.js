import React, { Component, Suspense } from "react";
import { MyProvider, MyContext } from "./Context";
import "./App.css";

import Login from "./components/Login";
import Main from "./components/Dashboard";

const loading = <p>Loading...</p>;

const renderSite = <div></div>;

const renderLogin = (
  <Suspense fallback={loading}>
    <Login />
  </Suspense>
);

function App() {
  const handleSignOut = (context) => {
    const cb = () => {
      console.log("Signed out");
    };
    context.logout(cb);
  };
  return (
    <MyProvider>
      <div className="App">
        <MyContext.Consumer>
          {(context) => {
            if (context.state.currentUid) {
              return (
                <Suspense fallback={loading}>
                  <h1>Plan 9 Frame-By-Frame</h1>
                  <p>
                    {`Logged in as ${
                      context.state.currentDisplayName ||
                      context.state.currentEmail
                    } `}
                    <button
                      onClick={() => {
                        handleSignOut(context);
                      }}
                    >
                      Sign Out
                    </button>
                  </p>
                  <Main />
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
