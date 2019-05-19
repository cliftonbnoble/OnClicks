import React from "react";
import "./style.css";

function LoginBtn(props) {
  return (
    <button onClick={props.onClick} className={`Login-btn ${props["data-value"]}`} {...props} />
  );
}

export default LoginBtn;
