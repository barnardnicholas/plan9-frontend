import React, { Component, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import ComingSoon from "./components/ComingSoon";

const loading = <p>Loading...</p>;

const renderSite = <div></div>;

const renderLogin = (
  <Suspense fallback={loading}>
    <Login />
  </Suspense>
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={loading}>
        {/* <Header /> */}
        {/* <Dashboard /> */}
        <ComingSoon />
      </Suspense>
    </div>
  );
}

export default App;
