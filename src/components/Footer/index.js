import React from "react";
import "./style.css";
// import {logo} from "./public/images/brandnameCLEAR.png";

function Footer(props) {
  return (
    <footer className='footer'>
    <div>
      <img src= './images/brandnameCLEAR.png' alt='logo'/>
      <span>&copy; 2019 </span>
    </div>
    <div className='ml-auto'>
      <a href='https://github.com/cliftonbnoble/OnClicks'>Github</a>
    </div>
  </footer>
  );
}

export default Footer;
