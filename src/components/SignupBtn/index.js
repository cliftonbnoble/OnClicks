import React from "react";
import "./style.css";

function SignupBtn(props) {
  return (
    <button onClick={props.onClick} className={`Signup-btn ${props["data-value"]}`} {...props} />
  );
}

export default SignupBtn;
