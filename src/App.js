import logo from "./logo.svg";
import "./App.css";
import GooglePay from "@google-pay/button-react";
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>
        <img src={logo} className="App-logo" alt="logo" /> Gpay React
        Integration
      </h1>
      <hr />
    </div>
  );
}

export default App;
