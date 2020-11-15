import React from "react";
import logo from "./logo.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer text-center ">
      <p>
        <a>open-sourced</a> code by Heather Church{" "}
      </p>
      <p>made in React</p>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
