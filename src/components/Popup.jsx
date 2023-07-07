import React from "react";
import "./Popup.css";
import CV from "../assets/Leah-CV-single-page.png";
import { FaTimes } from "react-icons/fa";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <img src={CV} alt="CV" />
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          <FaTimes />
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
export default Popup;
