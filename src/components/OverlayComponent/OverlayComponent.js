import { React, useContext } from "react";
import "./OverlayComponent.css";
import { GlobalVariablesContext } from "../../GlobalVariables";

const OverlayComponent = (props) => {
  const { loading, setLoading } = useContext(GlobalVariablesContext);
  const handleClick = () => {
    const container = document.querySelector(".container");

    if (props.id === "signUp") {
      container.classList.add("right-panel-active");
    } else if (props.id === "signIn") {
      container.classList.remove("right-panel-active");
    }
  };

  return (
    <>
      <div className={`overlay-panel ${props.className}`}>
        <h2>{props.overlayTitle}</h2>
        {props.overlayAction === "Sign In" ? (
          <p>To keep connected with us please login with your personal info</p>
        ) : (
          <p>Enter your personal details and start journey with us</p>
        )}

        <button className="ghost" id={props.id} onClick={handleClick}>
          {props.overlayAction}
        </button>
        {/* <div className="animatedWebsiteName">
          <span>T</span>
          <span>r</span>
          <span>e</span>
          <span>n</span>
          <span>d</span>
          <span>y</span>
          <span>D</span>
          <span>w</span>
          <span>e</span>
          <span>l</span>
          <span>l</span>
        </div> */}
      </div>
    </>
  );
};

export default OverlayComponent;
