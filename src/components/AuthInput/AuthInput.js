import React from "react";
import "./AuthInput.css";
const AuthInput = (props) => {
  return (
    <>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`textFieldForm ${props.className}`}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        name={props.name}
      />
    </>
  );
};

export default AuthInput;
