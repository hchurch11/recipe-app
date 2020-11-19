import React from "react";
import logo from "./logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer text-center ">
      <p>
        <a href="https://github.com/hchurch11/recipe-app">open-sourced</a> code
        by Heather Church{" "}
      </p>
      <p>made in React</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
