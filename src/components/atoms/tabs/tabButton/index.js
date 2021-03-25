import React from "react";
import classNames from "classnames";
import style from "./tabButton.module.css";

const TabButton = ({ className, children, isActive, ...props }) => {
  const componentClassName = classNames(
    style.tabButton,
    { [style.tabButtonActive]: isActive },
    className
  );
  return (
    <button className={componentClassName} {...props}>
      {children}
    </button>
  );
};

export default TabButton;
