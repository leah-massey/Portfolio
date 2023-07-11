import React from "react";
import "./Popup.css";
import CV from "../assets/Leah-CV-single-page.png";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <TransformWrapper
          defaultScale={1}
          defaultPositionX={100}
          defaultPositionY={200}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
              <div className="flex items-start">
                <button
                  className="bg-cyan-950 group text-gray-50  px-1 py-1 my-2 flex items-center -mt-4 mr-2"
                  onClick={() => zoomOut()}
                >
                  <FaMinus className="px-1.2" />
                </button>
                <button
                  className="bg-cyan-950 group text-gray-50  px-1 py-1 my-2 flex items-center -mt-4"
                  onClick={() => zoomIn()}
                >
                  <FaPlus className="px-1.2" />
                </button>
              </div>

              <TransformComponent>
                <img src={CV} alt="CV" />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
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
