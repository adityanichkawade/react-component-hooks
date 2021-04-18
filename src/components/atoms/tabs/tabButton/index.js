import React from "react";
import classNames from "classnames";

const TabButton = ({ className, children, isActive, ...props }) => {
  const componentClassName = classNames(
    "tabButton",
    { tabButtonActive: isActive },
    className
  );
  return (
    <button className={componentClassName} {...props}>
      {children}
    </button>
  );
};

export default TabButton;
