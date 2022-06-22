
import { React, useEffect, useState, popupCloseHandler, visibility } from "react";
import popupStyles from "./custom-popup.module.css";
import PropTypes from "prop-types";
const CustomPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Hello Jeetendra"
      >
        <h1>Hello This is Popup Content Area</h1>
        <h2>This is my lorem ipsum text here!</h2>
      </CustomPopup>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <div className={popupStyles.content}>{props.children}</div>
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomPopup;
