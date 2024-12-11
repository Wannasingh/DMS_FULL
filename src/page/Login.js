/* eslint-disable */

import React, { useState } from "react";
import "../page/Login.css";
import SignInForm from "../components/Signin";

export default function App() {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  const containerClass =
    `container ${type === "signUp" ? "right-panel-active" : ""}`;

  return (
    <div className="App">
      <div className={containerClass} id="container">
        {/* Sign-in Form */}
        <SignInForm />

        {/* Overlay Section */}
        <div className="overlay-container">
          <div className="overlay">
            {/* Left Panel */}
            <div className="overlay-panel overlay-left"></div>

            {/* Right Panel */}
            <div className="overlay-panel overlay-right">
              <img
                src="/img/dsl.png"
                alt="Description of the image"
                style={{ width: "50%" }}
              />
              <h4>กองทุนเงินให้กู้ยืมเพื่อการศึกษา</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
