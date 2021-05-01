import React from "react";
import classNames from "classnames";

const ModalFooter = ({ className, children }) => {
  const componentClassName = classNames("hks_modalFooter", className);
  return <div className={componentClassName}>{children}</div>;
};

export default ModalFooter;
