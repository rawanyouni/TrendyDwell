import React from "react";
import "./SocialAuth.css";
const SocialAuth = (props) => {
  return (
    <a href={props.href} className="social">
      {props.socialIcon}
    </a>
  );
};

export default SocialAuth;
