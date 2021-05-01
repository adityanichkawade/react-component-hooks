import React from "react";
import classNames from "classnames";

const ModalHeader = ({ className, title, onCloseClick }) => {
  const componentClassName = classNames("hks_modalHeader", className);
  return (
    <div className={componentClassName}>
      <span onClick={onCloseClick} className="hks_modalIconClose">
        &times;
      </span>
      <h1>{title}</h1>
    </div>
  );
};

export default ModalHeader;
