import React from "react";
import classNames from "classnames";

const ModalBody = ({ children, className }) => {
  const componentClassName = classNames("hks_modalBody", className);
  return <div className={componentClassName}>{children}</div>;
};

export default ModalBody;
