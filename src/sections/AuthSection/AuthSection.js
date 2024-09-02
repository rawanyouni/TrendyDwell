//npm install formik yup
import React, { useEffect, useState } from "react";
import "./AuthSection.css";
import { AuthComponent, OverlayComponent } from "../../components/index";
import logo from "../../assets/logo.png";

const AuthSection = () => {
  return (
    <>
      <div className="desktopScreen">
        <div className="BackgroundImgLogo">
          <img className="logoImg" src={logo} alt="logo" />
          <div className="containerAuth">
            <div className="container" id="container">
              <AuthComponent
                formTitle="Create Account"
                authAction="sign up"
                className="sign-up-container"
              />
              <AuthComponent
                formTitle="Sign In"
                authAction="sign in"
                className="sign-in-container"
              />
              <div className="overlay-container">
                <div className="overlay">
                  <OverlayComponent
                    overlayTitle="Welcome Back!"
                    id="signIn"
                    overlayAction="Sign In"
                    className="overlay-left"
                  />
                  <OverlayComponent
                    overlayTitle="Welcome to Trendy Dwell!"
                    id="signUp"
                    overlayAction="Sign Up"
                    className="overlay-right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobileScreen">
        <div className="BackgroundImgLogo">
          <img className="logoImg" src={logo} alt="logo" />
          <img className="logoImg1" src={logo} alt="logo" />
          <img className="logoImg2" src={logo} alt="logo" />
          <div className="containerAuth">
            <div className="container-of-two-forms">
              <div className="formComponentsContainer">
                <AuthComponent
                  formTitle="Sign In"
                  authAction="sign in"
                  className="sign-in-container"
                />
                <AuthComponent
                  formTitle="Create Account"
                  authAction="sign up"
                  className="sign-up-container"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthSection;
